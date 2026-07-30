# 제품 카탈로그 정기검토

`catalog.json`이 홈페이지 판매·지원 제품의 관리대장이고, `source-baselines.json`은 공식 페이지의 승인된 기준 지문입니다.

- 매주: 홈페이지와 공식 자료 링크 확인
- 매월: 공식 자료 내용 지문 변경 확인
- 분기: `nextReview` 도래 제품의 판매·단종·사양·이미지·가격정책 검토
- 매년 1월: 전체 제품을 리뉴얼 대상으로 통보

자동화는 홈페이지를 수정하지 않습니다. 확인이 필요한 경우 GitHub Issue를 만들고, Secrets가 설정되어 있으면 Telegram 및 이메일을 함께 발송합니다.

## 알림 Secrets

- Telegram: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- Email: `SMTP_SERVER`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_FROM`, `PRODUCT_REVIEW_EMAIL_TO`

제품 검토 후 `lastReviewed`, `nextReview`, `status`를 갱신하고 공식 페이지 변경을 승인할 때만 다음 명령으로 기준 지문을 재생성합니다.

```bash
node scripts/check-product-catalog.mjs --mode=monthly --write-baseline
```
