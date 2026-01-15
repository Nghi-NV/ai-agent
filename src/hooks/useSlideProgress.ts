export function useSlideProgress(current: number, total: number) {
  return {
    current,
    total,
    progress: total > 0 ? ((current + 1) / total) * 100 : 0,
    isFirst: current === 0,
    isLast: current === total - 1,
    label: `${current + 1} / ${total}`
  }
}
