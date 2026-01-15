# Landing Page Example

Complete landing page with slider for knowledge sharing presentation.

## Page Structure

```tsx
import { Slider } from './components/Slider/Slider'
import { Slide, BulletList, StepList, Quote, StatsGrid, CodeBlock } from './components/Slider/Slide'
import { Sparkles, Zap, Shield, Rocket, Code2, Lightbulb, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      {/* Header */}
      <Header />
      
      {/* Main Slider Content */}
      <main className="pt-24">
        <Slider className="min-h-[calc(100vh-6rem)]">
          <IntroSlide />
          <ProblemSlide />
          <SolutionSlide />
          <HowItWorksSlide />
          <ResultsSlide />
          <CTASlide />
        </Slider>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
```

---

## Slide Examples for Knowledge Sharing

### 1. Introduction Slide

```tsx
function IntroSlide() {
  return (
    <Slide
      icon={Sparkles}
      subtitle="Welcome to"
      title="Modern React Development"
      description="A comprehensive guide to building production-ready applications with React, TypeScript, and modern tooling."
    >
      <div className="flex gap-4 mt-8">
        <button className="px-6 py-3 bg-primary hover:bg-primary-light rounded-xl font-semibold glow">
          Start Learning
        </button>
        <button className="px-6 py-3 bg-glass-bg border border-glass-border rounded-xl font-semibold">
          View Slides
        </button>
      </div>
    </Slide>
  )
}
```

### 2. Problem Statement Slide

```tsx
function ProblemSlide() {
  return (
    <Slide
      icon={Lightbulb}
      subtitle="The Challenge"
      title="Why Traditional Approaches Fail"
      description="Understanding the common pitfalls in React development."
    >
      <BulletList items={[
        { 
          icon: Zap, 
          title: "Performance Issues", 
          description: "Unoptimized re-renders causing slow UI" 
        },
        { 
          icon: Shield, 
          title: "Security Vulnerabilities", 
          description: "XSS attacks and data exposure risks" 
        },
        { 
          icon: Users, 
          title: "Poor Developer Experience", 
          description: "Complex setup and lack of standards" 
        }
      ]} />
    </Slide>
  )
}
```

### 3. Solution Overview Slide

```tsx
function SolutionSlide() {
  return (
    <Slide
      icon={Rocket}
      subtitle="Our Approach"
      title="The Modern Stack"
      layout="split"
      image="/diagrams/architecture.png"
    >
      <StepList steps={[
        { title: "Vite", description: "Lightning-fast build tool" },
        { title: "React 18", description: "Concurrent features & Suspense" },
        { title: "TypeScript", description: "Type safety at scale" },
        { title: "Tailwind v4", description: "CSS-first styling" }
      ]} />
    </Slide>
  )
}
```

### 4. How It Works Slide

```tsx
function HowItWorksSlide() {
  return (
    <Slide
      icon={Code2}
      subtitle="Implementation"
      title="Getting Started"
      align="left"
    >
      <CodeBlock 
        filename="terminal"
        code={`# Create new project
npm create vite@latest my-app -- --template react-ts

# Install dependencies
cd my-app
npm install tailwindcss @tailwindcss/vite framer-motion

# Start development
npm run dev`}
      />
    </Slide>
  )
}
```

### 5. Results/Metrics Slide

```tsx
function ResultsSlide() {
  return (
    <Slide
      icon={Zap}
      subtitle="Proven Results"
      title="By the Numbers"
      description="Real-world impact from teams using this approach."
    >
      <StatsGrid stats={[
        { value: "50%", label: "Faster Development" },
        { value: "3x", label: "Performance Gain" },
        { value: "0", label: "Runtime Errors" },
        { value: "A+", label: "Lighthouse Score" }
      ]} />
      
      <Quote 
        text="This approach transformed how our team builds React apps."
        author="Jane Smith"
        role="Tech Lead at Example Corp"
      />
    </Slide>
  )
}
```

### 6. Call-to-Action Slide

```tsx
function CTASlide() {
  return (
    <Slide
      icon={Rocket}
      subtitle="Ready to Start?"
      title="Join the Community"
      description="Get access to templates, examples, and support."
    >
      <form className="flex gap-4 mt-8 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-glass-bg border border-glass-border rounded-xl
                     focus:outline-none focus:border-primary"
        />
        <button className="px-6 py-3 bg-primary hover:bg-primary-light rounded-xl font-semibold glow">
          Get Started
        </button>
      </form>
    </Slide>
  )
}
```

---

## Header Component

```tsx
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between glass-card m-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg">Knowledge Share</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-text-secondary hover:text-white">Home</a>
          <a href="#" className="text-text-secondary hover:text-white">Topics</a>
          <a href="#" className="text-text-secondary hover:text-white">About</a>
        </div>
      </nav>
    </header>
  )
}
```

---

## Footer Component

```tsx
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-glass-border text-center text-text-muted">
      <p>© 2024 Knowledge Share. Built with React + Tailwind CSS v4.</p>
      <p className="mt-2 text-sm">
        Press <kbd className="px-2 py-1 bg-glass-bg rounded">P</kbd> for presentation mode
      </p>
    </footer>
  )
}
```
