import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'
const KEY = 'executor-theme'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(KEY)
    return saved === 'light' || saved === 'dark' ? saved : 'dark'
  })

  useEffect(() => {
    localStorage.setItem(KEY, theme)
    document.body.classList.toggle('light', theme === 'light')
  }, [theme])

  return [theme, setTheme] as const
}
