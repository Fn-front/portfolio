# TypeScript 規約

このドキュメントは TypeScript コーディングの詳細規約を定義します。

## 基本設定

### tsconfig.json
プロジェクトの TypeScript 設定は以下の通り：

```json
{
  "compilerOptions": {
    "strict": true,              // 厳格モード有効
    "noEmit": true,              // コンパイル出力なし（Next.jsが処理）
    "jsx": "preserve",           // JSXをそのまま保持
    "moduleResolution": "bundler"
  }
}
```

### Path Alias
- `@/*` → `src/*`
- `@/public/*` → `public/*`

```typescript
// ✅ Good: Path Aliasを使用
import { Button } from '@/components/Ui/Button';
import logo from '@/public/images/logo.png';

// ❌ Bad: 相対パスの多用
import { Button } from '../../../components/Ui/Button';
```

## 型定義

### 型の優先順位
1. **interface**: オブジェクト型の基本
2. **type**: ユニオン、インターセクション、複雑な型
3. **enum**: 定数の集合（使用は最小限に）

### interface vs type

```typescript
// ✅ Good: オブジェクト型にはinterfaceを使用
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Good: ユニオン型にはtypeを使用
type Status = 'pending' | 'active' | 'inactive';

// ✅ Good: 複雑な型定義
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// ❌ Bad: オブジェクト型にtypeを使用（interfaceが適切）
type User = {
  id: string;
  name: string;
};
```

### 型の拡張

```typescript
// ✅ Good: interfaceの継承
interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface User extends BaseEntity {
  name: string;
  email: string;
}

// ✅ Good: typeのインターセクション
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type User = BaseEntity & Timestamped & {
  name: string;
};
```

### 型のエクスポート

```typescript
// ✅ Good: 型定義ファイルでまとめて管理
// src/functions/types/user.ts
export interface User {
  id: string;
  name: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

// ✅ Good: 型のみのインポート
import type { User, UserRole } from '@/functions/types/user';
```

## any型の使用制限

### 原則
- **any型は原則禁止**
- やむを得ない場合のみ、理由をコメントで明記

### 代替案

```typescript
// ❌ Bad: any型の使用
function processData(data: any) {
  return data.value;
}

// ✅ Good: unknown型 + 型ガード
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return data.value;
  }
  throw new Error('Invalid data');
}

// ✅ Good: ジェネリクス
function processData<T>(data: T): T {
  return data;
}

// ⚠️ 許容: 外部ライブラリの型定義がない場合のみ
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const legacyLib: any = require('legacy-library');
```

## 型ガード

### カスタム型ガード

```typescript
// ✅ Good: 型ガード関数
interface User {
  id: string;
  name: string;
}

function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    typeof value.id === 'string' &&
    typeof value.name === 'string'
  );
}

// 使用例
function processUser(data: unknown) {
  if (isUser(data)) {
    // この中ではdataはUser型として扱える
    console.log(data.name);
  }
}
```

### in演算子による型絞り込み

```typescript
type Cat = { meow: () => void };
type Dog = { bark: () => void };
type Animal = Cat | Dog;

function makeSound(animal: Animal) {
  if ('meow' in animal) {
    animal.meow(); // Cat型として扱える
  } else {
    animal.bark(); // Dog型として扱える
  }
}
```

## Nullable型の扱い

### null vs undefined
- **undefined**: 値が設定されていない状態
- **null**: 明示的に値がない状態

```typescript
// ✅ Good: undefinedを使用（デフォルト引数と相性が良い）
interface User {
  id: string;
  name: string;
  bio?: string; // string | undefined
}

function greet(name: string, title?: string) {
  // titleが未指定の場合、undefinedが渡される
  return title ? `${title} ${name}` : name;
}

// ⚠️ 注意: nullは明示的に「値がない」ことを示す場合のみ
interface ApiResponse {
  data: User | null; // APIから明示的にnullが返る
}
```

### Optional Chaining と Nullish Coalescing

```typescript
// ✅ Good: Optional Chaining
const userName = user?.profile?.name;

// ✅ Good: Nullish Coalescing
const displayName = userName ?? 'Anonymous';

// ❌ Bad: 従来の方法
const userName = user && user.profile && user.profile.name;
const displayName = userName || 'Anonymous'; // ''や0もfalsyとして扱われる
```

## ジェネリクス

### 基本的な使い方

```typescript
// ✅ Good: ジェネリクス関数
function identity<T>(value: T): T {
  return value;
}

// ✅ Good: ジェネリクスインターフェース
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 使用例
const userResponse: ApiResponse<User> = {
  data: { id: '1', name: 'Alice' },
  status: 200,
  message: 'Success',
};
```

### 制約付きジェネリクス

```typescript
// ✅ Good: extends で型制約
interface HasId {
  id: string;
}

function findById<T extends HasId>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// ✅ Good: keyof で型安全なプロパティアクセス
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### ジェネリクスのデフォルト型

```typescript
// ✅ Good: デフォルト型パラメータ
interface Response<T = unknown> {
  data: T;
  status: number;
}

