import { Slide, BulletList, StatsGrid, Quote } from '../components/Slider'
import {
  Rocket,
  Code,
  Bug,
  FileText,
  Users,
  Zap
} from 'lucide-react'

export function RealWorldSlide1() {
  return (
    <Slide
      icon={Rocket}
      subtitle="Session 7"
      title="Ứng Dụng Thực Tế"
      description="Những cách developer đang dùng AI hàng ngày."
    >
      <BulletList items={[
        {
          icon: Code,
          title: "Code Generation",
          description: "Boilerplate, CRUD operations, API endpoints, components"
        },
        {
          icon: Bug,
          title: "Debugging",
          description: "Phân tích error logs, suggest fixes, trace issues"
        },
        {
          icon: FileText,
          title: "Code Review",
          description: "AI-assisted PR review, security scanning, best practices"
        },
        {
          icon: Zap,
          title: "Refactoring",
          description: "Modernize legacy code, improve performance, clean up"
        },
      ]} />
    </Slide>
  )
}

export function RealWorldSlide2() {
  return (
    <Slide
      icon={Users}
      subtitle="Session 7.2"
      title="Kết Quả Thực Tế"
      description="Số liệu từ các teams đã áp dụng AI."
    >
      <StatsGrid stats={[
        { value: "50%", label: "Faster Development" },
        { value: "3x", label: "Performance Gain" },
        { value: "40%", label: "Less Bugs" },
        { value: "2x", label: "Code Coverage" },
      ]} />

      <Quote
        text="AI đã thay đổi hoàn toàn cách team chúng tôi làm việc. Từ việc tốn 2 ngày setup project, giờ chỉ còn 2 giờ."
        author="Senior Developer"
        role="Tech Lead at Startup"
      />
    </Slide>
  )
}

export function SummarySlide() {
  return (
    <Slide
      icon={Zap}
      subtitle="Tổng Kết"
      title="Key Takeaways"
      description="Những điểm quan trọng cần nhớ."
    >
      <BulletList items={[
        {
          icon: Zap,
          title: "Prompt là chìa khóa",
          description: "Invest time vào việc viết prompts tốt"
        },
        {
          icon: Code,
          title: "Chọn tool phù hợp",
          description: "Không có one-size-fits-all, combine nhiều tools"
        },
        {
          icon: Users,
          title: "Review luôn cần thiết",
          description: "AI assist, không replace human judgement"
        },
        {
          icon: Rocket,
          title: "Continuous learning",
          description: "AI tools evolve nhanh - stay updated"
        },
      ]} />
    </Slide>
  )
}

export function ThankYouSlide() {
  return (
    <Slide
      icon={Rocket}
      subtitle="Thank You!"
      title="Q&A Time"
      description="Cảm ơn bạn đã theo dõi. Hãy đặt câu hỏi nếu có!"
    >
      <div className="mt-8 text-center">
        <p className="text-white/60">
          Nhấn <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd> để thoát presentation mode
        </p>
        <p className="text-white/60 mt-2">
          Sử dụng <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd> <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd> để xem lại các slides
        </p>
      </div>
    </Slide>
  )
}
