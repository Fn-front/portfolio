# アーキテクチャ・ディレクトリ構成

このドキュメントはプロジェクトのアーキテクチャと各ディレクトリの役割を定義します。

## プロジェクト全体構成

```
portfolio/
├── public/                 # 静的ファイル
│   ├── images/            # 画像ファイル
│   └── favicon.ico        # ファビコン
├── src/                    # ソースコード
│   ├── app/               # Next.js App Router
│   ├── features/          # 機能単位のコンポーネント群
│   ├── components/        # 共通UIコンポーネント
│   ├── functions/         # ビジネスロジック
│   ├── styles/            # SCSS（FLOCSS）
│   ├── lib/               # 外部ライブラリ設定
│   ├── utils/             # 汎用ユーティリティ
│   ├── tests/             # E2Eテスト
│   ├── snapshot/          # スナップショットテスト
│   └── middleware.ts      # Next.js Middleware
├── .claude/               # Claude Code用ドキュメント
├── .eslintrc.json         # ESLint設定
├── .prettierrc            # Prettier設定
├── .stylelintrc.json      # Stylelint設定
├── tsconfig.json          # TypeScript設定
├── next.config.mjs        # Next.js設定
├── package.json           # 依存関係
└── CLAUDE.md              # プロジェクト概要
```

## src/ ディレクトリ詳細

### app/ - Next.js App Router

Next.js 14 の App Router に準拠したページ・レイアウト・API定義。

```
app/
├── layout.tsx              # ルートレイアウト
├── page.tsx                # トップページ（/）
├── achievements/           # 実績ページ
│   ├── page.tsx           # 一覧ページ（/achievements）
│   └── [id]/
│       └── page.tsx       # 詳細ページ（/achievements/:id）
└── api/                    # API Routes
    └── profile/
        ├── achievement/
        │   ├── route.ts   # /api/profile/achievement
        │   └── [id]/
        │       └── route.ts # /api/profile/achievement/:id
        └── route.ts
```

#### ファイル命名規則
- `page.tsx`: ページコンポーネント（必須）
- `layout.tsx`: レイアウトコンポーネント（オプション）
- `route.ts`: API Route Handler（オプション）
- `loading.tsx`: ローディング UI（オプション）
- `error.tsx`: エラー UI（オプション）

#### 責務
- **ルーティング**: URL とコンポーネントのマッピング
- **レイアウト**: 共通レイアウトの定義
- **メタデータ**: SEO対応のメタ情報
- **API Routes**: サーバーサイド API エンドポイント

**重要**: ビジネスロジックは `features/` や `functions/` に配置し、`app/` はルーティングとデータ取得のみに専念。

### features/ - 機能単位のコンポーネント群

機能（Feature）ごとに凝集したコンポーネント群を配置。

```
features/
├── Profile/                # プロフィール機能
│   ├── index.tsx          # メインコンポーネント
│   ├── achievements/
│   │   ├── index.tsx      # 実績一覧
│   │   └── detail/
│   │       └── index.tsx  # 実績詳細
│   └── components/
│       ├── info.tsx       # プロフィール情報
│       ├── achievements.tsx
│       ├── skill.tsx
│       └── skillChart.tsx
├── BreadcrumbsList/        # パンくずリスト機能
│   └── index.tsx
└── Ui/                     # 機能レベルUI
    └── Header/
        └── index.tsx
```

#### 配置基準
- **機能の独立性**: 他の機能に依存しない
- **ドメイン凝集**: 特定の業務領域に関連するコンポーネント群
- **再利用性**: プロジェクト内で複数箇所から利用される

#### 責務
- 特定機能に関連する UI コンポーネント
- 機能固有のロジック（カスタムフック等）
- 機能内での状態管理

**例**: `Profile` 機能は、プロフィール表示に関連するすべてのコンポーネントを含む。

### components/ - 共通UIコンポーネント

プロジェクト横断で再利用する汎用コンポーネント。

