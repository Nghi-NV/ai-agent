import { Code, FileText, TestTube } from 'lucide-react'
import { BulletList, Slide, StepList } from '../components/Slider'

export function DevProcessSlide() {
  return (
    <Slide
      icon={Code}
      subtitle="Phần 6"
      title="AI Trong Quy Trình Dev"
    >
      <StepList steps={[
        {
          title: "Phân tích yêu cầu",
          description: "AI giúp hiểu requirement, tìm edge case"
        },
        {
          title: "Thiết kế",
          description: "Vẽ kiến trúc, API spec, data model"
        },
        {
          title: "Code",
          description: "AI code theo skill và rule đã định"
        },
        {
          title: "Test & Docs",
          description: "Sinh test case, viết tài liệu"
        },
      ]} />
    </Slide>
  )
}

export function AIinTestingSlide() {
  return (
    <Slide
      icon={TestTube}
      subtitle="Phần 6.2"
      title="Ví Dụ: Lumi Tester"
      description="Tool test automation với AI:"
    >
      <BulletList items={[
        {
          icon: TestTube,
          title: "Test bằng YAML",
          description: "Viết flow test dạng YAML, dễ đọc dễ sửa"
        },
        {
          icon: Code,
          title: "AI sinh test case",
          description: "Mô tả flow app → AI tạo file test YAML"
        },
        {
          icon: FileText,
          title: "AI phân tích lỗi",
          description: "Paste log lỗi → AI chỉ nguyên nhân"
        },
      ]} />
    </Slide>
  )
}

export function AIinDocumentationSlide() {
  return (
    <Slide
      icon={FileText}
      subtitle="Phần 6.3"
      title="AI Viết Tài Liệu"
    >
      <BulletList items={[
        {
          icon: FileText,
          title: "README tự động",
          description: "AI đọc code sinh README với hướng dẫn cài đặt"
        },
        {
          icon: Code,
          title: "Commit message",
          description: "Dùng skill git-commit, message chuẩn format"
        },
        {
          icon: FileText,
          title: "Changelog",
          description: "Sinh changelog từ commit history"
        },
      ]} />
    </Slide>
  )
}
