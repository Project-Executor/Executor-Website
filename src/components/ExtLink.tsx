import type { ReactNode } from 'react'

type Props = { href: string; className?: string; ph?: boolean; children: ReactNode }

/** href가 비어 있으면 링크 없이 렌더링하고, ph가 켜져 있으면 [링크] 플레이스홀더를 붙임 */
export default function ExtLink({ href, className, ph = true, children }: Props) {
  if (!href) {
    return (
      <a className={className} aria-disabled="true">
        {children}
        {ph && <> <span className="ph">[링크]</span></>}
      </a>
    )
  }
  const external = href.startsWith('http')
  return (
    <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}
