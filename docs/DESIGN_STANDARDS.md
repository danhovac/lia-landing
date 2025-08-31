# LIA Landing Page Design Standards

## Design Philosophy
**60% Modern Minimalist (Vercel-inspired) + 40% Warm Healthcare**

Our design combines professional medical trust with approachable warmth, targeting Korean women aged 40-60 experiencing menopause.

## Brand Colors

### Primary Palette
```css
/* Soft Warm Pink - Main Brand Color */
--primary-50: #FEF5F5;
--primary-100: #FDE7E7;
--primary-200: #FBD4D4;
--primary-300: #F8B8B8;
--primary-400: #F49999;
--primary-500: #F6C1C1;  /* Main */
--primary-600: #E89999;
--primary-700: #D57777;
--primary-800: #B85555;
--primary-900: #993333;

/* Neutral Colors */
--charcoal: #1C1C1E;  /* Main text */
--smoke: #F9F9F9;     /* Background */

/* Accent Colors */
--trust: #5B8DEE;      /* Medical trust blue */
--trust-light: #7BA5F3;
--trust-dark: #4575D9;

--warmth: #FFB5A7;     /* Warm support */
--warmth-light: #FFC9BD;
--warmth-dark: #FF9B8B;
```

### Usage Guidelines
- **Primary (Pink)**: CTAs, highlights, emotional connection
- **Charcoal**: Body text, headers
- **Trust (Blue)**: Medical credentials, professional elements
- **Warmth**: Support features, community aspects

## Typography

### Font Family
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

### Font Sizes
```css
/* Headings */
h1: text-5xl md:text-7xl lg:text-8xl  /* Hero only */
h2: text-3xl md:text-4xl               /* Section headers */
h3: text-2xl                           /* Subsection headers */
h4: text-xl                            /* Card headers */

/* Body */
body: text-base (1rem)                 /* Default */
large: text-lg                         /* Important paragraphs */
small: text-sm                         /* Secondary info */
extra-small: text-xs                   /* Disclaimers, meta */
```

### Font Weights
- **Bold (700)**: Headers, CTAs
- **Semibold (600)**: Subheaders, emphasis
- **Medium (500)**: Buttons, navigation
- **Regular (400)**: Body text

## Spacing System

### Section Padding
```css
.section-padding {
  padding: 4rem 1.5rem;   /* Mobile */
  md:padding: 5rem 1.5rem; /* Tablet */
  lg:padding: 6rem 1.5rem; /* Desktop */
}
```

### Container Width
```css
.container-width {
  max-width: 1280px;  /* 7xl */
  margin: 0 auto;
}
```

### Component Spacing
- **Card padding**: p-6 to p-8
- **Button padding**: px-6 py-3 (standard), px-8 py-4 (large)
- **Gap between elements**: gap-4 (1rem) to gap-8 (2rem)
- **Margin between sections**: mb-16 (4rem)

## Component Standards

### Buttons

#### Primary Button
```tsx
<button className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium transition-all hover:bg-white/90 transform hover:scale-105">
  Text
</button>
```

#### Secondary Button
```tsx
<button className="px-6 py-3 bg-transparent backdrop-blur-sm border border-white/20 text-white rounded-lg text-sm font-medium transition-all hover:bg-white/10">
  Text
</button>
```

### Cards

#### Feature Card
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
  <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6 text-white">
    {/* SVG Icon */}
  </div>
  <h3 className="text-xl font-bold text-charcoal mb-3">Title</h3>
  <p className="text-gray-600 leading-relaxed">Description</p>
</div>
```

#### Glass Card (Dark Background)
```tsx
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4">
  <div className="text-primary-400 text-2xl font-bold mb-1">Metric</div>
  <div className="text-white/80 text-xs font-medium">Label</div>
</div>
```

### Forms (ShadCN)

#### Input Field
```tsx
<FormField
  control={form.control}
  name="fieldName"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Label *</FormLabel>
      <FormControl>
        <Input placeholder="Placeholder" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

