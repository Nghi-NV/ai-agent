import { Slide, BulletList, StepList, ComparisonTable } from '../components/Slider'
import {
  Settings,
  Lightbulb,
  Workflow,
  Brain,
  Zap,
  FileCode,
  BookOpen
} from 'lucide-react'

export function UsingAIEffectivelySlide() {
  return (
    <Slide
      icon={Settings}
      subtitle="Session 3"
      title="Sử Dụng AI Hiệu Quả"
      description="Cách chọn LLM và configure để đạt kết quả tốt nhất."
    >
      <BulletList items={[
        {
          icon: Brain,
          title: "Chọn LLM phù hợp",
          description: "Claude cho reasoning phức tạp, Gemini cho context lớn, GPT cho đa năng"
        },
        {
          icon: Zap,
          title: "Planning vs Fast mode",
          description: "Agentic mode cho tasks phức tạp, Chat mode cho quick questions"
        },
        {
          icon: FileCode,
          title: "Cung cấp context",
          description: "Đính kèm files liên quan, mô tả project structure"
        },
        {
          icon: BookOpen,
          title: "Iterative approach",
          description: "Bắt đầu nhỏ, refine dần, review mỗi step"
        },
      ]} />
    </Slide>
  )
}

export function SkillsRulesWorkflowSlide() {
  return (
    <Slide
      icon={Workflow}
      subtitle="Session 3.2"
      title="Skills, Rules & Workflows"
      description="Cấu hình AI Agent để làm việc hiệu quả hơn."
    >
      <StepList steps={[
        {
          title: "Skills",
          description: "Tạo các skill files (.agent/skills/) cho tasks lặp đi lặp lại như: setup project, deploy, testing"
        },
        {
          title: "Rules",
          description: "Định nghĩa coding standards, conventions, và constraints trong .agent/rules/"
        },
        {
          title: "Workflows",
          description: "Tạo workflows cho quy trình như: feature development, bug fixing, code review"
        },
        {
          title: "Memory",
          description: "Sử dụng task.md và implementation_plan.md để track progress và context"
        },
      ]} />
    </Slide>
  )
}

export function ChoosingModeSlide() {
  return (
    <Slide
      icon={Lightbulb}
      subtitle="Session 3.3"
      title="Planning vs Fast Mode"
      description="Khi nào dùng Agentic mode, khi nào dùng Chat mode."
    >
      <ComparisonTable
        headers={["Chat Mode (Fast)", "Agentic Mode (Planning)"]}
        rows={[
          ["Quick questions", "Complex multi-step tasks"],
          ["Code snippets", "Full feature implementation"],
          ["Debugging hints", "Architecture decisions"],
          ["Syntax help", "Refactoring across multiple files"],
          ["Learning concepts", "Project setup & configuration"],
        ]}
      />
    </Slide>
  )
}
