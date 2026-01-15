import { CheckSquare, FileCode, GitBranch, Users, Workflow } from 'lucide-react'
import { BulletList, CodeBlock, Slide, StepList } from '../components/Slider'

export function BMADMethodSlide() {
  return (
    <Slide
      icon={Users}
      subtitle="Phần 5"
      title="BMAD Method"
      description="Breakthrough Method for Agile AI-Driven Development"
    >
      <StepList steps={[
        {
          title: "Analyst Agent",
          description: "Phân tích yêu cầu, viết user stories, xác định scope"
        },
        {
          title: "PM Agent",
          description: "Tạo PRD (Product Requirements Document)"
        },
        {
          title: "Architect Agent",
          description: "Thiết kế kiến trúc, data models, API specs"
        },
        {
          title: "Dev Agent",
          description: "Code theo specs đã duyệt"
        },
        {
          title: "QA Agent",
          description: "Test và validation"
        },
      ]} />
    </Slide>
  )
}

export function SpecKitSlide() {
  return (
    <Slide
      icon={FileCode}
      subtitle="Phần 5.2"
      title="GitHub Spec Kit"
      description="Spec-driven development cho AI coding:"
    >
      <CodeBlock
        filename="cấu trúc thư mục"
        code={`project/
├── spec.md          # Mục tiêu & yêu cầu chung
├── plan.md          # Cách tiếp cận & kiến trúc
├── constitution.md  # Nguyên tắc & quy ước
└── tasks/
    ├── task-001.md  # Việc cụ thể
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
      subtitle="Phần 5.3"
      title="Quy Trình Spec Kit"
    >
      <StepList steps={[
        {
          title: "1. Specify",
          description: "Viết spec.md - mô tả mục tiêu và yêu cầu"
        },
        {
          title: "2. Refine",
          description: "Làm rõ yêu cầu với AI, bổ sung chi tiết"
        },
        {
          title: "3. Plan",
          description: "Tạo plan.md - kiến trúc và cách tiếp cận"
        },
        {
          title: "4. Task",
          description: "Chia nhỏ thành tasks/ để AI thực hiện"
        },
      ]} />
    </Slide>
  )
}

export function BMADvsSpecKitSlide() {
  return (
    <Slide
      icon={CheckSquare}
      subtitle="Phần 5.4"
      title="Khi Nào Dùng?"
    >
      <BulletList items={[
        {
          icon: Users,
          title: "BMAD Method",
          description: "Dự án lớn, cần agents chuyên biệt, quy trình chặt chẽ"
        },
        {
          icon: FileCode,
          title: "Spec Kit",
          description: "Dự án vừa-nhỏ, linh hoạt, dễ bắt đầu"
        },
        {
          icon: GitBranch,
          title: "Kết hợp",
          description: "Dùng BMAD cho planning, Spec Kit cho daily coding"
        },
      ]} />
    </Slide>
  )
}

export function PlanningModeSlide() {
  return (
    <Slide
      icon={Workflow}
      subtitle="Phần 5.5"
      title="Planning Mode Trong IDE"
      description="Antigravity/Cursor áp dụng tương tự:"
    >
      <StepList steps={[
        {
          title: "Bước 1: AI lên kế hoạch",
          description: "Đọc code, hiểu yêu cầu, viết implementation_plan.md"
        },
        {
          title: "Bước 2: Duyệt kế hoạch",
          description: "Đọc kỹ, đồng ý hoặc yêu cầu sửa"
        },
        {
          title: "Bước 3: AI thực hiện",
          description: "Code theo kế hoạch đã duyệt"
        },
        {
          title: "Bước 4: Kiểm tra",
          description: "AI test, viết walkthrough.md"
        },
      ]} />
    </Slide>
  )
}

export function TeamSkillsSlide() {
  return (
    <Slide
      icon={Users}
      subtitle="Phần 5.6"
      title="Chia Sẻ Skills Cho Team"
    >
      <BulletList items={[
        {
          icon: FileCode,
          title: "git-commit",
          description: "Viết commit message chuẩn Conventional Commits"
        },
        {
          icon: FileCode,
          title: "code-review",
          description: "Review code theo checklist của team"
        },
        {
          icon: FileCode,
          title: "create-component",
          description: "Tạo component/module theo template dự án"
        },
      ]} />
    </Slide>
  )
}
