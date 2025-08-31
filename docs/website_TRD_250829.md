# TRD v1.2 — LIA 랜딩페이지 (코드‑퍼스트: Next.js + Vercel → Supabase 업그레이드)

**문서 소유자:** 이예지(PO) · 
**버전/일자:** v1.2 / 2025‑08‑29
**대상 독자:** 비개발 제작자(커서 AI 활용), 마케팅, 향후 합류 개발팀
**목적:** 처음부터 **Next.js + Vercel**로 배포하고, 초기에는 **Tally 임베드 또는 네이티브 /api/submit + Brevo**로 가볍게 운영한 뒤, **Supabase(저장/Edge Functions)**를 붙여 **무중단 업그레이드**하기 위한 **불변 계약 + 구현 사양**을 정의한다.

---

## 0) 골/원칙

*   **최우선 목표:** 리드 수집(웨이팅리스트 + eBook) 전환률 극대화
*   **규정 준수:** 의료행위 아님 고지, 개인정보/수신동의, 쿠키 동의(Consent Mode)
*   **핸드오프:** URL/이벤트/데이터/토큰은 **불변 계약**으로 고정 → 인수·확장 쉬움
*   **퍼포먼스:** SSG(+ISR 60s), LCP < 2.5s, CLS < 0.05, INP < 200ms

**비목표(이번):** CMS/블로그, 파트너 섹션(링크만), 챗봇 데모 모달, 다국어, 결제

---

## 1) 아키텍처 개요

### Phase 1 — 즉시 출시(1주) ✅ IMPLEMENTED

*   **프론트:** Next.js(App Router) + TS + Tailwind, SSG(+ISR)
*   **폼 솔루션 (Plan A - 실제 구현):**
    *   **A. Tally 임베드 + n8n 자동화**: 
        - Tally Form ID: `n98p8Y` (https://tally.so/r/n98p8Y)
        - `<iframe>` 임베드 완료
        - Thank You URL 리디렉션 설정
        - n8n webhook으로 자동 이메일 발송 (Brevo/SendGrid)
        - 데이터 수집 → Tally Dashboard → n8n → Email/DB
    *   ~~**B. 네이티브 폼 → `/api/submit`**~~ (Phase 2로 연기)
*   **배포:** Vercel + Custom Domain
*   **추적/동의:** GA4(+GTM), Cookie 배너(Consent Mode), reCAPTCHA v3 또는 Turnstile

### Phase 2 — 업그레이드(개발자 합류 시)

*   **데이터 저장:** Supabase(Postgres) + **RLS**
*   **메일 파이프라인:** Supabase **Edge Function**에서 트랜잭션 메일 발송(Brevo/Postmark)
*   **eBook 보안:** Supabase Storage **서명 URL(48h)**
*   **E2E 테스트:** Playwright(폼→DB→메일→다운로드)

---

## 2) IA & 레이아웃 **계약(불변)**

*   **섹션 순서:** Hero → USP(‘의료행위 아님’ 고지 포함) → Founder → 미리보기(GIF/이미지) → Social Proof → **Final CTA(Form)** → Footer(정책/회사)
*   **URL:** `/`, `/privacy`, `/terms` *(변경 시 301 맵 필수)*
*   **접근성:** h1=1, landmark(`header/main/footer`), 포커스 링, 명도 4.5:1
*   **디자인 토큰(JSON):**

    ```json
    {
      "colors": {"bg":"#F9F9F9","text":"#1C1C1E","accent":"#F6C1C1","muted":"#6E6E73"},
      "radius": {"lg":"1rem"},
      "space": {"sectionY":"4rem"},
      "type": {"h1":"clamp(28px,4vw,40px)","body":"16px/1.6"}
    }
    ```

*   **OG/메타:** OG 1200×630, canonical, sitemap/robots, 프리뷰 환경 `noindex`

---

## 2.5) Tally + n8n 워크플로우 (실제 구현)

### 데이터 플로우
```
사용자 입력 (Tally Form)
    ↓
Tally 폼 제출
    ↓
Thank You Page 표시
    ↓
Tally Webhook → n8n
    ↓
n8n 워크플로우 실행
    ├── 이메일 발송 (Brevo/SendGrid)
    ├── 데이터베이스 저장 (추후 Supabase)
    ├── eBook 링크 생성
    └── Slack/Discord 알림
```

### n8n 자동화 설정
- **Webhook URL**: `https://n8n.medicaltica.com/webhook/lia-early-access`
- **이메일 템플릿**: 환영 메시지 + eBook 다운로드 링크
- **응답 시간**: 즉시 (< 5초)
- **백업**: Tally Dashboard에 모든 데이터 보관

---

## 3) 페이지 & 폴더 구조(권장)