import type { ReactNode } from 'react'

type Props = {
  title: string
  className?: string
  bodyClassName?: string
  onBodyClick?: () => void
  children: ReactNode
}

/** 디자인 전반에 쓰이는 픽셀 윈도우 프레임 (타이틀바 + 본문) */
export default function Window({ title, className = '', bodyClassName = '', onBodyClick, children }: Props) {
  return (
    <div className={`win ${className}`}>
      <div className="wt">
        <span className="wtl">{title}</span>
        <span className="wbtn" aria-hidden="true">
          <i>_</i>
          <i>□</i>
          <i className="x">×</i>
        </span>
      </div>
      <div className={`wb ${bodyClassName}`} onClick={onBodyClick}>
        {children}
      </div>
    </div>
  )
}