```
components/
├── Ui/                     # UI コンポーネント
│   ├── AchievementsList/  # 実績リスト
│   ├── Button/            # ボタン
│   ├── Card/              # カード
│   ├── Tag/               # タグ
│   ├── Heading/           # 見出し
│   ├── Link/              # リンク
│   ├── List/              # リスト
│   ├── Loading/           # ローディング
│   ├── SkillTag/          # スキルタグ
│   ├── Tag/               # 汎用タグ
│   └── Text/              # テキスト
├── Icons/                  # アイコンコンポーネント
│   ├── GitHub.tsx
│   └── Twitter.tsx
└── Formatters/             # データフォーマッター
    └── DateFormatter.tsx
```

#### 配置基準
- **汎用性**: 特定の機能に依存しない
- **再利用性**: 複数の機能から利用される
- **独立性**: 単体で動作する

#### 責務
- 汎用的な UI パーツ
- デザインシステムのコンポーネント
- アトミックなコンポーネント

**features/ との使い分け**:
- `components/`: ボタン、カード等の汎用パーツ
- `features/`: プロフィール、実績一覧等の機能単位

### functions/ - ビジネスロジック

ビジネスロジック・ユーティリティ・型定義を集約。

```
functions/
├── actions/                # Server Actions
│   └── profile.ts
├── hooks/                  # カスタムフック
│   └── useUser.ts
├── types/                  # 型定義
│   ├── user.ts
│   ├── achievement.ts
│   └── api.ts
├── constants/              # 定数
│   ├── routes.ts
│   ├── apiEndpoints.ts
│   └── skillCategories.ts
└── routes/                 # ルート定義
    └── index.ts
```

#### 配置ルール

