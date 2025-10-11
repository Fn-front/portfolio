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

## 参考資料

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [FLOCSS](https://github.com/hiloki/flocss)
