import HeroComponent from '../components/Hero/Hero'
import SectionComponent from '../components/Main/Section'
import FooterComponent from '../components/Layout/Footer'

const App: React.FC = () => {
  return (
    <>
      <HeroComponent id="hero" />
      <SectionComponent
        id="about"
        title="葦江音綺とは？"
      >
        左にキャラ設定のテーブル、右に葦江の立ち絵を入れる。<br />
        ホバーしたらorクリックしたら別の立ち絵になる(上着を着せる、脱がせる)ギミックとか入れたら面白そう。
      </SectionComponent>
      <SectionComponent
        id="download"
        title="ダウンロード"
        alternateTitle
      >
        準備中。<br />
        葦江にちなんだ何らかのフレーバーテキストを入れたい。
      </SectionComponent>
      <FooterComponent />
    </>
  )
}

export default App
