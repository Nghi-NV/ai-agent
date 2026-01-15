# Slide Component

Individual slide design with multiple content layouts optimized for knowledge sharing and presentations.

## Props Interface

```typescript
interface SlideProps {
  // Core content
  title: string
  subtitle?: string         // Eyebrow text above title
  description?: string      // Main paragraph
  
  // Optional elements
  icon?: LucideIcon         // Hero icon
  image?: string            // Background or hero image
  
  // Layout options
  align?: 'left' | 'center' | 'right'
  layout?: 'default' | 'split' | 'fullbleed'
  
  // Custom content
  children?: ReactNode      // Custom content below description
}
```

## Slide Layouts

### 1. Default Layout (Centered)
Best for: Titles, key messages, quotes

### 2. Split Layout (Text + Visual)
Best for: Feature explanations, demos

### 3. Fullbleed Layout
Best for: Images, diagrams, videos

---

## Slide Implementation

```tsx
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SlideProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  icon?: LucideIcon
  image?: string
  align?: 'left' | 'center' | 'right'
  layout?: 'default' | 'split' | 'fullbleed'
  className?: string
}

export function Slide({
  title,
  subtitle,
  description,
  children,
  icon: Icon,
  image,
  align = 'center',
  layout = 'default',
  className = ''
}: SlideProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  if (layout === 'split') {
    return (
      <div className={`h-full w-full grid grid-cols-2 gap-8 p-8 ${className}`}>
        {/* Left: Content */}
        <motion.div variants={container} initial="hidden" animate="show"
          className="flex flex-col justify-center">
          {subtitle && <motion.p variants={item} className="text-accent uppercase tracking-wider mb-3">{subtitle}</motion.p>}
          <motion.h2 variants={item} className="text-5xl font-bold mb-6">{title}</motion.h2>
          {description && <motion.p variants={item} className="text-xl text-white/70 mb-8">{description}</motion.p>}
          {children && <motion.div variants={item}>{children}</motion.div>}
        </motion.div>
        {/* Right: Visual */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center">
          {image && <img src={image} alt="" className="rounded-2xl shadow-2xl max-h-[80vh]" />}
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`h-full w-full flex flex-col justify-center p-8 md:p-16 ${alignmentClasses[align]} ${className}`}>
      <motion.div variants={container} initial="hidden" animate="show"
        className="max-w-4xl w-full bg-glass-bg backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-12 shadow-2xl">
        {Icon && (
          <motion.div variants={item} className="mb-6">
            <div className="inline-flex p-4 bg-primary/20 rounded-2xl animate-glow">
              <Icon className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
        )}
        {subtitle && <motion.p variants={item} className="text-sm md:text-base font-medium text-accent uppercase tracking-wider mb-3">{subtitle}</motion.p>}
        <motion.h2 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent leading-tight mb-6">{title}</motion.h2>
        {description && <motion.p variants={item} className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-8">{description}</motion.p>}
        {children && <motion.div variants={item}>{children}</motion.div>}
      </motion.div>
    </div>
  )
}
```

---

## Content Components for Knowledge Sharing

### BulletList - Key Points

```tsx
interface BulletListProps {
  items: Array<{
    icon?: LucideIcon
    title: string
    description?: string
  }>
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-4 mt-8 text-left">
      {items.map((item, i) => (
        <motion.li key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="flex items-start gap-4"
        >
          <div className="p-2 bg-primary/20 rounded-lg shrink-0">
            {item.icon ? <item.icon className="w-5 h-5 text-primary" /> : <CheckCircle className="w-5 h-5 text-primary" />}
          </div>
          <div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            {item.description && <p className="text-white/60 mt-1">{item.description}</p>}
          </div>
        </motion.li>
      ))}
    </ul>
  )
}
```

### Quote - Expert Quotes / Testimonials

