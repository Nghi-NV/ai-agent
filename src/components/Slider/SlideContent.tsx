import { motion } from 'framer-motion'
import { CheckCircle, FileCode, LucideIcon } from 'lucide-react'

// ========== BulletList ==========

interface BulletListItem {
  icon?: LucideIcon
  title: string
  description?: string
}

interface BulletListProps {
  items: BulletListItem[]
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-3 lg:space-y-4 mt-4 lg:mt-6 text-left">
      {items.map((item, i) => (
        <motion.li key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="flex items-start gap-3 lg:gap-4"
        >
          <div className="p-1.5 lg:p-2 bg-primary/20 rounded-lg shrink-0">
            {item.icon ? <item.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" /> : <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />}
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base lg:text-lg">{item.title}</h4>
            {item.description && <p className="text-white/60 mt-0.5 lg:mt-1 text-xs sm:text-sm lg:text-base">{item.description}</p>}
          </div>
        </motion.li>
      ))}
    </ul>
  )
}

// ========== Quote ==========

interface QuoteProps {
  text: string
  author: string
  role?: string
  avatar?: string
}

export function Quote({ text, author, role, avatar }: QuoteProps) {
  return (
    <blockquote className="mt-4 lg:mt-6 p-4 lg:p-6 bg-white/5 rounded-xl lg:rounded-2xl border-l-4 border-primary">
      <p className="text-base sm:text-lg lg:text-xl italic text-white/90 mb-3 lg:mb-4">"{text}"</p>
      <footer className="flex items-center gap-3 lg:gap-4">
        {avatar && <img src={avatar} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" alt={author} />}
        <div>
          <cite className="font-semibold not-italic text-sm lg:text-base">{author}</cite>
          {role && <p className="text-xs lg:text-sm text-white/60">{role}</p>}
        </div>
      </footer>
    </blockquote>
  )
}

// ========== StepList ==========

interface StepItem {
  title: string
  description: string
  icon?: LucideIcon
}

interface StepListProps {
  steps: StepItem[]
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="mt-4 lg:mt-6 space-y-3 lg:space-y-4">
      {steps.map((step, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.15 }}
          className="flex gap-3 lg:gap-4 items-start"
        >
          <div className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary flex items-center justify-center font-bold text-sm lg:text-lg">
            {i + 1}
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-0.5 lg:mb-1">{step.title}</h4>
            <p className="text-white/70 text-xs sm:text-sm lg:text-base">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ========== ComparisonTable ==========

interface ComparisonTableProps {
  headers: [string, string]
  rows: Array<[string, string]>
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="mt-4 lg:mt-6 overflow-x-auto rounded-xl lg:rounded-2xl border border-glass-border">
      <table className="w-full min-w-[400px]">
        <thead>
          <tr className="bg-white/10">
            <th className="p-2 sm:p-3 lg:p-4 text-left font-semibold text-xs sm:text-sm lg:text-base">{headers[0]}</th>
            <th className="p-2 sm:p-3 lg:p-4 text-left font-semibold text-xs sm:text-sm lg:text-base">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <motion.tr key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="border-t border-glass-border"
            >
              <td className="p-2 sm:p-3 lg:p-4 text-error text-xs sm:text-sm lg:text-base">{row[0]}</td>
              <td className="p-2 sm:p-3 lg:p-4 text-success text-xs sm:text-sm lg:text-base">{row[1]}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ========== CodeBlock ==========

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, filename }: CodeBlockProps) {
  return (
    <div className="mt-4 lg:mt-6 bg-black/50 rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden text-left">
      {filename && (
        <div className="px-3 lg:px-4 py-1.5 lg:py-2 bg-white/5 border-b border-white/10 text-xs lg:text-sm text-white/60 flex items-center gap-2">
          <FileCode className="w-3 h-3 lg:w-4 lg:h-4" />
          {filename}
        </div>
      )}
      <pre className="p-3 lg:p-4 overflow-x-auto">
        <code className="text-xs lg:text-sm font-mono text-accent whitespace-pre-wrap wrap-break-word">{code}</code>
      </pre>
    </div>
  )
}

// ========== StatsGrid ==========

interface StatItem {
  value: string
  label: string
  icon?: LucideIcon
}

interface StatsGridProps {
  stats: StatItem[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mt-4 lg:mt-6">
      {stats.map((stat, i) => (
        <motion.div key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="text-center p-3 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl"
        >
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-0.5 lg:mb-1">{stat.value}</div>
          <div className="text-xs lg:text-sm text-white/60">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

// ========== ToolCard ==========

interface ToolCardProps {
  name: string
  description: string
  icon?: LucideIcon
  color?: string
  bestFor?: string
}

export function ToolCard({ name, description, icon: Icon, bestFor }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-3 lg:p-4 bg-white/5 rounded-lg lg:rounded-xl border border-glass-border hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start gap-2 lg:gap-3">
        {Icon && (
          <div className="p-1.5 lg:p-2 bg-primary/20 rounded-lg shrink-0">
            <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-sm lg:text-lg">{name}</h4>
          <p className="text-white/60 text-xs lg:text-sm mt-0.5 lg:mt-1">{description}</p>
          {bestFor && <p className="text-accent text-[10px] lg:text-xs mt-1 lg:mt-2">Best for: {bestFor}</p>}
        </div>
      </div>
    </motion.div>
  )
}

// ========== ToolGrid ==========

interface Tool {
  name: string
  description: string
  icon?: LucideIcon
  bestFor?: string
}

interface ToolGridProps {
  tools: Tool[]
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 mt-4 lg:mt-6">
      {tools.map((tool, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <ToolCard {...tool} />
        </motion.div>
      ))}
    </div>
  )
}
