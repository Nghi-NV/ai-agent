import { Slide, StepList, BulletList } from '../components/Slider'
import {
  Code,
  Bug,
  TestTube,
  FileText,
  Rocket,
  Lightbulb,
  CheckCircle
} from 'lucide-react'

export function DevProcessSlide() {
  return (
    <Slide
      icon={Code}
      subtitle="Session 6"
      title="Dev Process với AI"
      description="Áp dụng AI vào mỗi phase của software development."
    >
      <StepList steps={[
        {
          title: "Requirements",
          description: "AI giúp analyze requirements, tạo user stories, identify edge cases"
        },
        {
          title: "Design",
          description: "Generate architecture diagrams, API specs, data models"
        },
        {
          title: "Implementation",
          description: "Code generation, refactoring, debugging assistance"
        },
        {
          title: "Testing",
          description: "Auto-generate test cases, test data, coverage reports"
        },
        {
          title: "Documentation",
          description: "Generate docs từ code, update READMEs, create guides"
        },
      ]} />
    </Slide>
  )
}

export function AIinTestingSlide() {
  return (
    <Slide
      icon={TestTube}
      subtitle="Session 6.2"
      title="AI trong Testing & QA"
      description="80% software teams sẽ dùng AI trong testing vào 2026."
    >
      <BulletList items={[
        {
          icon: Lightbulb,
          title: "Autonomous Test Generation",
          description: "AI phân tích app behavior và tự tạo test cases"
        },
        {
          icon: CheckCircle,
          title: "Self-Healing Tests",
          description: "Tests tự điều chỉnh khi UI thay đổi, giảm 50% maintenance"
        },
        {
          icon: Bug,
          title: "Predictive Defect Analysis",
          description: "Dự đoán bugs dựa trên code changes và history"
        },
        {
          icon: FileText,
          title: "Smart Test Data",
          description: "Generate synthetic test data an toàn, compliant"
        },
      ]} />
    </Slide>
  )
}

export function AIinDocumentationSlide() {
  return (
    <Slide
      icon={FileText}
      subtitle="Session 6.3"
      title="AI trong Documentation"
      description="Tự động hóa việc viết và maintain documentation."
    >
      <BulletList items={[
        {
          icon: Code,
          title: "Code to Docs",
          description: "Generate API docs, function descriptions từ source code"
        },
        {
          icon: FileText,
          title: "README Generation",
          description: "Tự động tạo và update README.md với usage examples"
        },
        {
          icon: CheckCircle,
          title: "Changelog Generation",
          description: "Tạo changelogs từ git commits và PR descriptions"
        },
        {
          icon: Rocket,
          title: "User Guides",
          description: "Generate user-facing documentation và tutorials"
        },
      ]} />
    </Slide>
  )
}
