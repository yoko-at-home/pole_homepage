# 女声合唱団ポレポーレの Web サイト

- Next.js
- TypeScript
- ESLint
- Prettier
- Jest
- Tailwind CSS

## 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```bash
# Resend.com API Key
# https://resend.com/api-keys から取得
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 既存の環境変数
API_KEY=your_microcms_api_key
NEXT_PUBLIC_API_URL=https://your-project.microcms.io/api/v1/
NEXT_PUBLIC_PASSWORD=your_password
```

## Resend.com の設定

1. [Resend.com](https://resend.com)にアカウントを作成
2. API キーを取得
3. ドメインを追加・検証
4. `src/pages/api/send-resend.ts`の`from`アドレスをあなたのドメインに変更

## メール送信先について

お問い合わせメールの送信先は`src/data/siteMetaData.ts`の`email`フィールド（現在: `yoko.iwasaki8@gmail.com`）から自動的に取得されます。

## ローカル環境でのテスト

1. `.env.local`ファイルに`RESEND_API_KEY`を設定
2. 開発サーバーを起動（`yarn dev`）
3. `/contact`ページにアクセス
4. 開発環境では通常のフォームの下に「開発環境用テストフォーム」が表示されます
5. テストフォームを使用してメール送信をテストできます

**注意**:

- ローカル環境では`onboarding@resend.dev`ドメインを使用するため、実際のドメイン設定は不要です。
- Resend の無料プランでは、テストメールは API キーを作成したメールアドレス（`yoko_iwasakijp@yahoo.co.jp`）にのみ送信可能です。
- 本番環境では、ドメインを検証して任意のメールアドレスに送信できます。
