import { useEffect, useState } from 'react'
import Window from './Window'

const MAX_TURN = 15
const KEYS = ['w', 'a', 's', 'd'] as const
type Key = (typeof KEYS)[number]

/** 실제로 WASD를 누르면 키캡이 눌리고 턴이 줄어드는 작은 데모 */
function useWasd() {
  const [lastKey, setLastKey] = useState<Key>('w')
  const [pressed, setPressed] = useState<Key | null>(null)
  const [turn, setTurn] = useState(12)

  const press = (k: Key) => {
    setLastKey(k)
    setPressed(k)
    setTurn(t => (t <= 1 ? MAX_TURN : t - 1))
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return
      const target = e.target as HTMLElement
      if (target.isContentEditable || ['INPUT', 'TEXTAREA'].includes(target.tagName)) return
      const k = e.key.toLowerCase()
      if ((KEYS as readonly string[]).includes(k)) press(k as Key)
    }
    const up = () => setPressed(null)
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  }, [])

  return { lastKey, pressed, turn, press, release: () => setPressed(null) }
}

export default function HowToPlay() {
  const { lastKey, pressed, turn, press, release } = useWasd()

  return (
    <section className="band" id="how">
      <div className="wrap">
        <div className="sechead">
          <span className="secnum">&gt; 01 / HOW TO PLAY</span>
          <h2>규칙은 간단하게, 퍼즐은 깊게</h2>
          <p className="secsub">
            헬테이커에서 영감을 받은 한 칸씩 움직이는 퍼즐. 모든 움직임이 턴을 소모하니, 한 수 한 수 신중하게.
          </p>
        </div>
        <div className="steps">
          <Window title="step_01.exe" className="step">
            <div className="stepvis">
              <div className="keys">
                {KEYS.map(k => (
                  <button
                    key={k}
                    type="button"
                    className={`key k-${k}${lastKey === k ? ' on' : ''}${pressed === k ? ' press' : ''}`}
                    onPointerDown={() => press(k)}
                    onPointerUp={release}
                    onPointerLeave={release}
                    aria-label={`${k.toUpperCase()} 키`}
                  >
                    {k.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="stepnum">STEP 01</div>
            <h3>이동</h3>
            <p>WASD로 한 칸씩 움직입니다. 한 번 움직일 때마다 턴이 하나씩 줄어들어요.</p>
          </Window>

          <Window title="step_02.exe" className="step">
            <div className="stepvis">
              <div className="glyphs">
                <span className="gl g1" title="상자">▣</span>
                <span className="gl g2" title="방화벽">▦</span>
                <span className="gl g3" title="열쇠">⌐</span>
              </div>
            </div>
            <div className="stepnum">STEP 02</div>
            <h3>밀고 · 부수고 · 열기</h3>
            <p>상자를 밀고, 방화벽을 부수고, 열쇠로 문을 엽니다. 숨겨진 길과 가짜 벽도 있어요.</p>
          </Window>

          <Window title="step_03.exe" className="step">
            <div className="stepvis">
              <div className="turns" aria-live="polite">
                <b>{turn}</b>
                <span>/ {MAX_TURN} TURN</span>
              </div>
            </div>
            <div className="stepnum">STEP 03</div>
            <h3>기준 턴 안에 출구</h3>
            <p>정해진 턴 안에 출구에 닿으면 클리어. 더 적은 턴과 숨겨진 조건으로 별 3개를 노려보세요.</p>
          </Window>
        </div>
      </div>
    </section>
  )
}
