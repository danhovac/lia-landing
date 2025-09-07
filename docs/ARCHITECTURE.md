# LIA Landing Page Architecture Documentation

**Version**: 1.0.0  
**Last Updated**: 2025-08-31  
**Author**: LIA Development Team

## 📋 Table of Contents
- [Architecture Overview](#architecture-overview)
- [Directory Structure](#directory-structure)
- [Components](#components)
- [Hooks](#hooks)
- [Services](#services)
- [Types](#types)
- [Utilities](#utilities)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Design Patterns](#design-patterns)
- [Version History](#version-history)

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    Next.js App Router                │
├─────────────────────────────────────────────────────┤
│                     Presentation Layer               │
│  ┌─────────────┐  ┌──────────┐  ┌──────────────┐  │
│  │   Sections  │  │    UI    │  │    Layout    │  │
│  │ Components  │  │Components│  │  Components  │  │
│  └─────────────┘  └──────────┘  └──────────────┘  │
├─────────────────────────────────────────────────────┤
│                    Business Logic                    │
│  ┌─────────────┐  ┌──────────┐  ┌──────────────┐  │
│  │    Hooks    │  │ Services │  │    Types     │  │
│  └─────────────┘  └──────────┘  └──────────────┘  │
├─────────────────────────────────────────────────────┤
│                    External Services                 │
│  ┌─────────────┐  ┌──────────┐  ┌──────────────┐  │
│  │    Tally    │  │   n8n    │  │    Brevo     │  │
│  └─────────────┘  └──────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────┘
```

## 📁 Directory Structure

```
lialaning/
├── app/                      # Next.js App Router
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Home page
│   └── tally-custom.css    # Tally form styles
│
├── components/              # React Components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── FounderStory.tsx
│   │   ├── LiaDifferentiation.tsx
│   │   ├── ConversationPreview.tsx
│   │   ├── Testimonials.tsx
│   │   ├── YouTubeChannel.tsx
│   │   └── FinalCTA.tsx
│   └── ui/                 # ShadCN UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── toast.tsx
│       └── toaster.tsx
│
├── hooks/                   # Custom React Hooks
│   └── use-toast.ts        # Toast notification hook
│
├── lib/                     # Utilities
│   └── utils.ts            # Helper functions
│
├── types/                   # TypeScript Types (future)
│   └── index.ts            # Type definitions
│
└── services/               # External Services (future)
    └── api.ts              # API integration
```

## 🧩 Components

### Layout Components

#### `Header.tsx`
- **Purpose**: Navigation header with smooth scrolling
- **State**: 
  - `scrolled`: boolean - Track scroll position
- **Methods**:
  - `scrollToSection()`: Smooth scroll navigation
- **Props**: None
- **Dependencies**: React hooks (useState, useEffect)

#### `Footer.tsx`
- **Purpose**: Site footer with company info and links
- **Props**: None
- **Static Data**: Business information, social links

### Section Components

#### `Hero.tsx`
- **Purpose**: Landing hero section with CTA
- **Features**:
  - Gradient background
  - Animated elements
  - Scroll animations
- **Props**: None

#### `FounderStory.tsx`
- **Purpose**: Founder introduction and credibility
- **Features**:
  - Quote block
  - YouTube link
- **Props**: None

#### `LiaDifferentiation.tsx`
- **Purpose**: Product features showcase
- **Features**:
  - Feature cards with icons
  - Grid layout
- **Props**: None

#### `ConversationPreview.tsx`
- **Purpose**: Chat interface demonstration
- **Features**:
  - Mock chat messages
  - Auto-scroll animation
- **State**:
  - `messages`: Message array
  - `isTyping`: boolean

#### `Testimonials.tsx`
- **Purpose**: User testimonials display
- **Features**:
  - Card-based layout
  - User avatars (emoji)
- **Props**: None

#### `YouTubeChannel.tsx`
- **Purpose**: YouTube content showcase
- **Features**:
  - Video thumbnails
  - External links
- **Props**: None

#### `FinalCTA.tsx`
- **Purpose**: Email collection form
- **Features**:
  - Tally form integration
  - Dynamic height adjustment
- **Hooks**:
  - `useEffect`: Load Tally script
- **External**: Tally.so iframe

### UI Components (ShadCN)

All UI components follow the ShadCN/Radix UI pattern:

```typescript
// Standard ShadCN component structure
interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  // Specific props
}

const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <Element
        ref={ref}
        className={cn(defaultStyles, className)}
        {...props}
      />
    )
  }
)
```

## 🪝 Hooks

### `use-toast.ts`
```typescript
interface Toast {
  id: string
  title?: string
  description?: string
  action?: ToastAction
  variant?: 'default' | 'destructive'
}

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  
  const toast = (props: ToastProps) => void
  const dismiss = (toastId?: string) => void
  
  return { toast, dismiss, toasts }
}
```

## 🔧 Services (Planned v2.0.0)

### API Service Structure
```typescript
// services/api.ts (future implementation)
interface APIService {
  submitEarlyAccess(data: EarlyAccessForm): Promise<Response>
  sendWelcomeEmail(email: string): Promise<void>
  trackEvent(event: AnalyticsEvent): void
}
```

### External Integrations
- **Tally**: Form submissions
- **n8n**: Workflow automation
- **Brevo**: Email service
- **Google Analytics**: Event tracking

## 📝 Types (Planned v2.0.0)

### Current Type Definitions (inline)
```typescript
// Currently defined inline, to be extracted to types/
interface Message {
  id: string
  sender: 'user' | 'lia'
  content: string
  timestamp?: Date
}

interface Testimonial {
  id: string
  name: string
  age: string
  content: string
  emoji: string
}

interface Feature {
  icon: JSX.Element
  title: string
  description: string
}
```

## 🛠️ Utilities

### `lib/utils.ts`
```typescript
// Class name merger utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Future utilities
export function formatDate(date: Date): string
export function validateEmail(email: string): boolean
export function generateId(): string
```

## 📊 State Management

### Current State Management
- **Local State**: React useState for component-level state
- **No Global State**: Each component manages its own state
- **Form State**: React Hook Form + Zod validation (removed in favor of Tally)

### Future Considerations (v2.0.0)
- Context API for theme management
- Zustand for user preferences
- TanStack Query for server state

## 🔄 Data Flow

```
User Interaction
    ↓
Component Event Handler
    ↓
Local State Update / External Service Call
    ↓
UI Re-render / Navigation

Form Submission Flow:
User Input → Tally Form → n8n Webhook → Email/Database
```

## 🎨 Design Patterns

### Component Patterns
1. **Composition Pattern**: UI components use composition
2. **Render Props**: Not currently used
3. **Custom Hooks**: Encapsulate reusable logic
4. **Compound Components**: ShadCN form components

### Code Organization
1. **Single Responsibility**: Each component has one purpose
2. **DRY Principle**: Shared utilities in lib/
3. **Separation of Concerns**: UI, Logic, and Data separated

### Styling Patterns
1. **Utility-First**: Tailwind CSS classes
2. **Component Variants**: Using CVA (class-variance-authority)
3. **Theme Tokens**: CSS variables for theming

## 🔐 Security Considerations

1. **No Client Secrets**: All sensitive data server-side
2. **Input Validation**: Handled by Tally
3. **HTTPS Only**: Enforced in production
4. **CSP Headers**: To be implemented
5. **Rate Limiting**: Handled by external services

## 📈 Performance Optimizations

1. **SSG**: Static Site Generation for all pages
2. **Image Optimization**: Next.js Image component (future)
3. **Code Splitting**: Automatic with Next.js
4. **Font Optimization**: Pretendard loaded efficiently
5. **Lazy Loading**: Tally form loads on demand

## 🧪 Testing Strategy (Planned v2.0.0)

```typescript
// Future test structure
describe('Component', () => {
  it('should render correctly', () => {})
  it('should handle user interaction', () => {})
  it('should manage state properly', () => {})
})
```

## 📚 Version History

### v1.0.0 (2025-08-31)
- Initial architecture
- 8 section components
- Tally form integration
- ShadCN UI components
- Basic hooks and utilities

### Planned v2.0.0
- [ ] Extract types to separate files
- [ ] Add API service layer
- [ ] Implement global state management
- [ ] Add error boundaries
- [ ] Create loading states
- [ ] Add unit tests
- [ ] Implement i18n

## 🔄 Architecture Change Protocol

When making architectural changes:

1. **Document the change** in this file
2. **Update version number** (follow SemVer)
3. **Add entry to Version History**
4. **Update affected components**
5. **Test all integrations**
6. **Update cursor rules if needed**

### Version Numbering
- **Major (X.0.0)**: Breaking changes, major refactors
- **Minor (x.X.0)**: New features, non-breaking additions
- **Patch (x.x.X)**: Bug fixes, minor improvements

## 📋 Component Checklist

When creating new components:
- [ ] Follow existing directory structure
- [ ] Use TypeScript
- [ ] Apply consistent naming conventions
- [ ] Include JSDoc comments
- [ ] Follow ShadCN patterns for UI components
- [ ] Update this architecture document
- [ ] Test on mobile and desktop

## 🚀 Future Roadmap

### Phase 2 (Q1 2025)
- Supabase integration
- User authentication
- Advanced analytics
- A/B testing framework

### Phase 3 (Q2 2025)
- Multi-language support
- CMS integration
- Advanced chat features
- Payment integration

---

**Maintained by**: LIA Development Team  
**Review Cycle**: Monthly  
**Next Review**: 2025-09-30