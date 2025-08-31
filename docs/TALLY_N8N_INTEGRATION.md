# Tally + n8n Integration Guide

## Current Status ✅
- **Tally Form ID**: `n98p8Y`
- **Form URL**: https://tally.so/r/n98p8Y
- **Embedded**: Yes, in FinalCTA component
- **Fields Collected**:
  - 이름 (Name)
  - 이메일 (Email)
  - 구분 (User Type)

## Testing Checklist

### 1. 폼 제출 테스트 ✅
- [ ] Submit test entry through embedded form
- [ ] Submit test entry through direct link
- [ ] Test on mobile device
- [ ] Test with Korean characters

### 2. Thank You 페이지 확인
- [ ] Verify thank you message appears
- [ ] Check if custom thank you page is set in Tally
- [ ] Ensure message is in Korean

### 3. 데이터 수집 확인 (Tally Dashboard)
- [ ] Login to Tally dashboard
- [ ] View responses at: https://tally.so/forms/n98p8Y/submissions
- [ ] Export test data as CSV
- [ ] Verify all fields captured correctly

## n8n Integration (Next Steps)

### Prerequisites
1. **Tally Pro** (for webhooks) or use Zapier/Make as bridge
2. **n8n instance** (self-hosted or cloud)
3. **Email service** (Brevo/SendGrid) API key

### Integration Flow
```
Tally Form Submission
    ↓
Webhook Trigger (Tally Pro or via Zapier)
    ↓
n8n Workflow
    ├── Save to Database (Supabase/Airtable)
    ├── Send Welcome Email (Brevo)
    ├── Add to Newsletter (ConvertKit/Mailchimp)
    └── Notify Team (Slack/Discord)
```

### n8n Workflow Setup

#### Option 1: Direct Webhook (Tally Pro Required)
1. **In Tally**:
   - Go to Form Settings → Integrations
   - Add Webhook
   - URL: `https://your-n8n.com/webhook/tally-early-access`

2. **In n8n**:
   ```json
   {
     "nodes": [
       {
         "name": "Webhook",
         "type": "n8n-nodes-base.webhook",
         "path": "tally-early-access",
         "method": "POST"
       },
       {
         "name": "Send Email",
         "type": "n8n-nodes-base.emailSend",
         "template": "welcome-email"
       }
     ]
   }
   ```

#### Option 2: Via Zapier (Free Tier)
1. **Zapier Setup**:
   - Trigger: New Tally Response
   - Action: Webhook POST to n8n

2. **n8n Webhook URL**:
   ```
   https://your-n8n.com/webhook-test/tally-early-access
   ```

### Email Templates

#### Welcome Email (Korean)
```html
제목: [LIA] 얼리액세스 신청이 완료되었습니다 🎉

안녕하세요 {{name}}님,

LIA 얼리액세스에 관심을 가져주셔서 감사합니다.

🎁 특별 혜택:
- 무료 eBook: "폐경기 완벽 가이드"
- 얼리버드 50% 할인
- 베타 테스터 우선 선정

다음 단계:
1. eBook 다운로드 (아래 링크)
2. 설문조사 참여 (선택사항)
3. 커뮤니티 가입

궁금한 점이 있으시면 언제든 문의해주세요.

감사합니다,
LIA 팀 드림

---
© 2025 MedicalTica. All rights reserved.
```

### Database Schema (Supabase)
```sql
CREATE TABLE early_access_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  user_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  email_sent BOOLEAN DEFAULT FALSE,
  ebook_downloaded BOOLEAN DEFAULT FALSE
);
```

### Environment Variables Needed
```env
# n8n
N8N_WEBHOOK_URL=https://your-n8n.com/webhook

# Email Service (Brevo)
BREVO_API_KEY=your-api-key
BREVO_SENDER_EMAIL=noreply@medicaltica.com
BREVO_SENDER_NAME=LIA Team

# Database (Supabase)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# File Storage (for eBook)
EBOOK_DOWNLOAD_URL=https://your-storage/ebook.pdf
```

### Testing n8n Workflow
1. **Test Webhook**:
   ```bash
   curl -X POST https://your-n8n.com/webhook-test/tally-early-access \
     -H "Content-Type: application/json" \
     -d '{
       "name": "테스트",
       "email": "test@example.com",
       "user_type": "patient"
     }'
   ```

2. **Check Results**:
   - Email received
   - Database entry created
   - Team notification sent

### Monitoring & Analytics
- **Tally**: Form completion rate
- **n8n**: Workflow execution logs
- **Email Service**: Open rates, click rates
- **Database**: User growth metrics

## Security Considerations
- [ ] Use HTTPS for all webhooks
- [ ] Validate email format
- [ ] Implement rate limiting
- [ ] GDPR compliance (consent checkbox)
- [ ] Secure eBook download links (expiring URLs)

## Support Resources
- Tally Docs: https://help.tally.so/
- n8n Docs: https://docs.n8n.io/
- Brevo API: https://developers.brevo.com/

## Contact
For technical support: contact@medicaltica.com

---
Last Updated: 2025-08-31