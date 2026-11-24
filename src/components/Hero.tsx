import { useEffect, useState } from 'react'
import Window from './Window'
import ExtLink from './ExtLink'
import { LINKS } from '../config'
import titleArt from '../assets/title_art.jpg'

const TERM_LINES = [
  <><span className="c">C:\Users\you&gt;</span> executor --start</>,
  <><span className="g">[OK]</span> 시스템 접속 완료</>,
  <><span className="r">[WARN]</span> 버그 12개 감지됨</>,
  <><span className="c">&gt;</span> 플레이어 입장 대기 중 </>,
]

/** 터미널 로그가 한 줄씩 출력되는 연출 */
function Terminal() {
  const [shown, setShown] = useState(0)
  useEffect(() => {
    if (shown >= TERM_LINES.length) return
    const t = setTimeout(() => setShown(n => n + 1), shown === 0 ? 500 : 650)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <Window title="terminal" className="term">
      {TERM_LINES.slice(0, shown).map((line, i) => (
        <span key={i}>
          {line}
          {i < TERM_LINES.length - 1 && <br />}
        </span>
      ))}
      <span className="cursor" />
    </Window>
  )
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="tag">동아리 발표회 출품작 · 2026</span>
          <h1>
            명령을 실행하고,
            <br />
            <em>버그를 제거하라.</em>
          </h1>
          <p className="lead">
            노트북 속으로 끌려 들어간 개발자가 한 칸씩 움직이며 버그를 치우는 턴제 퍼즐 게임. 정해진 턴 안에 출구를 찾아
            시스템을 복구하세요.
          </p>
          <div className="ctas">
            <ExtLink className="btn pri" href={LINKS.download}>▶ 게임 다운로드</ExtLink>
            <ExtLink className="btn" href={LINKS.video} ph={false}>플레이 영상 보기</ExtLink>
          </div>
          <div className="meta">
            <div><b>WASD</b>CONTROLS</div>
            <div><b>★ ×3</b>PER STAGE</div>
            <div><b>PC</b>WINDOWS</div>
          </div>
        </div>
        <div className="herowin">
          <Window title="Executor.exe">
            <img src={titleArt} alt="Executor 타이틀 화면" />
          </Window>
          <Terminal />
        </div>
      </div>
    </header>
  )
}
