import { Slide, BulletList } from '../components/Slider'
import {
  Sparkles,
  MessageSquare,
  Target,
  Zap,
  Lightbulb
} from 'lucide-react'

export function HeroSlide() {
  return (
    <Slide
      icon={Sparkles}
      subtitle="Knowledge Sharing Session"
      title="Sử Dụng AI Hiệu Quả Trong Công Việc"
      description="Hướng dẫn toàn diện về cách tận dụng AI để nâng cao năng suất và chất lượng trong phát triển phần mềm."
    >
      <BulletList items={[
        { icon: MessageSquare, title: "Prompt Engineering", description: "Kỹ thuật viết prompt hiệu quả" },
        { icon: Target, title: "Chọn công cụ phù hợp", description: "Cursor, Claude, Gemini, Copilot..." },
        { icon: Zap, title: "Best Practices", description: "Kinh nghiệm thực tế từ dự án" },
        { icon: Lightbulb, title: "Tips & Tricks", description: "Mẹo tối ưu workflow với AI" }
      ]} />
    </Slide>
  )
}
