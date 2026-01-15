import { Sparkles } from 'lucide-react'
import { Slide } from '../components/Slider'

export function HeroSlide() {
  return (
    <Slide
      icon={Sparkles}
      subtitle="Lumi"
      title="Làm Việc Với AI"
      description="Chia sẻ kinh nghiệm sử dụng AI trong phát triển phần mềm tại Lumi."
    />
  )
}