```tsx
interface QuoteProps {
  text: string
  author: string
  role?: string
  avatar?: string
}

export function Quote({ text, author, role, avatar }: QuoteProps) {
  return (
    <blockquote className="mt-8 p-8 bg-white/5 rounded-2xl border-l-4 border-primary">
      <p className="text-2xl italic text-white/90 mb-4">"{text}"</p>
      <footer className="flex items-center gap-4">
        {avatar && <img src={avatar} className="w-12 h-12 rounded-full" alt={author} />}
        <div>
          <cite className="font-semibold not-italic">{author}</cite>
          {role && <p className="text-sm text-white/60">{role}</p>}
        </div>
      </footer>
    </blockquote>
  )
}
```

### StepList - Step-by-Step Guide

```tsx
interface StepListProps {
  steps: Array<{
    title: string
    description: string
    icon?: LucideIcon
  }>
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="mt-8 space-y-6">
      {steps.map((step, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.15 }}
          className="flex gap-6 items-start"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-lg">
            {i + 1}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
            <p className="text-white/70">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
```

### ComparisonTable - Before/After, Pros/Cons

```tsx
interface ComparisonTableProps {
  headers: [string, string]
  rows: Array<[string, string]>
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-glass-border">
      <table className="w-full">
        <thead>
          <tr className="bg-white/10">
            <th className="p-4 text-left font-semibold">{headers[0]}</th>
            <th className="p-4 text-left font-semibold">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <motion.tr key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="border-t border-glass-border"
            >
              <td className="p-4 text-red-400">{row[0]}</td>
              <td className="p-4 text-green-400">{row[1]}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

### CodeBlock - Code Examples

```tsx
interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  highlightLines?: number[]
}

export function CodeBlock({ code, language = 'typescript', filename }: CodeBlockProps) {
  return (
    <div className="mt-8 bg-black/50 rounded-2xl border border-white/10 overflow-hidden">
      {filename && (
        <div className="px-4 py-2 bg-white/5 border-b border-white/10 text-sm text-white/60 flex items-center gap-2">
          <FileCode className="w-4 h-4" />
          {filename}
        </div>
      )}
      <pre className="p-6 overflow-x-auto">
        <code className="text-sm font-mono text-green-400">{code}</code>
      </pre>
    </div>
  )
}
```

### StatsGrid - Key Metrics

```tsx
interface StatsGridProps {
  stats: Array<{
    value: string
    label: string
    icon?: LucideIcon
  }>
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, i) => (
        <motion.div key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="text-center p-6 bg-white/5 rounded-2xl"
        >
          <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
          <div className="text-sm text-white/60">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
```

### ImageGallery - Visual Examples

```tsx
interface ImageGalleryProps {
  images: Array<{
    src: string
    caption?: string
  }>
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {images.map((img, i) => (
        <motion.figure key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="relative group"
        >
          <img src={img.src} alt={img.caption || ''} 
            className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          {img.caption && (
            <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl text-sm">
              {img.caption}
            </figcaption>
          )}
        </motion.figure>
      ))}
    </div>
  )
}
```

---

## Usage Examples for Knowledge Sharing

### Example 1: Key Learnings

```tsx
<Slide 
  title="3 Key Takeaways"
  subtitle="What We Learned"
  icon={Lightbulb}
>
  <BulletList items={[
    { icon: Zap, title: "Performance Matters", description: "Users leave after 3s load time" },
    { icon: Shield, title: "Security First", description: "Never store secrets in frontend" },
    { icon: Users, title: "UX Research", description: "Talk to users early and often" }
  ]} />
</Slide>
```

### Example 2: Process Explanation

```tsx
<Slide
  title="Our Development Process"
  subtitle="Step by Step"
  layout="split"
  image="/diagrams/process.png"
>
  <StepList steps={[
    { title: "Discovery", description: "Understand the problem and users" },
    { title: "Design", description: "Create wireframes and prototypes" },
    { title: "Build", description: "Implement with best practices" },
    { title: "Test", description: "QA and user testing" }
  ]} />
</Slide>
```

### Example 3: Before/After

```tsx
<Slide title="The Transformation" subtitle="Legacy vs Modern">
  <ComparisonTable 
    headers={["Before", "After"]}
    rows={[
      ["Monolithic architecture", "Microservices"],
      ["2 min deploy time", "30 sec deploy"],
      ["Manual testing", "100% automated"]
    ]}
  />
</Slide>
```
