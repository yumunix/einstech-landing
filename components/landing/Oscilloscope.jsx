"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_resolution;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    vec3 colOrange = vec3(0.95, 0.35, 0.12);
    vec3 colPink   = vec3(0.95, 0.57, 0.78);
    vec3 colBlue   = vec3(0.21, 0.40, 0.95);
    vec3 bgCol     = vec3(0.01, 0.01, 0.01);

    float t = u_time * 0.5;

    float w1 = sin(st.x * 6.0 + t) * 0.2 + 0.5;
    float w2 = sin(st.x * 5.0 - t * 1.2) * 0.25 + 0.5;
    float w3 = sin(st.x * 20.0 + t * 2.0) * 0.05 + 0.5;

    float dist1 = abs(st.y - w1);
    float dist2 = abs(st.y - w2);
    float dist3 = abs(st.y - w3);

    float glow1 = 0.02 / (dist1 + 0.01);
    float glow2 = 0.015 / (dist2 + 0.01);
    float glow3 = 0.005 / (dist3 + 0.01);

    vec3 leftCol  = mix(colOrange, colPink, st.x);
    vec3 rightCol = mix(colPink, colBlue, st.x);
    vec3 waveCol1 = mix(leftCol, rightCol, 0.5);
    vec3 waveCol2 = colBlue;

    vec3 finalColor = bgCol;

    if (st.y < w1) finalColor += waveCol1 * 0.2 * (1.0 - st.y);
    if (st.y < w2) finalColor += waveCol2 * 0.15 * (1.0 - st.y);

    finalColor += waveCol1 * glow1;
    finalColor += waveCol2 * glow2;
    finalColor += vec3(1.0) * glow3 * 0.5;

    float scanline = sin(st.y * 800.0) * 0.04;
    finalColor -= scanline;

    float noise = (random(st * (t + 1.0)) - 0.5) * 0.15;
    finalColor += noise;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function Oscilloscope() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,  1, -1, -1,  1,
        -1,  1,  1, -1,  1,  1,
      ]),
      gl.STATIC_DRAW,
    );

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    };

    let raf;
    const start = performance.now();
    const render = () => {
      resize();
      gl.uniform1f(timeLoc, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      gl.deleteBuffer(buffer);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas id="oscilloscope" ref={canvasRef} />;
}
