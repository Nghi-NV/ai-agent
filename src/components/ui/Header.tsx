import { Sparkles } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between glass-card m-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <span className="font-bold text-lg">AI Knowledge Share</span>
        </div>
      </nav>
    </header>
  )
}