// 型引数省略時はunknownが使われる
const response: Response = {
  data: {},
  status: 200,
};
```

## ユーティリティ型

### 組み込みユーティリティ型の活用

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// ✅ Partial: すべてのプロパティをオプショナルに
type PartialUser = Partial<User>;

// ✅ Pick: 特定のプロパティのみ抽出
type UserPreview = Pick<User, 'id' | 'name'>;

// ✅ Omit: 特定のプロパティを除外
type SafeUser = Omit<User, 'password'>;

// ✅ Required: すべてのプロパティを必須に
type RequiredUser = Required<PartialUser>;

// ✅ Readonly: すべてのプロパティを読み取り専用に
type ImmutableUser = Readonly<User>;

// ✅ Record: キーと値の型を指定したオブジェクト
type UserMap = Record<string, User>;
```

### カスタムユーティリティ型

```typescript
// ✅ Good: DeepPartial（ネストしたオブジェクトも部分的に）
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ✅ Good: NonNullableFields（nullableフィールドを除外）
type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
```

## 関数の型定義

### 関数型の定義

```typescript
// ✅ Good: 関数型エイリアス
type ClickHandler = (event: MouseEvent) => void;
type Validator<T> = (value: T) => boolean;

// ✅ Good: インターフェースで関数型
interface Formatter {
  (value: string): string;
}

// 使用例
const onClick: ClickHandler = (event) => {
  console.log(event.target);
};
```

### 非同期関数

```typescript
// ✅ Good: async関数の戻り値はPromise
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// ✅ Good: Promise型の明示
function fetchUserData(id: string): Promise<User> {
  return fetch(`/api/users/${id}`).then(res => res.json());
}
```

### オーバーロード

```typescript
// ✅ Good: 関数オーバーロード
function createElement(tag: 'div'): HTMLDivElement;
function createElement(tag: 'span'): HTMLSpanElement;
function createElement(tag: string): HTMLElement;
function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

// 使用時に型が推論される
const div = createElement('div'); // HTMLDivElement
const span = createElement('span'); // HTMLSpanElement
```

## 型アサーション

### 型アサーションの使い方

```typescript
// ✅ Good: as を使用（推奨）
const input = document.querySelector('input') as HTMLInputElement;

// ⚠️ 許容: <> 構文（JSXと競合するため as が推奨）
const input = <HTMLInputElement>document.querySelector('input');

// ❌ Bad: 二重アサーション（極力避ける）
const value = (input as unknown) as string;
```

### const アサーション

```typescript
// ✅ Good: const アサーションでリテラル型を保持
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;

// config.apiUrl は string ではなく 'https://api.example.com' 型

// ✅ Good: 配列をタプル型に
const tuple = [1, 'hello', true] as const;
// tuple は readonly [1, 'hello', true] 型
```

## strictモードの遵守

### 厳格な型チェック
プロジェクトでは `strict: true` を設定しており、以下が強制されます：

- `strictNullChecks`: null/undefinedの明示的な扱い
- `strictFunctionTypes`: 関数型の厳密なチェック
- `strictBindCallApply`: bind/call/applyの型チェック
- `strictPropertyInitialization`: クラスプロパティの初期化チェック
- `noImplicitAny`: 暗黙のany型を禁止
- `noImplicitThis`: thisの型が不明な場合エラー

```typescript
// ✅ Good: strictNullChecks対応
function greet(name: string | null) {
  if (name === null) {
    return 'Hello, Guest';
  }
  return `Hello, ${name}`;
}

// ❌ Bad: nullチェックなし
function greet(name: string | null) {
  return `Hello, ${name.toUpperCase()}`; // エラー: nameがnullの可能性
}
```

## 型定義ファイルの配置

### ファイル構成
- **プロジェクト共通の型**: `src/functions/types/`
- **コンポーネント固有の型**: コンポーネントと同じディレクトリ
- **グローバル型拡張**: `src/types/global.d.ts`

```
src/
├── functions/
│   └── types/
│       ├── user.ts       # ユーザー関連の型
│       ├── achievement.ts # 実績関連の型
│       └── api.ts        # API関連の型
├── components/
│   └── Ui/
│       └── Button/
│           ├── index.tsx
│           └── types.ts  # Button固有の型
└── types/
    └── global.d.ts       # グローバル型拡張
```

### 型定義ファイルの例

```typescript
// src/functions/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

export interface UserWithRole extends User {
  role: UserRole;
}
```

## 禁止事項

### 絶対禁止
- ❌ `any` 型の濫用
- ❌ `@ts-ignore` の使用（`@ts-expect-error` のみ許可）
- ❌ 型アサーションの乱用
- ❌ `Function` 型の使用（具体的な関数型を定義）

### 推奨しない
- ⚠️ `enum` の使用（Union Typeを推奨）
- ⚠️ `namespace` の使用（ES Modulesを推奨）
- ⚠️ 過度に複雑な型定義（可読性を優先）

```typescript
// ❌ Bad: enumの使用
enum Status {
  Pending = 'PENDING',
  Active = 'ACTIVE',
}

// ✅ Good: Union Typeの使用
type Status = 'pending' | 'active';
const STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
} as const;
```

## 参考資料

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Effective TypeScript](https://effectivetypescript.com/)
