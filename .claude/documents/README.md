# .claude/documents ディレクトリ

このディレクトリには、Claude Code がプロジェクトで作業する際に参照する詳細な規約・ガイドラインが含まれています。

## ドキュメント一覧

### 1. [coding-standards.md](./coding-standards.md)
**基本的なコーディング規約**

- コードフォーマット（インデント、引用符、セミコロン等）
- コメントの書き方
- エラーハンドリング
- 依存関係管理
- パフォーマンス・セキュリティの基本原則

### 2. [typescript.md](./typescript.md)
**TypeScript 固有の規約**

- 型定義（interface vs type）
- any型の使用制限
- 型ガード
- ジェネリクス
- ユーティリティ型
- strictモードの遵守

### 3. [react-nextjs.md](./react-nextjs.md)
**React / Next.js 開発規約**

- Next.js 14 App Router の使い方
- Server Components vs Client Components
- データフェッチング
- Hooks の使用方法
- コンポーネント設計
- Material-UI の使用方法

### 4. [scss-styling.md](./scss-styling.md)
**SCSS / スタイリング規約**

- FLOCSS アーキテクチャ
- クラス名命名規則（スネークケース必須）
- HTMLタグ直接指定禁止
- Stylelint ルール
- レスポンシブデザイン
- Material-UI との共存

### 5. [architecture.md](./architecture.md)
**プロジェクト構成・アーキテクチャ**

- ディレクトリ構成の詳細
- 各ディレクトリの役割・責務
- コンポーネント配置の判断基準
- 設計原則
- モジュール境界
- スケーラビリティ

### 6. [testing.md](./testing.md)
**テスト規約**

- Playwright E2Eテスト
- スナップショットテスト
- テストの書き方
- ページオブジェクトモデル
- セレクタの優先順位
- テストのベストプラクティス

### 7. [naming-conventions.md](./naming-conventions.md)
**命名規則**

- ケーススタイル（camelCase, PascalCase, snake_case）
- 変数・関数の命名パターン
- コンポーネント命名
- ファイル・ディレクトリ命名
- Boolean型の命名
- 動詞の使い分け

## 使用方法

### Claude Code での参照

Claude Code は、コードを書く際にこれらのドキュメントを自動的に参照します。
各ドキュメントには具体的なコード例（Good/Bad）が含まれており、一貫したコーディングスタイルを維持できます。

### 新機能実装時

1. 該当する規約ドキュメントを確認
2. 既存コードのパターンを確認
3. 規約に従って実装

### ドキュメントの更新

プロジェクトの成長に応じて、これらのドキュメントも更新してください：

- 新しいパターンの追加
- ベストプラクティスの更新
- プロジェクト固有のルールの追加

## クイックリファレンス

よく使う規約のチートシート：

### TypeScript
- **any型**: 原則禁止、`unknown` + 型ガードを使用
- **型定義**: オブジェクトは `interface`、ユニオンは `type`
- **strictモード**: 有効（null/undefinedの明示的な扱い）

### React
- **デフォルト**: Server Component
- **Client Component**: `'use client'` は必要最小限に
- **Hooks**: `use{HookName}` の命名規則
- **イベントハンドラ**: `handle{EventName}` の命名規則

### SCSS
- **クラス名**: `snake_case` 必須（Stylelintで強制）
- **HTMLタグ**: 直接指定禁止（foundation層以外）
- **色名**: 禁止（HEX/RGB使用）
- **!important**: 禁止

### 命名
- **変数・関数**: `camelCase`
- **コンポーネント・クラス**: `PascalCase`
- **定数**: `UPPER_SNAKE_CASE`（グローバルのみ）
- **Boolean**: `is/has/should/can` プレフィックス
- **配列**: 複数形
- **関数**: 動詞 + 名詞

## 開発ツールの使用

### 情報検索が必要な場合

**Web検索**: ライブラリの最新情報やドキュメントを検索する場合は **context7** を使用してください。

```
例: React Hook Form の最新の使い方を調べる
例: Material-UI の新しいコンポーネントを検索する
```

### コード修正・実装後の確認

**ブラウザ確認**: コードを修正・実装した後は、必ず **chrome-devtools** を使用して動作確認を行ってください。

```
例: 新しいUIコンポーネントの表示確認
例: スタイル修正後のレイアウト確認
例: フォームの動作確認
```

**確認手順**:
1. 修正・実装後、`npm run dev` で開発サーバーを起動
2. chrome-devtools で該当ページにアクセス
3. 意図した通りに動作・表示されているか確認
4. Console エラーがないか確認

## 参考

プロジェクトルートの [CLAUDE.md](../../CLAUDE.md) には、このプロジェクトの概要と開発コマンドが記載されています。
