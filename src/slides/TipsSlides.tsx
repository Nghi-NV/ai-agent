import { Slide, BulletList, StepList } from '../components/Slider'
import {
  Lightbulb,
  Target,
  RefreshCw,
  CheckCircle,
  Zap,
  Brain,
  Users,
  FileText
} from 'lucide-react'

export function TipsTricksSlide1() {
  return (
    <Slide
      icon={Lightbulb}
      subtitle="Session 4"
      title="Tips & Tricks (Phần 1)"
      description="Những mẹo giúp làm việc với AI hiệu quả hơn."
    >
      <BulletList items={[
        {
          icon: Target,
          title: "Cung cấp context đầy đủ",
          description: "Stack công nghệ, coding conventions, project constraints"
        },
        {
          icon: RefreshCw,
          title: "Phân chia task nhỏ",
          description: "Thay vì 'build full feature', chia thành: design → implement → test"
        },
        {
          icon: CheckCircle,
          title: "Review và validate output",
          description: "AI có thể hallucinate - luôn đọc kỹ và test code"
        },
        {
          icon: Zap,
          title: "Sử dụng few-shot examples",
          description: "Cho AI xem ví dụ output mong muốn để kết quả chính xác hơn"
        },
      ]} />
    </Slide>
  )
}

export function TipsTricksSlide2() {
  return (
    <Slide
      icon={Brain}
      subtitle="Session 4.2"
      title="Tips & Tricks (Phần 2)"
      description="Thêm các mẹo nâng cao."
    >
      <BulletList items={[
        {
          icon: RefreshCw,
          title: "Iterative refinement",
          description: "Prompt đầu tiên hiếm khi hoàn hảo - cải tiến dần dần"
        },
        {
          icon: Users,
          title: "Kết hợp nhiều tools",
          description: "Claude cho planning, Cursor cho coding, Copilot cho completions"
        },
        {
          icon: FileText,
          title: "Document your prompts",
          description: "Lưu lại prompts hiệu quả để tái sử dụng sau này"
        },
        {
          icon: Brain,
          title: "Yêu cầu giải thích",
          description: "Hỏi AI giải thích logic - giúp học và phát hiện bugs"
        },
      ]} />
    </Slide>
  )
}

export function TipsTricksSlide3() {
  return (
    <Slide
      icon={Zap}
      subtitle="Session 4.3"
      title="Pro Tips"
      description="Tips từ những người dùng AI hàng ngày."
    >
      <StepList steps={[
        {
          title: "Start with 'why'",
          description: "Giải thích mục đích task để AI hiểu big picture"
        },
        {
          title: "Specify constraints early",
          description: "Performance requirements, compatibility, security concerns"
        },
        {
          title: "Ask for alternatives",
          description: "'Đưa ra 3 approaches với pros/cons của mỗi cách'"
        },
        {
          title: "Use role-playing",
          description: "'Bạn là senior architect' giúp AI respond phù hợp hơn"
        },
      ]} />
    </Slide>
  )
}
