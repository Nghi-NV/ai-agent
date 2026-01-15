import { Slide, ToolGrid, StatsGrid } from '../components/Slider'
import {
  Wrench,
  Code2,
  Brain,
  Sparkles,
  Zap,
  MessageSquare,
  Bot
} from 'lucide-react'

export function AIToolsSlide() {
  return (
    <Slide
      icon={Wrench}
      subtitle="Session 2"
      title="AI Tools Overview"
      description="Các công cụ AI phổ biến và điểm mạnh của từng tool."
    >
      <ToolGrid tools={[
        {
          name: "Cursor",
          icon: Code2,
          description: "AI-first code editor, fork từ VS Code",
          bestFor: "Multi-file refactoring, Composer mode"
        },
        {
          name: "GitHub Copilot",
          icon: Zap,
          description: "Code completion tích hợp trong IDE",
          bestFor: "Quick completions, pair programming"
        },
        {
          name: "Claude Code",
          icon: Brain,
          description: "Terminal-first với reasoning mạnh",
          bestFor: "Architecture decisions, complex tasks"
        },
        {
          name: "Gemini",
          icon: Sparkles,
          description: "1M token context window",
          bestFor: "Large codebase analysis, refactoring"
        },
      ]} />
    </Slide>
  )
}

export function AIToolsSlide2() {
  return (
    <Slide
      icon={Bot}
      subtitle="Session 2.2"
      title="More AI Tools"
      description="Thêm các công cụ AI hữu ích khác."
    >
      <ToolGrid tools={[
        {
          name: "ChatGPT",
          icon: MessageSquare,
          description: "General purpose, có plugins",
          bestFor: "Research, brainstorming, learning"
        },
        {
          name: "Google AI Studio",
          icon: Sparkles,
          description: "Prompt testing và experimentation",
          bestFor: "Testing prompts, fine-tuning"
        },
        {
          name: "Antigravity",
          icon: Brain,
          description: "Advanced agentic coding assistant",
          bestFor: "Complex projects, deep context"
        },
        {
          name: "Grok",
          icon: Zap,
          description: "Real-time info, Twitter integration",
          bestFor: "Current events, quick answers"
        },
      ]} />
    </Slide>
  )
}

export function AIToolsComparisonSlide() {
  return (
    <Slide
      icon={Wrench}
      subtitle="Session 2.3"
      title="Khi Nào Dùng Tool Nào?"
      description="Chọn công cụ phù hợp với từng task."
    >
      <StatsGrid stats={[
        { value: "Cursor", label: "IDE tích hợp AI" },
        { value: "Claude", label: "Complex reasoning" },
        { value: "Gemini", label: "Large context" },
        { value: "Copilot", label: "Quick completions" },
      ]} />
    </Slide>
  )
}
