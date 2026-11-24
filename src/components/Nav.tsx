import { useEffect, useState } from 'react'
import type { Theme } from '../useTheme'

export const SECTIONS = [
  { id: 'top', label: '소개' },
  { id: 'how', label: '플레이 방법' },
  { id: 'feat', label: '특징' },
  { id: 'shots', label: '화면' },
  { id: 'story', label: '스토리' },
  { id: 'dev', label: '만든 사람' },
] as const

type Props = { theme: Theme; onTheme: (t: Theme) => void }

export default function Nav({ theme, onTheme }: Props) {
  const [active, setActive] = useState<string>('top')

  // 화면 상단 1/3 지점을 지나는 섹션을 현재 메뉴로 표시
  useEffect(() => {
    const els = SECTIONS.map(s => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -69% 0px' },
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">
          <span className="lg">&gt;_</span>EXECUTOR
        </a>
        <div className="links">
          {SECTIONS.map(s => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : ''}>
              {s.label}
            </a>
          ))}
        </div>
        <div className="navr">
          <div className="tog" role="group" aria-label="테마 선택">
            <button className={theme === 'dark' ? 'on' : ''} onClick={() => onTheme('dark')} aria-pressed={theme === 'dark'}>
              {theme === 'dark' ? '●' : '○'} DARK
            </button>
            <button className={theme === 'light' ? 'on' : ''} onClick={() => onTheme('light')} aria-pressed={theme === 'light'}>
              {theme === 'light' ? '●' : '○'} LIGHT
            </button>
          </div>
          <a className="btn pri sm" href="#download">다운로드 ↓</a>
        </div>
      </div>
    </nav>
  )
}
