import { AlertTriangle, Lightbulb } from 'lucide-react'
import { BulletList, Slide, StepList } from '../components/Slider'

export function TipsTricksSlide1() {
  return (
    <Slide
      icon={Lightbulb}
      subtitle="Phần 4"
      title="Mẹo Hay"
    >
      <StepList steps={[
        {
          title: "Cho AI biết bối cảnh",
          description: "Dự án gì, dùng công nghệ gì, có ràng buộc gì"
        },
        {
          title: "Chia nhỏ việc",
          description: "Thay vì làm cả feature, chia ra: thiết kế → code → test"
        },
        {
          title: "Xem lại code AI viết",
          description: "AI có thể sai, nhất là logic phức tạp"
        },
      ]} />
    </Slide>
  )
}

export function TipsTricksSlide2() {
  return (
    <Slide
      icon={AlertTriangle}
      subtitle="Phần 4.2"
      title="Lỗi Hay Gặp"
    >
      <BulletList items={[
        {
          icon: AlertTriangle,
          title: "Prompt mơ hồ",
          description: "\"Viết code\" → \"Viết API login bằng TypeScript\""
        },
        {
          icon: AlertTriangle,
          title: "Copy paste mù",
          description: "Không đọc, không test, chạy luôn"
        },
        {
          icon: AlertTriangle,
          title: "Bỏ qua context",
          description: "Không nói cho AI biết project đang dùng gì"
        },
      ]} />
    </Slide>
  )
}

export function TipsTricksSlide3() {
  return (
    <Slide
      icon={Lightbulb}
      subtitle="Phần 4.3"
      title="Kỹ Thuật Nâng Cao"
    >
      <StepList steps={[
        {
          title: "Đóng vai",
          description: "\"Bạn là senior developer Rust\" - AI trả lời chuyên sâu hơn"
        },
        {
          title: "Cho ví dụ",
          description: "Show output mong muốn, AI hiểu format cần làm"
        },
        {
          title: "Hỏi nhiều cách",
          description: "\"Cho 3 cách giải quyết, ưu nhược điểm mỗi cách\""
        },
      ]} />
    </Slide>
  )
}
