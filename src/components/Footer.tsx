import Window from './Window'
import ExtLink from './ExtLink'
import { LINKS } from '../config'

export function Cta() {
  return (
    <section className="cta" id="download">
      <div className="wrap">
        <Window title="run.bat">
          <div>
            <p className="prompt">C:\&gt; executor.exe --play</p>
            <h2>버그 잡으러 갈 준비 됐나요?</h2>
            <p>발표회 현장에서 직접 플레이해 보거나, 지금 바로 내려받으세요.</p>
          </div>
          <div className="btns">
            <ExtLink className="btn" href={LINKS.github} ph={false}>GitHub</ExtLink>
            <ExtLink className="btn pri" href={LINKS.download} ph={false}>▶ 다운로드</ExtLink>
          </div>
        </Window>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fl">
          <b>EXECUTOR</b> — 2026 동아리 발표회 출품작
          <br />
          made by 이밤 (seyoung5309) · leenight5309@naver.com
        </div>
        <div className="fr">
          <ExtLink href={LINKS.github}>GitHub</ExtLink>
          <ExtLink href={LINKS.video} ph={false}>플레이 영상</ExtLink>
          <ExtLink href={LINKS.contact} ph={false}>문의</ExtLink>
        </div>
      </div>
    </footer>
  )
}
