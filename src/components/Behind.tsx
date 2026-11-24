const STACK = [
  { head: 'CLIENT', items: ['Unity', 'C#'] },
  { head: 'SERVER', items: ['Spring Boot', 'JWT'] },
  { head: 'DATA', items: ['MySQL', 'Redis', 'AWS RDS'] },
  { head: 'DESIGN · SOUND', items: ['Figma', 'Procreate', 'GarageBand'] },
]

type Status = 'done' | 'now' | 'todo'
const SCHEDULE: { date: string; title: string; status: Status }[] = [
  { date: '10.12 – 10.17', title: '기획서 · 시나리오', status: 'done' },
  { date: '10.18 – 10.24', title: 'DB · 흐름 설계', status: 'done' },
  { date: '10.25 – 11.07', title: '디자인', status: 'done' },
  { date: '11.08 – 11.14', title: '백엔드', status: 'done' },
  { date: '11.15 – 11.21', title: 'Unity 개발', status: 'done' },
  { date: '11.22 – 11.25', title: '마무리 · 발표', status: 'now' },
]

export default function Behind() {
  return (
    <section className="band" id="dev">
      <div className="wrap">
        <div className="sechead">
          <span className="secnum">&gt; 05 / BEHIND</span>
          <h2>혼자서, 6주 동안 만들었어요</h2>
          <p className="secsub">기획부터 디자인, 서버, 클라이언트까지 1인 개발 프로젝트입니다.</p>
        </div>
        <div className="two">
          <div>
            <h3>기술 스택</h3>
            {STACK.map(s => (
              <div key={s.head} className="stk">
                <span className="stkh">{s.head}</span>
                <div className="chips">
                  {s.items.map(it => <span key={it} className="chip">{it}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3>개발 일정</h3>
            <div className="tl">
              {SCHEDULE.map(s => (
                <div key={s.date} className={`tli ${s.status}`}>
                  <span className="tld" />
                  <span className="tldate">{s.date}</span>
                  <b>{s.title}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
