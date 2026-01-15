# Project Structure

Recommended folder structure for a landing page with slider functionality.

```
my-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Slider/
│   │   │   ├── Slider.tsx          # Main slider container
│   │   │   ├── Slide.tsx           # Individual slide
│   │   │   ├── SlideContent.tsx    # Slide content layouts
│   │   │   ├── Navigation.tsx      # Slide navigation controls
│   │   │   └── index.ts            # Exports
│   │   ├── ui/
│   │   │   ├── Button.tsx          # Reusable button
│   │   │   ├── Card.tsx            # Glass card
│   │   │   └── GradientOrbs.tsx    # Background orbs
│   │   └── icons/
│   │       └── index.ts            # Re-export lucide icons
│   ├── hooks/
│   │   ├── useKeyboard.ts          # Keyboard navigation
│   │   ├── useFullscreen.ts        # Fullscreen toggle
│   │   └── useSlideProgress.ts     # Progress tracking
│   ├── data/
│   │   └── slides.ts               # Slide content data
│   ├── styles/
│   │   └── index.css               # Main CSS with @theme
│   ├── App.tsx                     # Root component
│   └── main.tsx                    # Entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Key Files Explained

### `src/components/Slider/Slider.tsx`

Main container that manages:
- Presentation mode state
- Current slide index
- Animation context
- Fullscreen state

### `src/components/Slider/Slide.tsx`

Individual slide with:
- Entry/exit animations
- Content layout
- Background effects

### `src/hooks/useKeyboard.ts`

Keyboard event handler for:
- Arrow navigation
- Escape to exit
- Fullscreen toggle
- Presentation mode toggle

### `src/styles/index.css`

Tailwind v4 CSS with:
- `@theme` block for custom design tokens
- Keyframe animations
- Glassmorphism utilities

### `src/data/slides.ts`

Content data structure:

```typescript
export interface Slide {
  id: string
  title: string
  subtitle?: string
  content: React.ReactNode
  background?: string
  icon?: React.ComponentType
}

export const slides: Slide[] = [
  {
    id: 'intro',
    title: 'Welcome',
    subtitle: 'Introduction to our product',
    content: <IntroContent />,
  },
  // ... more slides
]
```
