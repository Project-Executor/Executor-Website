import Window from './Window'
import hack from '../assets/shot_Hack.jpg'
import warp from '../assets/shot_Warp.jpg'
import guide from '../assets/shot_PopGuide.jpg'
import ranking from '../assets/shot_Ranking.jpg'

const FEATURES = [
  { file: 'hack.exe', img: hack, color: 'c-cyan', title: '해킹 미니게임',
    desc: '맵 속 컴퓨터에 접속해 제한 시간 안에 단어를 입력하면 벽이 열리거나 턴이 늘어납니다.' },
  { file: 'warp.exe', img: warp, color: 'c-lilac', title: '체크포인트 · 워프',
    desc: '체크포인트를 순서대로 밟고, 불안정한 구역에서는 워프로 다른 지점에 이동합니다.' },
  { file: 'guidebook.md', img: guide, color: 'c-green', title: '개발 용어 도감',
    desc: '맵 곳곳의 이상 현상을 조사하면 실제 개발 용어가 도감에 기록됩니다. 플레이하면서 배워요.' },
  { file: 'ranking.exe', img: ranking, color: 'c-gold', title: '친구 랭킹',
    desc: '스테이지별 최소 턴과 별 개수로 친구와 순위를 겨룹니다. 계정으로 기록이 저장돼요.' },
]

export default function Features() {
  return (
    <section id="feat">
      <div className="wrap">
        <div className="sechead">
          <span className="secnum">&gt; 02 / FEATURES</span>
          <h2>컴퓨터 속이라서 가능한 것들</h2>
          <p className="secsub">단순히 상자만 미는 게임이 아니에요. 개발자의 세계를 퍼즐로 옮겼습니다.</p>
        </div>
        <div className="feats">
          {FEATURES.map((f, i) => (
            <div key={f.file} className={`feat${i % 2 ? ' rev' : ''}`}>
              <div className="fimg">
                <Window title={f.file}>
                  <img src={f.img} alt={f.title} loading="lazy" />
                </Window>
              </div>
              <div className="ftxt">
                <span className={`ftag ${f.color}`}>FEATURE {String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="more">
          <b>맵 제작 · 공유</b> 직접 맵을 만들고 친구에게 공유하는 기능을 준비 중이에요.
          <span className="soon">COMING SOON</span>
        </div>
      </div>
    </section>
  )
}
