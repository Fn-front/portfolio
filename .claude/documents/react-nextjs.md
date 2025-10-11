# React / Next.js 規約

このドキュメントは React と Next.js を使用する際の詳細規約を定義します。

## Next.js 14 App Router

### プロジェクト構成
このプロジェクトは **Next.js 14** の **App Router** を採用しています。

```
src/
├── app/                    # App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # トップページ
│   ├── achievements/      # 実績ページ
│   │   ├── page.tsx      # 一覧ページ
│   │   └── [id]/
│   │       └── page.tsx  # 詳細ページ（動的ルート）
│   └── api/               # API Routes
│       └── profile/
│           └── route.ts   # Route Handler
└── middleware.ts          # Middleware
```

### ルート構成

#### ページコンポーネント
```typescript
// ✅ Good: page.tsx（デフォルトエクスポート）
export default function AchievementsPage() {
  return <div>Achievements</div>;
}

// ✅ Good: 非同期コンポーネント（Server Component）
export default async function ProfilePage() {
  const data = await fetchProfile();
  return <Profile data={data} />;
}
```

#### レイアウトコンポーネント
```typescript
// ✅ Good: layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
```

#### API Routes (Route Handler)
```typescript
// ✅ Good: route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const data = await fetchData();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // 処理
  return NextResponse.json({ success: true });
}
```

### Server Components vs Client Components

#### デフォルトは Server Component
```typescript
// ✅ Good: Server Component（デフォルト）
// 'use client' ディレクティブなし
export default async function ProductList() {
  const products = await fetchProducts(); // サーバーサイドで実行
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

#### Client Component が必要な場合
以下の機能を使う場合のみ `'use client'` を追加：

- useState, useEffect 等の React Hooks
- イベントハンドラ（onClick, onChange等）
- ブラウザAPI（localStorage, window等）
- カスタムフック

```typescript
// ✅ Good: Client Component（必要な場合のみ）
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

#### Client Component の最小化
```typescript
// ❌ Bad: ページ全体をClient Componentに
'use client';

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header /> {/* Headerまでクライアント化される */}
      <Counter count={count} setCount={setCount} />
      <Footer /> {/* Footerまでクライアント化される */}
    </div>
  );
}

// ✅ Good: 必要な部分のみClient Component化
export default function Page() {
  return (
    <div>
      <Header /> {/* Server Component */}
      <CounterClient /> {/* Client Component */}
      <Footer /> {/* Server Component */}
    </div>
  );
}

// CounterClient.tsx
'use client';
function CounterClient() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### データフェッチング

#### Server Component でのfetch
```typescript
// ✅ Good: Server Componentで直接fetch
export default async function UserProfile({ params }: { params: { id: string } }) {
  const user = await fetch(`https://api.example.com/users/${params.id}`)
    .then(res => res.json());

  return <div>{user.name}</div>;
}

// ✅ Good: キャッシュ制御
const user = await fetch(`https://api.example.com/users/${params.id}`, {
  next: { revalidate: 60 }, // 60秒ごとに再検証
});

// ✅ Good: キャッシュ無効化
const user = await fetch(`https://api.example.com/users/${params.id}`, {
  cache: 'no-store', // 常に最新データを取得
});
```

#### Client Component でのデータフェッチ
SWR を使用：

```typescript
// ✅ Good: SWRの使用
'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function UserProfile({ id }: { id: string }) {
  const { data, error, isLoading } = useSWR(`/api/users/${id}`, fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <div>{data.name}</div>;
}
```

### メタデータの設定

#### 静的メタデータ
```typescript
// ✅ Good: 静的メタデータ
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements',
  description: 'My achievements list',
  openGraph: {
    title: 'Achievements',
    description: 'My achievements list',
    images: ['/og-image.jpg'],
  },
};
```

#### 動的メタデータ
```typescript
// ✅ Good: generateMetadata関数
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const achievement = await fetchAchievement(params.id);

  return {
    title: achievement.title,
    description: achievement.description,
  };
}
```

## React コンポーネント設計

### コンポーネントの構成

```typescript
// ✅ Good: コンポーネントの基本構成
import React from 'react';
import type { FC } from 'react';

// 型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

