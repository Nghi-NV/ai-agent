import { Brain, MessageSquare, Monitor, Palette, Sparkles, Wrench } from 'lucide-react'
import { ComparisonTable, Slide, StepList, ToolGrid } from '../components/Slider'

export function AIToolsSlide() {
  return (
    <Slide
      icon={Wrench}
      subtitle="Phần 2"
      title="Các Công Cụ Đã Dùng"
    >
      <ToolGrid tools={[
        {
          name: "ChatGPT",
          icon: MessageSquare,
          description: "Hỏi đáp, tìm hiểu concept",
          bestFor: "Câu hỏi nhanh, giải thích khái niệm"
        },
        {
          name: "Claude",
          icon: Brain,
          description: "Suy luận tốt, context dài",
          bestFor: "Code phức tạp, thiết kế kiến trúc"
        },
        {
          name: "Gemini",
          icon: Sparkles,
          description: "Context 1 triệu token, tạo ảnh",
          bestFor: "Phân tích codebase lớn"
        },
        {
          name: "Google AI Studio",
          icon: Palette,
          description: "Tạo website nhanh",
          bestFor: "Landing page, prototype"
        },
        {
          name: "Stick Design AI",
          icon: Palette,
          description: "Thiết kế UI/UX từ prompt",
          bestFor: "Mockup, wireframe, giao diện"
        },
        {
          name: "Grok",
          icon: Sparkles,
          description: "Thông tin realtime, không kiểm duyệt",
          bestFor: "Tin tức mới, câu hỏi gây tranh cãi"
        },
      ]} />
    </Slide>
  )
}

export function AIToolsSlide2() {
  return (
    <Slide
      icon={Monitor}
      subtitle="Phần 2.2"
      title="Hành Trình Chọn IDE"
      description="Từ VS Code đến Antigravity:"
    >
      <StepList steps={[
        {
          title: "VS Code + GitHub Copilot",
          description: "Bắt đầu với AI: gợi ý code, chat sidebar"
        },
        {
          title: "Cursor IDE",
          description: "Chuyển sang vì Composer mode mạnh, sửa nhiều file cùng lúc"
        },
        {
          title: "Antigravity",
          description: "Hiện đang dùng: Skills, Rules, Workflows, tự động hóa browser"
        },
      ]} />
    </Slide>
  )
}

export function AIToolsComparisonSlide() {
  return (
    <Slide
      icon={Wrench}
      subtitle="Phần 2.3"
      title="Chọn Tool Theo Việc"
    >
      <ComparisonTable
        headers={["Việc cần làm", "Tool phù hợp"]}
        rows={[
          ["Hỏi nhanh, học concept", "ChatGPT, Gemini"],
          ["Gợi ý code trong IDE", "Copilot, Cursor"],
          ["Sửa nhiều file, task phức tạp", "Antigravity, Cursor Composer"],
          ["Phân tích codebase lớn", "Gemini, Claude"],
          ["Tạo landing page", "Google AI Studio"],
          ["Thiết kế UI/UX", "Stick Design AI"],
        ]}
      />
    </Slide>
  )
}
