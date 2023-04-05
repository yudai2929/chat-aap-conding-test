# 株式会社 80&company 様のフロントエンド課題

## セットアップ方法

1. プロジェクトのルートディレクトリ直下に`.env.local`を作成する。
2. firebase のプロジェクトから api キーなどを取得する。
3. 2 で取得した変数を下記のように`.env.local`に記述する。

```
NEXT_PUBLIC_FIREBASE_API_KEY=xxxxxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxxxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxxxxx
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=xxxxxxx
```

4. パッケージをインストールする。

```bash
npm install
```

5. アプリケーションの起動。

```bash
npm run dev
```

## 扱ったパッケージ

| パッケージ名   | バージョン |
| -------------- | ---------- |
| TypeScript     | 4.9.5      |
| React.js       | 18.2.0     |
| Next.js        | 13.2.4     |
| Chakra UI      | 2.5.5      |
| Storybook      | 6.5.16     |
| Recoil         | 0.7.7      |
| TanStack Query | 4.28.0     |
| Firebase       | 9.19.1     |

### 選定理由

本課題における必要要件は以下の 2 点であった。

- 双方向にリアルタイムにチャットを行うことができる
- ログイン機能

リアルタイムチャットとログイン機能を素早く実装するために、Firebase を選定。<br>
Firesotre は ドキュメント指向データベースであるため RDB とは異なり、正規化することができない。そのため、フロントエンドにおける必要なデータを考慮すると、データベースの設計が UI に依存してしまう。
従って UI 駆動で設計を行うために、Storybook を導入。

## ディレクトリ構成

| ディレクトリ名           | 役割                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------ |
| `pages`                  | 各ページのルーティングが責務。`components`配下の`pages`を呼び出す。                  |
| `components/layout`      | ヘッダーなどのレイアウトに関わるものを定義。                                         |
| `components/pages`       | `src`直下の`pages`と一対一に対応。API の呼び出しはここで行う。                       |
| `components/ui/common`   | 汎用的なコンポーネントを定義。                                                       |
| `components/ui/features` | ドメイン知識を持つコンポーネントを定義。                                             |
| `repositories`           | データの永続化が責務。                                                               |
| `services`               | ビジネスロジックを記述する。ドメインの生成はここで行う。 `repositories` に依存する。 |
| `utils/libs`             | 汎用的な関数を定義。                                                                 |
| `utils/hooks`            | カスタムフックスを定義。 `services` の関数は hooks から呼び出される。                |
| `entities`               | アプリケーションで扱う型を定義。                                                     |
| `mocks`                  | `Storybook`で扱うモックデータを定義。                                                |
