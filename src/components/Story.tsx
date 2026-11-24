import { useState } from 'react'
import Window from './Window'
import protag from '../assets/protag_ill.png'
import cassia from '../assets/cassia_ill.png'

type Line = { who?: { name: string; cls: 'p' | 'c' | 'd' }; text: string }

const DIALOGUE: Line[] = [
  { text: '새벽 세 시. 끝나지 않는 오류 로그를 바라보다 잠깐 눈을 감았다.' },
  { text: '다시 눈을 떴을 때, 나는 모니터 안쪽에 서 있었다.' },
  { who: { name: '델타', cls: 'd' }, text: '접속자 확인. …당신, 개발자 맞죠? 그럼 이 버그들, 직접 치워 주셔야겠어요.' },
  { who: { name: '나', cls: 'p' }, text: '잠깐, 여기가 어딘데?' },
]

// 8×8 픽셀 얼굴: 눈(2칸씩 두 줄) + 입
const EYES = new Set([18, 21, 26, 29])
const MOUTH = new Set([42, 43, 44, 45])

function DeltaFace() {
  return (
    <div className="dface" aria-hidden="true">
      {Array.from({ length: 64 }, (_, i) =>
        EYES.has(i) ? <i key={i} className="eye" /> : MOUTH.has(i) ? <i key={i} /> : <span key={i} />,
      )}
    </div>
  )
}

/** 비주얼 노벨처럼 클릭할 때마다 대사가 한 줄씩 진행 */
function Dialogue() {
  const [shown, setShown] = useState(1)
  const done = shown >= DIALOGUE.length
  const advance = () => setShown(n => (n >= DIALOGUE.length ? 1 : n + 1))

  return (
    <Window title="prologue.txt" className="dlg" onBodyClick={advance}>
      {DIALOGUE.slice(0, shown).map((l, i) =>
        l.who ? (
          <div key={i} className="line">
            <span className={`who ${l.who.cls}`}>{l.who.name}</span>
            <br />
            {l.text}
          </div>
        ) : (
          <p key={i} className="line nar">{l.text}</p>
        ),
      )}
      <button type="button" className="next" onClick={e => { e.stopPropagation(); advance() }}>
        {done ? '↺ 처음부터 다시' : '▼ 계속하려면 클릭'}
      </button>
    </Window>
  )
}

export default function Story() {
  return (
    <section id="story">
      <div className="wrap">
        <div className="sechead">
          <span className="secnum">&gt; 04 / STORY</span>
          <h2>마감 전날 밤, 노트북이 나를 삼켰다</h2>
        </div>
        <div className="story">
          <Dialogue />
          <div className="chars">
            <div className="ch p">
              <div className="art"><img src={protag} alt="주인공" loading="lazy" /></div>
              <div className="info">
                <span className="nm">주인공</span><span className="role">PLAYER</span>
                <p>노트북 속으로 끌려 들어간 개발자. 이름은 플레이어가 직접 정해요.</p>
              </div>
            </div>
            <div className="ch c">
              <div className="art"><img src={cassia} alt="카시아" loading="lazy" /></div>
              <div className="info">
                <span className="nm">카시아</span><span className="role">CASSIA</span>
                <p>컴퓨터 세계에서 만나는 수수께끼의 인물.</p>
              </div>
            </div>
            <div className="delta">
              <DeltaFace />
              <div>
                <span className="nm">델타</span><span className="role">AI GUIDE</span>
                <p>시스템 안내를 맡은 AI. 스테이지마다 힌트와 잔소리를 건넵니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