// コンポーネント本体
export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      className={`button button_${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
```

### Props の設計

#### Props の型定義
```typescript
// ✅ Good: interface で型定義
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// ✅ Good: 子要素の型
interface LayoutProps {
  children: React.ReactNode; // 推奨
  // children: ReactNode;     // これでも可
}

// ❌ Bad: children を string 等に制限しない
interface BadProps {
  children: string; // ReactNodeにすべき
}
```

#### デフォルト値
```typescript
// ✅ Good: デストラクチャリングでデフォルト値
export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  ...rest
}) => {
  // ...
};

// ✅ Good: defaultProps（関数コンポーネントでは非推奨傾向）
Button.defaultProps = {
  variant: 'primary',
  disabled: false,
};
```

### Hooks の使用

#### useState
```typescript
// ✅ Good: 型推論が効く場合は型注釈不要
const [count, setCount] = useState(0);
const [name, setName] = useState('');

// ✅ Good: 複雑な型は明示
const [user, setUser] = useState<User | null>(null);

// ❌ Bad: 不要な型注釈
const [count, setCount] = useState<number>(0); // 推論で十分
```

#### useEffect
```typescript
// ✅ Good: 依存配列を正しく指定
useEffect(() => {
  fetchData(id);
}, [id]); // idが変更時のみ実行

// ✅ Good: クリーンアップ関数
useEffect(() => {
  const subscription = subscribe();

  return () => {
    subscription.unsubscribe();
  };
}, []);

// ❌ Bad: 依存配列の省略（無限ループの原因）
useEffect(() => {
  setCount(count + 1);
}); // 依存配列がない
```

#### useCallback と useMemo
```typescript
// ✅ Good: useCallback（関数のメモ化）
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []); // 依存配列が空なら、関数は再生成されない

// ✅ Good: useMemo（計算結果のメモ化）
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// ⚠️ 注意: 過度なメモ化は避ける（パフォーマンス測定してから使用）
```

#### カスタムフック
```typescript
// ✅ Good: カスタムフック（src/functions/hooks/）
// useUser.ts
import { useState, useEffect } from 'react';

export function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchUser(id)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { user, loading, error };
}

// 使用例
function UserProfile({ id }: { id: string }) {
  const { user, loading, error } = useUser(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{user?.name}</div>;
}
```

### イベントハンドラ

```typescript
// ✅ Good: イベントハンドラの型定義
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log(event.currentTarget);
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // ...
};

// ✅ Good: 汎用的なイベントハンドラ
const handleClick = useCallback(() => {
  // イベントオブジェクトが不要な場合
  doSomething();
}, []);
```

### 条件付きレンダリング

```typescript
// ✅ Good: 早期リターン
function UserProfile({ user }: { user: User | null }) {
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// ✅ Good: 三項演算子（シンプルな場合）
<div>{isLoading ? <Spinner /> : <Content />}</div>

// ✅ Good: && 演算子（条件付き表示）
<div>{error && <ErrorMessage error={error} />}</div>

// ❌ Bad: ネストの深い条件分岐
<div>
  {isLoading ? (
    <Spinner />
  ) : error ? (
    <Error />
  ) : data ? (
    <Content data={data} />
  ) : (
    <Empty />
  )}
</div>

// ✅ Good: 早期リターンで分離
if (isLoading) return <Spinner />;
if (error) return <Error />;
if (!data) return <Empty />;
return <Content data={data} />;
```

### リストのレンダリング

```typescript
// ✅ Good: keyに一意な値を使用
<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>

// ❌ Bad: インデックスをkeyに使用（並び順が変わる場合）
<ul>
  {users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ))}
</ul>

// ⚠️ 許容: 並び順が変わらない静的リストのみ
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
<ul>
  {DAYS.map((day, index) => (
    <li key={index}>{day}</li>
  ))}
</ul>
```

## パフォーマンス最適化

### React.memo
```typescript
// ✅ Good: 重いコンポーネントをメモ化
import { memo } from 'react';

const HeavyComponent = memo(function HeavyComponent({ data }: Props) {
  // 重い処理
  return <div>{/* ... */}</div>;
});

// ✅ Good: カスタム比較関数
const UserCard = memo(
  function UserCard({ user }: { user: User }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id;
  }
);
```

### 動的インポート
```typescript
// ✅ Good: 重いコンポーネントの遅延ロード
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // SSR無効化
});

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />
    </div>
  );
}
```

### 画像最適化
```typescript
// ✅ Good: next/image を使用
import Image from 'next/image';

<Image
  src='/profile.jpg'
  alt='Profile'
  width={200}
  height={200}
  priority // LCP画像の場合
/>

// ❌ Bad: img タグの使用
<img src='/profile.jpg' alt='Profile' />
```

## Material-UI の使用

### コンポーネントのインポート
```typescript
// ✅ Good: 個別インポート
import { Button, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// ❌ Bad: デフォルトインポート（バンドルサイズ増加）
import Button from '@mui/material/Button';
```

### スタイリング
```typescript
// ✅ Good: sx prop（推奨）
<Box
  sx={{
    padding: 2,
    backgroundColor: 'primary.main',
    '&:hover': {
      backgroundColor: 'primary.dark',
    },
  }}
>
  Content
</Box>

// ✅ Good: styled components（再利用する場合）
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
```

## 禁止事項・推奨事項

### 絶対禁止
- ❌ `any` 型の Props
- ❌ `useEffect` の依存配列省略
- ❌ インデックスをkeyに使用（動的リスト）
- ❌ `dangerouslySetInnerHTML` の無制限使用

### 推奨しない
- ⚠️ クラスコンポーネント（関数コンポーネントを使用）
- ⚠️ Pages Router（App Routerを使用）
- ⚠️ getServerSideProps（Server Componentを使用）
- ⚠️ useContext の乱用（パフォーマンス問題の原因）

## 参考資料

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