## Icon Guidelines

### NO Emojis in:
- Navigation
- Features/Benefits sections
- CTAs
- Professional sections

### Emojis ONLY in:
- Testimonials (women emojis: 👩, 👩‍🦰, 👩‍🦳)
- Informal user feedback sections

### Use SVG Icons for:
- All professional features
- Navigation indicators
- Benefits/Features
- Form feedback

### Icon Sizes
- Small: w-4 h-4 (16px)
- Medium: w-6 h-6 (24px)
- Large: w-8 h-8 (32px)
- Extra Large: w-10 h-10 (40px)

## Animation Standards

### Transitions
```css
/* Standard transition */
transition-all duration-300

/* Hover effects */
hover:scale-105
hover:shadow-xl

/* Fade animations */
opacity-0 → opacity-100
translate-y-4 → translate-y-0
```

### Scroll Animations
```tsx
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    },
    { threshold: 0.1 }
  )
  // ...
})

className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
```

### Animation Delays
- Sequential items: delay-100, delay-200, delay-300
- Stagger children: 100ms intervals

## Layout Patterns

### Hero Section
- Full viewport height: `min-h-screen`
- Dark gradient background with subtle color accents
- Centered content with max-width constraint
- Glass morphism elements for metrics

### Content Sections
- Alternating backgrounds: white → light gray → white
- Consistent padding via `.section-padding`
- Maximum content width: `max-w-3xl` for readability

### Grid Layouts
- Features: `grid md:grid-cols-3 gap-8`
- Testimonials: `grid md:grid-cols-3 gap-6`
- Two-column: `grid lg:grid-cols-2 gap-12`

## Responsive Design

### Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile-First Approach
```tsx
className="text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Accessibility Standards

### Color Contrast
- Text on white: minimum #595959 (WCAG AA)
- Text on primary-500: use white or charcoal
- Small text: higher contrast ratios required

### Interactive Elements
- Minimum touch target: 44x44px
- Focus indicators: `focus:ring-2 focus:ring-primary-500`
- Hover states for all interactive elements

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Button vs Link usage
- Form labels and ARIA attributes

## Content Guidelines

### Language
- Primary: Korean
- Professional but warm tone
- Medical terminology with lay explanations

### Section Order
1. Hero - Main value proposition
2. Founder Story (소개) - Build trust
3. Features (기능) - Product capabilities
4. Conversation Preview - Product demo
5. Testimonials (후기) - Social proof
6. YouTube (유튜브) - Additional content
7. CTA - Conversion

### Medical Disclaimers
Always include at bottom of medical content:
```
※ 본 서비스는 의료행위가 아니며, 의학적 진단이나 치료를 대체할 수 없습니다.
응급상황이나 심각한 증상이 있을 경우 반드시 의료기관을 방문하시기 바랍니다.
```

## Do's and Don'ts

### DO ✅
- Use consistent spacing (multiples of 4px/0.25rem)
- Maintain visual hierarchy with size and weight
- Test on actual devices, not just browser resize
- Use loading states for async operations
- Include hover/focus states for all interactive elements

### DON'T ❌
- Mix different border radius styles
- Use pure black (#000000) - use charcoal instead
- Add drop shadows on colored backgrounds
- Use more than 3 font sizes per section
- Forget loading and error states

## Quality Checklist

Before deploying any design changes:
- [ ] Colors match brand palette
- [ ] Typography follows hierarchy
- [ ] Spacing is consistent
- [ ] Animations are smooth (60fps)
- [ ] Mobile responsive
- [ ] Accessible (WCAG AA)
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Korean text properly displayed
- [ ] No broken images/icons

## Version History
- v1.0.0 (2025-08-31): Initial design standards
- Balance: 60% Vercel modern + 40% warm healthcare
- Primary focus: Korean menopausal women aged 40-60

---
*These standards ensure consistency across all current and future development of the LIA landing page.*