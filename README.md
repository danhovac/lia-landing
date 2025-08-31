# LIA Landing Page

> AI Healthcare Platform for Menopausal Korean Women

## 🚀 Overview

LIA (Life-stage Intelligence Assistant) is an AI-powered healthcare platform specifically designed for Korean women experiencing menopause, created by an OB/GYN specialist.

**Live Site**: [Coming Soon]

## 📋 Features

- 🏥 Professional medical guidance from OB/GYN specialist
- 💬 AI-powered personalized health conversations
- 📚 Educational resources and eBook
- 🌸 Warm, supportive community approach
- 📱 Mobile-responsive design

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Components**: ShadCN/UI
- **Forms**: Tally + n8n automation
- **Deployment**: Vercel
- **Email**: Brevo (via n8n)

## 🎨 Design System

- **Primary Color**: Soft Warm Pink (#F6C1C1)
- **Background**: White Smoke (#F9F9F9)
- **Text**: Deep Charcoal (#1C1C1E)
- **Balance**: 60% Modern Minimalist + 40% Warm Healthcare

## 📦 Installation

```bash
# Clone repository
git clone [repository-url]
cd lialaning

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
# Add your environment variables here
NEXT_PUBLIC_TALLY_FORM_ID=n98p8Y
```

### Tally Form Setup
1. Current form ID: `n98p8Y`
2. Form URL: https://tally.so/r/n98p8Y
3. Collects: Name, Email, User Type

### n8n Automation
- Webhook endpoint configured for email automation
- Sends welcome emails with eBook
- Stores data for future use

## 📁 Project Structure

```
lialaning/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── sections/    # Page sections
│   └── ui/          # ShadCN components
├── docs/            # Documentation
├── hooks/           # Custom React hooks
├── lib/             # Utilities
└── public/          # Static assets
```

## 🚦 Development

```bash
# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## 📝 Documentation

See `/docs` folder for:
- `DESIGN_STANDARDS.md` - Design guidelines
- `BUSINESS_INFO.md` - Company information
- `TALLY_N8N_INTEGRATION.md` - Form integration guide
- `website_TRD_250829.md` - Technical requirements

## 🤝 Contributing

This is a private project. For inquiries, contact: contact@medicaltica.com

## 📄 License

© 2025 MedicalTica. All rights reserved.

## 👥 Team

- **CEO**: 이예지 (Lee Yeji)
- **Contact**: contact@medicaltica.com
- **Business Registration**: 113-88-03524

---

*Built with ❤️ for Korean women's health*
