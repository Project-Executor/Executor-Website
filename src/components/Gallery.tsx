import { useState } from 'react'
import Window from './Window'
import main from '../assets/shot_Main.jpg'
import stage from '../assets/shot_StageSelect.jpg'
import game from '../assets/shot_Game.jpg'
import results from '../assets/shot_Results.jpg'
import dialogue from '../assets/shot_DialogueChoice.jpg'
import prologue from '../assets/shot_Prologue1.jpg'

const SHOTS = [
  { src: main, label: '메인 바탕화면' },
  { src: stage, label: '스테이지 선택' },
  { src: game, label: '인게임' },
  { src: results, label: '클리어 결과' },
  { src: dialogue, label: '대화 선택지' },
  { src: prologue, label: '프롤로그' },
]

export default function Gallery() {
  const [idx, setIdx] = useState(0)
  const cur = SHOTS[idx]

  return (
    <section className="band" id="shots">
      <div className="wrap">
        <div className="sechead">
          <span className="secnum">&gt; 03 / SCREENSHOTS</span>
          <h2>화면 둘러보기</h2>
        </div>
        <div className="galmain">
          <Window title={`screenshot_${String(idx + 1).padStart(2, '0')}.png`}>
            <img key={cur.src} src={cur.src} alt={cur.label} />
          </Window>
        </div>
        <div className="galrow">
          {SHOTS.map((s, i) => (
            <button
              key={s.label}
              type="button"
              className={`thumb${i === idx ? ' on' : ''}`}
              onClick={() => setIdx(i)}
              aria-pressed={i === idx}
            >
              <img src={s.src} alt={s.label} loading="lazy" />
              <span className="cap">{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
