# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Next.js 14 (App Router) を使用したポートフォリオサイト。
TypeScript + React + SCSS + Material-UI を採用。

**重要**: 詳細な規約は `.claude/documents/` ディレクトリ内のドキュメントを参照してください。

## 開発コマンド

### 基本操作
- `npm run dev`: 開発サーバー起動 (ポート 2937)
- `npm run build`: プロダクションビルド
- `npm start`: プロダクションサーバー起動

### コード品質
- `npm run lint`: ESLint実行 (src配下のjs/ts/tsxファイル)
- `npm run format`: Prettier実行 (フォーマット)
- `npm run markuplint`: Markuplint実行 (マークアップ検証)

### テスト
- `npm run e2e`: Playwright E2Eテスト実行 + レポート表示
- `npm run e2e:actions`: CI環境向けE2Eテスト
- `npm run snapshot`: スナップショットテスト実行

## アーキテクチャ

### ディレクトリ構成

```
src/
├── app/                    # App Router (ページ・レイアウト)
│   ├── api/               # API Routes (/api/profile/*)
│   ├── achievements/      # 実績一覧・詳細ページ
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # トップページ
├── features/              # 機能単位のコンポーネント群
│   ├── Profile/          # プロフィール関連機能
│   ├── BreadcrumbsList/  # パンくずリスト
│   └── Ui/               # 機能レベルUI
├── components/            # 共通UIコンポーネント
│   ├── Ui/               # 汎用UIパーツ
│   ├── Icons/            # アイコンコンポーネント
│   └── Formatters/       # データフォーマット用
├── functions/             # ビジネスロジック・ユーティリティ
│   ├── actions/          # サーバーアクション
│   ├── hooks/            # カスタムフック
│   ├── types/            # 型定義
│   ├── constants/        # 定数
│   └── routes/           # ルート定義
├── styles/                # SCSS (FLOCSS準拠)
│   ├── foundation/       # リセット・変数
│   ├── layout/           # レイアウト
│   ├── components/       # コンポーネントスタイル
│   ├── project/          # プロジェクト固有
│   └── utility/          # ユーティリティクラス
├── lib/                   # 外部ライブラリ設定
├── utils/                 # 汎用ユーティリティ
├── tests/                 # E2Eテスト
├── snapshot/              # スナップショットテスト
└── middleware.ts          # Next.js middleware
```

### 設計方針

#### コンポーネント分類
- **features/**: 機能単位で凝集したコンポーネント群 (例: Profile, BreadcrumbsList)
- **components/**: プロジェクト横断で再利用する汎用コンポーネント

#### ビジネスロジックの配置
- **functions/actions/**: Next.js Server Actions
- **functions/hooks/**: React カスタムフック
- **utils/**: フレームワーク非依存の純粋関数

#### スタイリング
- **SCSS (FLOCSS準拠)**: `src/styles/` 配下で管理
- **Material-UI**: MUIコンポーネントを併用
- **スネークケース必須**: クラス名は `my_component` 形式 (Stylelint強制)
- **HTMLタグ直接指定禁止**: 独自のクラス名を使用すること

## コーディング規約

### TypeScript
- strict モード有効
- Path alias: `@/*` → `src/*`, `@/public/*` → `public/*`

### コードスタイル
- **引用符**: シングルクォート必須 (ESLint/Prettier)
- **インデント**: 2スペース
- **改行コード**: LF
- **行幅**: 80文字

### SCSS
- **クラス名**: スネークケース強制 (`button_primary`)
- **!important 禁止**
- **色名指定禁止** (HEX/RGB使用)
- **プロパティ順序**: Recess Order準拠

## 詳細ドキュメント

プロジェクトの詳細な規約は `.claude/documents/` ディレクトリに分割して管理しています：

- **[coding-standards.md](.claude/documents/coding-standards.md)**: 基本的なコーディング規約
- **[typescript.md](.claude/documents/typescript.md)**: TypeScript固有の規約
- **[react-nextjs.md](.claude/documents/react-nextjs.md)**: React/Next.js開発規約
- **[scss-styling.md](.claude/documents/scss-styling.md)**: SCSS/スタイリング規約
- **[architecture.md](.claude/documents/architecture.md)**: プロジェクト構成・アーキテクチャ
- **[testing.md](.claude/documents/testing.md)**: テスト規約
- **[naming-conventions.md](.claude/documents/naming-conventions.md)**: 命名規則

## 注意事項

- 開発サーバーはポート `2937` で起動
- E2Eテストは環境変数 `APP_ENV` でテストデータパスを指定
- Prettier/ESLint/Stylelint の設定に厳密に従うこと
- 新機能実装前に必ず `.claude/` 内の関連ドキュメントを確認すること
