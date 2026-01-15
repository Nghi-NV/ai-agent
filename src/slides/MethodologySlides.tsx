import { Slide, StepList, BulletList, CodeBlock } from '../components/Slider'
import {
  FileCode,
  GitBranch,
  Users,
  CheckSquare,
  FileText
} from 'lucide-react'

export function BMADMethodSlide() {
  return (
    <Slide
      icon={Users}
      subtitle="Session 5"
      title="BMAD Method"
      description="Breakthrough Method for Agile AI-Driven Development"
    >
      <StepList steps={[
        {
          title: "Analyst Agent",
          description: "Phân tích yêu cầu, tạo user stories"
        },
        {
          title: "PM Agent",
          description: "Tạo PRD (Product Requirements Document)"
        },
        {
          title: "Architect Agent",
          description: "Thiết kế system architecture, data models"
        },
        {
          title: "Dev Agent",
          description: "Implement theo specs đã được approved"
        },
        {
          title: "QA Agent",
          description: "Testing và validation"
        },
      ]} />
    </Slide>
  )
}

export function SpecKitSlide() {
  return (
    <Slide
      icon={FileCode}
      subtitle="Session 5.2"
      title="GitHub Spec Kit"
      description="Spec-driven development cho AI coding assistants."
    >
      <CodeBlock
        filename="project-structure"
        code={`project/
├── spec.md        # High-level goals & requirements
├── plan.md        # Technical approach & architecture
├── constitution.md # Project principles & guidelines
└── tasks/
    ├── task-001.md  # Specific work units
    ├── task-002.md
    └── ...`}
      />
    </Slide>
  )
}

export function SpecKitWorkflowSlide() {
  return (
    <Slide
      icon={GitBranch}
      subtitle="Session 5.3"
      title="Spec Kit Workflow"
      description="4 phases để làm việc với AI agents."
    >
      <StepList steps={[
        {
          title: "1. Specify",
          description: "Mô tả high-level goal và requirements trong spec.md"
        },
        {
          title: "2. Refine",
          description: "Review và clarify requirements với AI"
        },
        {
          title: "3. Plan",
          description: "Tạo technical plan và architecture trong plan.md"
        },
        {
          title: "4. Task",
          description: "Chia nhỏ thành tasks cụ thể để AI execute"
        },
      ]} />
    </Slide>
  )
}

export function BMADvsSpecKitSlide() {
  return (
    <Slide
      icon={CheckSquare}
      subtitle="Session 5.4"
      title="BMAD vs Spec Kit"
      description="Khi nào dùng framework nào?"
    >
      <BulletList items={[
        {
          icon: Users,
          title: "BMAD Method",
          description: "Projects lớn, enterprise, cần governance và traceability. Simulates full agile team."
        },
        {
          icon: FileText,
          title: "Spec Kit",
          description: "Small-medium projects, flexible. Adds structure to existing AI workflows."
        },
        {
          icon: GitBranch,
          title: "Kết hợp cả hai",
          description: "Dùng BMAD's Architect cho detailed design, Spec Kit cho everyday coding tasks."
        },
      ]} />
    </Slide>
  )
}
