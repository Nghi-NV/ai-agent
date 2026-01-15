import { FolderTree, Workflow } from 'lucide-react'
import { CodeBlock, Slide, StepList } from '../components/Slider'

export function UsingAIEffectivelySlide() {
  return (
    <Slide
      icon={Workflow}
      subtitle="Phần 3"
      title="Skills, Rules, Workflows"
      description="Tính năng mới giúp AI hiểu project của bạn:"
    >
      <StepList steps={[
        {
          title: "Skills",
          description: "Hướng dẫn cho task lặp đi lặp lại: git commit, tạo component..."
        },
        {
          title: "Rules",
          description: "Quy tắc code: naming, patterns, kiến trúc project"
        },
        {
          title: "Workflows",
          description: "Quy trình làm việc: phát triển feature, sửa bug"
        },
      ]} />
    </Slide>
  )
}

export function SkillsRulesWorkflowSlide() {
  return (
    <Slide
      icon={FolderTree}
      subtitle="Phần 3.2"
      title="Cấu Trúc Thư Mục"
    >
      <CodeBlock
        filename=".agent/"
        code={`project/
├── .agent/
│   ├── skills/
│   │   ├── git-commit/SKILL.md
│   │   └── tauri-app/SKILL.md
│   ├── rules/
│   │   └── coding-style.md
│   └── workflows/
│       └── feature-dev.md
└── src/...`}
      />
    </Slide>
  )
}

export function ChoosingModeSlide() {
  return (
    <Slide
      icon={Workflow}
      subtitle="Phần 3.3"
      title="Chat Mode vs Planning Mode"
      description="Khi nào dùng mode nào:"
    >
      <StepList steps={[
        {
          title: "Chat Mode",
          description: "Hỏi nhanh, sửa code nhỏ, giải thích khái niệm"
        },
        {
          title: "Planning Mode",
          description: "Task lớn, cần AI lên kế hoạch trước khi làm"
        },
        {
          title: "Mẹo",
          description: "Luôn đọc kế hoạch của AI trước khi cho chạy"
        },
      ]} />
    </Slide>
  )
}
