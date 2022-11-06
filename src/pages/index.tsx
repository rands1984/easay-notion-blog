import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>トップページです</h2>
      <p>Notionの活用や日々考えてることのアウトプットとしてこのサイトを作成してます。</p>
      <p>現状、サイトはデフォルトのままですが今後カスタマイズしていこうかと考えてます。</p>
      <p>このサイトはeasy-notion-blogを使用して作成されてます。</p>
      <p>
        <ExtLink href="https://twitter.com/rands1984">
        Twitterアカウント
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
