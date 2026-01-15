import { CheckCircle, MessageSquare, Zap } from 'lucide-react'
import { CodeBlock, ComparisonTable, Slide } from '../components/Slider'

export function PromptEngineeringSlide() {
  return (
    <Slide
      icon={MessageSquare}
      subtitle="Phần 1"
      title="Viết Prompt Hiệu Quả"
      description="Prompt càng rõ ràng, kết quả càng chính xác."
    >
      <ComparisonTable
        headers={["Prompt chung chung", "Prompt rõ ràng"]}
        rows={[
          ["Viết code cho tôi", "Viết API đăng nhập bằng TypeScript, dùng JWT"],
          ["Sửa lỗi này", "Lỗi null pointer ở dòng 42, xảy ra khi user chưa login"],
          ["Tạo giao diện", "Tạo form đăng ký với validation, dùng React Hook Form"],
        ]}
      />
    </Slide>
  )
}

export function PromptMistakesSlide() {
  return (
    <Slide
      icon={Zap}
      subtitle="Phần 1.2"
      title="Mẫu Prompt Hay Dùng"
    >
      <CodeBlock
        filename="prompt-template.txt"
        code={`Bạn là developer có kinh nghiệm về [công nghệ].

Dự án: [mô tả ngắn]
Công nghệ: [framework, thư viện]

Yêu cầu:
[Mô tả chi tiết việc cần làm]

Lưu ý:
- [Ràng buộc 1]
- [Ràng buộc 2]`}
      />
    </Slide>
  )
}

export function PromptBestPracticesSlide() {
  return (
    <Slide
      icon={CheckCircle}
      subtitle="Phần 1.3"
      title="Ví Dụ Thực Tế"
      description="Prompt dùng khi làm Android Mirror:"
    >
      <CodeBlock
        filename="ví dụ thực tế"
        code={`Bạn là developer Rust, biết về async và video encoding.

Dự án: Android Mirror - mirror màn hình Android lên PC
Công nghệ: Rust, Tokio, ffmpeg

Yêu cầu:
Thêm xử lý timeout khi không nhận được frame trong 5 giây.
Retry 3 lần trước khi báo lỗi.

Lưu ý:
- Không block main thread
- Log thống kê fps`}
      />
    </Slide>
  )
}
