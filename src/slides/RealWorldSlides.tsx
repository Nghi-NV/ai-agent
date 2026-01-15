import { Code, Github, Rocket, Zap } from 'lucide-react'
import { BulletList, Quote, Slide, StatsGrid, StepList } from '../components/Slider'

export function RealWorldSlide1() {
  return (
    <Slide
      icon={Rocket}
      subtitle="Phần 7"
      title="Dự Án Thực Tế"
      description="Các tool làm với AI (90% code từ AI):"
    >
      <StepList steps={[
        {
          title: "Lumi Tester",
          description: "Test automation cho Android/iOS, viết test bằng YAML"
        },
        {
          title: "Android Mirror",
          description: "Mirror màn hình Android lên PC, low latency"
        },
        {
          title: "Lunar Calendar",
          description: "Flutter package đổi lịch dương sang âm"
        },
        {
          title: "My Tool Kit",
          description: "App Tauri: Tạo icon app, tối ưu dung lượng ảnh, ..."
        },
      ]} />
    </Slide>
  )
}

export function RealWorldSlide2() {
  return (
    <Slide
      icon={Github}
      subtitle="Phần 7.2"
      title="Hiệu Quả Thực Tế"
    >
      <StatsGrid stats={[
        { value: "90%", label: "Code từ AI" },
        { value: "5x", label: "Nhanh hơn" },
        { value: "70%", label: "Giảm debug" },
        { value: "10+", label: "Dự án" },
      ]} />

      <Quote
        text="Developer biết dùng AI sẽ thay thế developer không biết."
        author="Nghi Nguyen"
        role="Software Developer"
      />
    </Slide>
  )
}

export function SummarySlide() {
  return (
    <Slide
      icon={Zap}
      subtitle="Tổng Kết"
      title="Điểm Chính"
    >
      <BulletList items={[
        {
          icon: Zap,
          title: "Prompt rõ ràng",
          description: "Cho AI biết context, yêu cầu cụ thể"
        },
        {
          icon: Code,
          title: "Dùng nhiều tool",
          description: "ChatGPT học, Cursor code, Claude task phức tạp"
        },
        {
          icon: Rocket,
          title: "Tận dụng Skills/Rules",
          description: "Một lần setup, dùng mãi, share cho team"
        },
      ]} />
    </Slide>
  )
}

export function ThankYouSlide() {
  return (
    <Slide
      icon={Rocket}
      subtitle="Cảm ơn!"
      title="Hỏi Đáp"
      description="github.com/Nghi-NV"
    />
  )
}