**actions/**: Next.js Server Actions
```typescript
// actions/profile.ts
'use server';

export async function fetchProfile() {
  // サーバーサイドでのみ実行されるロジック
}
```

**hooks/**: React カスタムフック
```typescript
// hooks/useUser.ts
export function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  // ...
  return { user, loading, error };
}
```

**types/**: TypeScript 型定義
```typescript
// types/user.ts
export interface User {
  id: string;
  name: string;
}
```

**constants/**: プロジェクト全体の定数
```typescript
// constants/routes.ts
export const ROUTES = {
  HOME: '/',
  ACHIEVEMENTS: '/achievements',
} as const;
```

### styles/ - SCSS（FLOCSS準拠）

FLOCSS アーキテクチャに準拠したスタイル定義。

```
styles/
├── app.scss                # エントリーポイント
├── foundation/             # リセット・変数
│   └── _variables.scss
├── mixin/                  # Mixin
│   └── _breakpoint.scss
├── layout/                 # レイアウト
│   ├── _header.scss
│   ├── _footer.scss
│   └── _container.scss
├── components/             # コンポーネントスタイル
│   ├── button/
│   │   ├── _default.scss
│   │   └── _primary.scss
│   └── card/
│       └── _default.scss
├── project/                # プロジェクト固有
│   └── _profile.scss
└── utility/                # ユーティリティクラス
    ├── _margin.scss
    └── _text.scss
```

詳細は `.claude/scss-styling.md` を参照。

### lib/ - 外部ライブラリ設定

外部ライブラリの初期化・設定ファイル。

```
lib/
├── mui/                    # Material-UI設定
│   └── theme.ts
└── swr/                    # SWR設定
    └── config.ts
```

#### 配置ルール
- ライブラリごとにディレクトリを作成
- 設定・初期化コードを集約
- 型定義の拡張もここに配置

### utils/ - 汎用ユーティリティ

フレームワーク非依存の純粋関数。

```
utils/
├── errorHandler.ts         # エラーハンドリング
├── copyToClipboard.ts      # クリップボード操作
├── formatDate.ts           # 日付フォーマット
└── validation.ts           # バリデーション
```

#### 配置基準
- React/Next.js に依存しない純粋関数
- 汎用的なヘルパー関数
- 単体テスト可能な関数

**functions/ との使い分け**:
- `utils/`: フレームワーク非依存（`formatDate`, `validateEmail`）
- `functions/`: フレームワーク依存（`useUser`, `fetchProfile`）

### tests/ - E2Eテスト

Playwright を使用した E2E テスト。

```
tests/
└── codeView.spec.ts
```

### snapshot/ - スナップショットテスト

スナップショットテスト用ファイル。

```
snapshot/
└── snapshot.spec.ts
```

## 設計原則

### 1. 関心の分離（Separation of Concerns）

各ディレクトリは明確な責務を持つ：

- `app/`: ルーティング・レイアウト
- `features/`: 機能単位の UI
- `components/`: 汎用 UI パーツ
- `functions/`: ビジネスロジック
- `styles/`: スタイリング
- `utils/`: 汎用関数

### 2. 単一責任の原則（Single Responsibility Principle）

1ファイル = 1コンポーネント/1関数/1型定義

```
// ✅ Good
Button/
├── index.tsx              # Buttonコンポーネントのみ
└── types.ts               # Button関連の型のみ

// ❌ Bad
Ui/
└── index.tsx              # Button, Card, Modal等が混在
```

### 3. 依存関係の方向

```
app/ → features/ → components/
  ↓       ↓           ↓
functions/ ← utils/
```

- **上位層**: `app/`, `features/`
- **下位層**: `components/`, `functions/`, `utils/`
- **原則**: 下位層は上位層に依存しない

### 4. コロケーション（Co-location）

関連するファイルは近くに配置：

```
Profile/
├── index.tsx              # メインコンポーネント
├── types.ts               # Profile固有の型
├── hooks.ts               # Profile固有のフック
└── components/            # Profile固有のサブコンポーネント
    └── Info.tsx
```

## ファイル配置の判断フロー

新しいコンポーネントを作成する際の判断基準：

```
コンポーネントを作成する
↓
Q: 特定の機能に強く紐づいている？
YES → features/{機能名}/ に配置
NO  ↓

Q: プロジェクト横断で再利用される？
YES → components/ に配置
NO  ↓

Q: ページコンポーネント？
YES → app/ に配置
NO  ↓

再検討（おそらく features/ が適切）
```

## パス エイリアス

TypeScript の Path Alias を活用：

```typescript
// ✅ Good: Path Alias使用
import { Button } from '@/components/Ui/Button';
import { User } from '@/functions/types/user';
import logo from '@/public/images/logo.png';

// ❌ Bad: 相対パス
import { Button } from '../../../components/Ui/Button';
import { User } from '../../functions/types/user';
```

## モジュール境界

### エクスポート戦略

各ディレクトリは `index.ts` で公開 API を定義：

```typescript
// components/Ui/Button/index.tsx
export { Button } from './Button';
export type { ButtonProps } from './types';

// 使用側
import { Button } from '@/components/Ui/Button';
// ❌ import { Button } from '@/components/Ui/Button/Button'; // 内部構造に依存しない
```

## スケーラビリティ

### 機能の追加

新機能を追加する場合：

1. `features/{機能名}/` ディレクトリを作成
2. `functions/types/{機能名}.ts` で型定義
3. `app/{機能名}/` でルーティング
4. `styles/project/_{機能名}.scss` でスタイル

### コンポーネントの分割

コンポーネントが肥大化した場合：

```typescript
// Before: 1ファイルで肥大化
Profile/
└── index.tsx (500行)

// After: 責務ごとに分割
Profile/
├── index.tsx              # 統合
├── components/
│   ├── Info.tsx          # プロフィール情報
│   ├── Skills.tsx        # スキル
│   └── Achievements.tsx  # 実績
└── hooks/
    └── useProfile.ts     # カスタムフック
```

## 命名規則

### ディレクトリ名
- **PascalCase**: `Profile/`, `Button/`（コンポーネント）
- **camelCase**: `functions/`, `utils/`（機能）
- **kebab-case**: 使用しない

### ファイル名
- **コンポーネント**: `PascalCase.tsx`（例: `Button.tsx`）
- **フック**: `camelCase.ts`（例: `useUser.ts`）
- **ユーティリティ**: `camelCase.ts`（例: `formatDate.ts`）
- **型定義**: `camelCase.ts`（例: `user.ts`）
- **定数**: `camelCase.ts`（例: `routes.ts`）

詳細は `.claude/naming-conventions.md` を参照。

## データ管理の重要な注意事項

### 実績データの同期

**【MUST】実績データの二重管理**

実績データは以下の2箇所で管理されています：
1. `src/content/achievements/*.md` - Markdownファイル（詳細コンテンツ）
2. `src/lib/data/articles.ts` - データ配列（一覧表示用メタデータ）

**重要**: `src/content/achievements/` の内容を変更した場合、**必ず** `src/lib/data/articles.ts` も更新してください。

#### 更新が必要なケース
- 新しい実績を追加したとき
- 実績のタイトルを変更したとき
- サムネイル画像を変更したとき
- 技術タグを追加・変更したとき

#### 更新例
```typescript
// src/lib/data/articles.ts
export const articles: Achievement[] = [
  {
    id: '1',                              // Markdownファイル名と一致
    title: '自社SaaS フロントエンドリアーキテクチャ',  // Markdownの見出しと一致
    content: 'これは最初の記事の内容です。',
    thumbnail: 'no_image_yoko.jpg',       // public/images/ 配下の画像
    imagePath: [],
    tags: [                               // Markdownで使用している技術と一致
      SKILL_TAGS.TECHNICAL.REACT,
      SKILL_TAGS.TECHNICAL.NEXT_JS,
      SKILL_TAGS.TECHNICAL.TYPESCRIPT,
    ],
  },
  // ...
];
```

### 実績記事の作成

**【MUST】テンプレートの使用**

新しい実績記事を作成する際は、`src/content/achievements/_template.md` を使用してください。

#### テンプレートの場所
- **パス**: `src/content/achievements/_template.md`
- **用途**: 大規模改善/リアーキテクチャ案件向けの詳細フォーマット

#### テンプレートの構成

実績記事は以下の統一フォーマットに従ってください：

```markdown
---
title: 'プロジェクトタイトル'
date: 'YYYY-MM-DD - YYYY-MM-DD'
techStack:
  - { name: '技術名1', icon: 'nextjs' }
  - { name: '技術名2', icon: 'typescript' }
  - { name: 'アイコンなし技術' }
---

## 概要

プロジェクトの概要を段落形式で簡潔に記述。

- **参画期間**：YYYY年MM月〜YYYY年MM月（X年間 / Xヶ月間）
- **担当範囲**：要件定義・設計・開発等
- **役割**：フロントエンドエンジニア（X名体制）
- **チーム構成**（該当する場合）：FE X名、BE X名、PM X名、デザイナー X名

## プロジェクト背景

プロジェクトが始まった背景を簡潔に記述。

### 解決すべき課題

- **課題1のタイトル**
  課題の詳細説明

- **課題2のタイトル**
  課題の詳細説明

- **課題3のタイトル**
  課題の詳細説明

### 提案・アプローチ

これらの課題に対して、どのような判断・提案をしたかを記述。

## 主な取り組み

### カテゴリ1：主要な取り組みタイトル

具体的な取り組み内容を記述。

- 実施項目1
- 実施項目2
- 実施項目3

#### サブカテゴリ1-1（必要に応じて）

詳細な説明や具体的な実装内容を記述。

### カテゴリ2：パフォーマンス改善（該当する場合）

定量的な成果がある場合は数値で示す。

[ACHIEVEMENT_STATS]

#### 最適化項目1

- 改善内容1
- 改善内容2
- 改善内容3

#### 最適化項目2（総削減：XX MB / XX%削減）

具体的な改善手法や使用ツールを記載。

主要な成果：

- 成果1：具体的な数値
- 成果2：具体的な数値
- 成果3：具体的な効果

### カテゴリ3：コード品質向上施策（該当する場合）

#### 施策1（XXファイル削除 / XX件修正）

使用したツールや手法を記載。

- 対応内容1
- 対応内容2
- 対応内容3

参考：[ツール名 - URL](https://example.com)

### カテゴリX：リード/マネジメント的役割（該当する場合）

- 役割1：具体的な内容
- 役割2：具体的な内容
- 役割3：具体的な内容

## 技術的な課題と解決

### 課題1：タイトル

直面した技術的課題とその解決方法を詳細に記述。

- 課題の詳細
- 解決アプローチ
- 工夫した点

最終的な成果や学びを記述。

## プロジェクトの成果

本プロジェクトの成果を定量的・定性的に記述。

### 定量的な成果

- **成果1**：具体的な数値
- **成果2**：具体的な数値
- **成果3**：具体的な数値

### 定性的な成果

- **成果1**：具体的な内容
- **成果2**：具体的な内容
- **成果3**：具体的な内容

## 学びと成長

### 技術的な学び

- **ポイント1**
  具体的な内容と理由

- **ポイント2**
  具体的な内容と理由

- **ポイント3**
  具体的な内容と理由

### プロジェクト推進での学び

- **ポイント1**
  具体的な内容と理由

- **ポイント2**
  具体的な内容と理由

### 今後の展望

- **展望1**：具体的な内容
- **展望2**：具体的な内容
- **展望3**：具体的な内容
```

#### セクション説明

- **概要**: 箇条書きで詳細情報を明記（参画期間・担当範囲・役割・チーム構成）
- **プロジェクト背景**: 「解決すべき課題」と「提案・アプローチ」に分離
- **主な取り組み**: カテゴリ番号を付けて整理（カテゴリ1, カテゴリ2...）
- **プロジェクトの成果**: 定量的・定性的に分離して記述
- **学びと成長**: 「技術的な学び」「プロジェクト推進での学び」「今後の展望」の3分割

#### 利用可能なアイコン
techStackで使用できるアイコン名（simple-iconsより）：
- `nextjs`, `typescript`, `react`, `mui`, `radixui`, `firebase`
- `reacthookform`, `zod`, `mermaid`, `storybook`, `docker`, `swagger`
- `eslint`, `prettier`, `stylelint`, `swr`, `axios`, `tailwindcss`

アイコンがない技術は `icon` プロパティを省略してください。

#### 特殊マーカー
- `[ACHIEVEMENT_STATS]`: パフォーマンス改善の数値表示コンポーネントを挿入

#### 作成手順
1. `_template.md` をコピーして新しい番号のファイルを作成（例: `2.md`）
2. frontmatter（title, date, techStack）を記入
3. 各セクションの内容を記述
4. **必ず** `src/lib/data/articles.ts` にもエントリを追加

#### 新しい技術アイコンの追加

**【MUST】techStackに新しい技術を追加する際の手順**

techStackに新しい技術を追加し、アイコンを表示したい場合は以下の手順に従ってください：

1. **simple-iconsでアイコンの存在を確認**
   - [simple-icons公式サイト](https://simpleicons.org/)で技術名を検索
   - アイコンが存在する場合、アイコン名をメモ（例: `nextdotjs`, `typescript`）

2. **TechIconコンポーネントにアイコンを追加**
   - `src/components/Icons/TechIcon.tsx` を編集
   - import文にアイコンを追加
   - iconMapにマッピングを追加

```typescript
// src/components/Icons/TechIcon.tsx

// 1. import文に追加
import {
  // ... 既存のimport
  siNewTech,  // 新しいアイコンを追加
} from 'simple-icons';

// 2. iconMapに追加
const iconMap: Record<string, { path: string; hex: string }> = {
  // ... 既存のマッピング
  newtechname: { path: siNewTech.path, hex: siNewTech.hex },  // 追加
};
```

3. **マークダウンファイルに適用**
   - 実績記事のfrontmatterにアイコン名を指定

```yaml
techStack:
  - { name: '新しい技術', icon: 'newtechname' }
```

4. **リンターを実行**
   - `npm run lint`
   - `npm run format`
   - `npm run markuplint`

**注意**: simple-iconsにアイコンが存在しない場合は、`icon` プロパティを省略してください。

## 参考資料

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [FLOCSS](https://github.com/hiloki/flocss)
