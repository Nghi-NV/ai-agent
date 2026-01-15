import { Slide, ComparisonTable, CodeBlock, BulletList } from '../components/Slider'
import { MessageSquare, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export function PromptEngineeringSlide() {
  return (
    <Slide
      icon={MessageSquare}
      subtitle="Session 1"
      title="Prompt Engineering"
      description="Kỹ thuật viết prompt để đạt kết quả tốt nhất từ AI."
    >
      <ComparisonTable
        headers={["❌ KHÔNG NÊN", "✅ NÊN"]}
        rows={[
          ["Review code này", "Bạn là senior React dev. Review component này về: 1) Performance 2) Best practices 3) Accessibility"],
          ["Viết unit test", "Viết unit test cho function calculateTotal() bao gồm edge cases: số âm, số 0, array rỗng"],
          ["Fix bug", "Debug error 'Cannot read property X of undefined' ở line 42. Context: User login sau 5 phút bị logout"],
          ["Tạo API", "Thiết kế REST API CRUD cho User entity theo chuẩn OpenAPI 3.0 với authentication JWT"],
        ]}
      />
    </Slide>
  )
}

export function PromptMistakesSlide() {
  return (
    <Slide
      icon={AlertTriangle}
      subtitle="Session 1.2"
      title="Sai Lầm Thường Gặp"
      description="Những lỗi phổ biến khi sử dụng AI và cách tránh."
      align="left"
    >
      <BulletList items={[
        {
          icon: XCircle,
          title: "Prompt quá chung chung",
          description: "AI không có đủ context → Kết quả generic, không phù hợp với dự án"
        },
        {
          icon: XCircle,
          title: "Copy-paste không review",
          description: "AI có thể hallucinate hoặc tạo code có bugs → Luôn đọc kỹ và test"
        },
        {
          icon: XCircle,
          title: "Không iterate",
          description: "Prompt đầu tiên hiếm khi hoàn hảo → Refine và cải tiến prompt"
        },
        {
          icon: XCircle,
          title: "Bỏ qua context quan trọng",
          description: "Không cung cấp thông tin về stack, constraints, coding style"
        },
      ]} />
    </Slide>
  )
}

export function PromptBestPracticesSlide() {
  return (
    <Slide
      icon={CheckCircle}
      subtitle="Session 1.3"
      title="Best Practices"
      description="Các kỹ thuật prompt engineering nâng cao."
      align="left"
    >
      <CodeBlock
        filename="good-prompt-example.txt"
        code={`Bạn là senior TypeScript developer với 10 năm kinh nghiệm.

CONTEXT:
- Dự án: E-commerce app dùng Next.js 14 + Prisma + PostgreSQL
- Coding style: Functional programming, prefer composition
- Testing: Jest + React Testing Library

TASK:
Refactor function processOrder() để:
1. Tách thành smaller functions (max 20 lines mỗi function)
2. Thêm proper error handling với custom errors
3. Thêm logging cho mỗi step quan trọng

OUTPUT FORMAT:
- Code với comments giải thích logic
- Unit tests cho edge cases`}
      />
    </Slide>
  )
}
