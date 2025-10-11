# 命名規則

このドキュメントはプロジェクト全体の命名規則を定義します。

## 基本原則

### 命名の目的
- **可読性**: 名前から役割・目的が即座に理解できる
- **一貫性**: プロジェクト全体で統一されたルール
- **保守性**: 変更・拡張が容易

### 命名のガイドライン
- **明確性**: 曖昧な名前を避ける（`data`, `temp`, `x` 等）
- **簡潔性**: 長すぎる名前を避ける（目安: 3単語以内）
- **英語**: すべて英語で命名（ローマ字禁止）
- **略語**: 一般的な略語のみ使用（`btn` → `button`）

## ケーススタイル

### TypeScript / JavaScript

#### 変数・関数: camelCase
```typescript
// ✅ Good
const userName = 'Alice';
const isActive = true;
const totalCount = 100;

function getUserProfile() { }
function fetchAchievementList() { }

// ❌ Bad
const user_name = 'Alice';      // snake_case
const UserName = 'Alice';       // PascalCase
const total_count = 100;        // snake_case
```

#### 定数: UPPER_SNAKE_CASE（グローバル定数のみ）
```typescript
// ✅ Good: グローバル定数
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_COUNT = 3;
const DEFAULT_TIMEOUT = 5000;

// ✅ Good: 定数オブジェクト
const ROUTES = {
  HOME: '/',
  ACHIEVEMENTS: '/achievements',
} as const;

// ❌ Bad: ローカル変数
function calculate() {
  const MAX_VALUE = 100; // ローカルなら maxValue
  return MAX_VALUE * 2;
}

// ✅ Good: ローカル定数
function calculate() {
  const maxValue = 100;
  return maxValue * 2;
}
```

#### クラス・インターフェース・型: PascalCase
```typescript
// ✅ Good
class UserProfile { }
interface User { }
type UserRole = 'admin' | 'user';

// ❌ Bad
class userProfile { }       // camelCase
interface user { }          // camelCase
type user_role = string;    // snake_case
```

#### 型パラメータ（ジェネリクス）: 1文字の大文字 または PascalCase
```typescript
// ✅ Good: 1文字
function identity<T>(value: T): T {
  return value;
}

// ✅ Good: 複数の型パラメータ
function map<T, U>(items: T[], fn: (item: T) => U): U[] {
  return items.map(fn);
}

// ✅ Good: 説明的な名前（複雑な場合）
function fetchData<TData, TError = Error>(
  url: string
): Promise<TData> {
  // ...
}

// ❌ Bad: 小文字
function identity<t>(value: t): t { }
```

#### プライベートフィールド: `_` プレフィックス（オプション）
```typescript
// ✅ Good: TypeScript の private キーワード
class User {
  private id: string;
  private name: string;
}

// ✅ 許容: アンダースコアプレフィックス
class User {
  private _id: string;
  private _name: string;
}

// ✅ Good: # プライベートフィールド（ECMAScript）
class User {
  #id: string;
  #name: string;
}
```

### React コンポーネント

#### コンポーネント名: PascalCase
```typescript
// ✅ Good
export const Button = () => { };
export const UserProfile = () => { };
export const AchievementCard = () => { };

// ❌ Bad
export const button = () => { };      // camelCase
export const user_profile = () => { }; // snake_case
```

#### Props の型名: `{ComponentName}Props`
```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// ❌ Bad
interface ButtonProperties { }  // 長すぎる
interface IButtonProps { }      // I プレフィックス不要
```

#### イベントハンドラ: `handle{EventName}`
```typescript
// ✅ Good
const handleClick = () => { };
const handleSubmit = () => { };
const handleChange = (e: ChangeEvent) => { };

// ❌ Bad
const onClick = () => { };       // Props と混同
const clickHandler = () => { };  // 語順が逆
const click = () => { };         // 曖昧
```

#### カスタムフック: `use{HookName}`
```typescript
// ✅ Good
function useUser(id: string) { }
function useWindowSize() { }
function useLocalStorage(key: string) { }

// ❌ Bad
function getUser(id: string) { }     // use プレフィックスなし
function userHook(id: string) { }    // Hook サフィックス不要
```

### SCSS

#### クラス名: snake_case（必須）
```scss
// ✅ Good: Stylelint で強制
.button_primary { }
.card_header { }
.user_profile_image { }

// ❌ Bad: エラーになる
.buttonPrimary { }   // camelCase
.button-primary { }  // kebab-case
.ButtonPrimary { }   // PascalCase
```

#### BEM ベース（スネークケース版）
```scss
// Block
.card { }

// Element: Block_Element
.card_header { }
.card_body { }
.card_footer { }

// Modifier: Block__Modifier
.card__primary { }
.card__large { }

// Element + Modifier
.card_header__large { }
```

#### 変数: `$snake_case`
```scss
// ✅ Good
$color_primary: #1976d2;
$size_md: 16px;
$breakpoint_sm: 600px;

// ❌ Bad
$colorPrimary: #1976d2;   // camelCase
$color-primary: #1976d2;  // kebab-case
```

#### Mixin: `snake_case`
```scss
// ✅ Good
@mixin media_sm { }
@mixin button_base { }

// ❌ Bad
@mixin mediaSm { }        // camelCase
@mixin media-sm { }       // kebab-case
```

## ファイル・ディレクトリ命名

### コンポーネントディレクトリ: PascalCase
```
components/
├── Button/
├── UserProfile/
└── AchievementCard/
```

### 機能ディレクトリ: PascalCase
```
features/
├── Profile/
├── BreadcrumbsList/
└── Ui/
```

### その他のディレクトリ: camelCase
```
src/
├── functions/
├── utils/
├── lib/
└── styles/
```

### ファイル名

#### コンポーネントファイル: PascalCase
```
Button/
├── index.tsx              # エントリーポイント
├── Button.tsx             # コンポーネント本体（オプション）
└── types.ts               # 型定義
```

#### 関数・ユーティリティ: camelCase
```
utils/
├── formatDate.ts
├── validateEmail.ts
└── copyToClipboard.ts
```

#### Next.js 特殊ファイル: 小文字
```
app/
├── page.tsx               # Next.js の規約
├── layout.tsx
├── loading.tsx
├── error.tsx
└── not-found.tsx
```

#### テストファイル: `{FileName}.spec.ts`
```
tests/
├── codeView.spec.ts
└── profile.spec.ts
```

#### SCSS ファイル: `_{snake_case}.scss`
```
styles/
├── foundation/
│   └── _variables.scss
├── components/
│   └── button/
│       └── _default.scss
└── layout/
    └── _header.scss
```

## 変数・関数の命名パターン

### Boolean 型: `is/has/should/can` プレフィックス
```typescript
// ✅ Good
const isActive = true;
const hasPermission = false;
const shouldRender = true;
const canEdit = false;

// ❌ Bad
const active = true;           // 型が不明
const permission = false;      // 曖昧
const render = true;           // 動詞と混同
```

### 配列: 複数形
```typescript
// ✅ Good
const users = [user1, user2];
const items = [item1, item2];
const achievements = [achievement1, achievement2];

// ❌ Bad
const userList = [user1, user2];  // List サフィックス不要
const user = [user1, user2];      // 単数形
```

### 関数: 動詞 + 名詞
```typescript
// ✅ Good
function getUser() { }
function fetchProfile() { }
function createAchievement() { }
function deleteItem() { }
function validateEmail() { }
function formatDate() { }

// ❌ Bad
function user() { }           // 動詞なし
function data() { }           // 曖昧
function achievement() { }    // 動詞なし
```

### 動詞の使い分け

```typescript
// get: 同期的な取得（即座に返る）
function getUser(): User { }
function getUserName(): string { }

// fetch: 非同期な取得（API呼び出し等）
async function fetchUser(): Promise<User> { }
async function fetchAchievements(): Promise<Achievement[]> { }

// find: 検索・フィルタリング
function findUserById(id: string): User | undefined { }
function findAchievements(filter: Filter): Achievement[] { }

// create: 新規作成
function createUser(data: UserData): User { }
async function createAchievement(data: AchievementData): Promise<Achievement> { }

// update: 更新
function updateUser(id: string, data: Partial<User>): User { }
async function updateProfile(data: ProfileData): Promise<void> { }

// delete/remove: 削除
function deleteUser(id: string): void { }
function removeItem(item: Item): void { }

// validate: バリデーション
function validateEmail(email: string): boolean { }
function validateForm(data: FormData): ValidationResult { }

// format: フォーマット
function formatDate(date: Date): string { }
function formatCurrency(amount: number): string { }

// handle: イベントハンドラ
function handleClick(): void { }
function handleSubmit(event: FormEvent): void { }
```

### オブジェクト・レコード: 意味のある名前
```typescript
// ✅ Good
const userMap = new Map<string, User>();
const settingsConfig = { theme: 'dark' };
const errorMessages = {
  required: '必須項目です',
  invalid: '不正な値です',
};

// ❌ Bad
const map = new Map();        // 曖昧
const obj = {};               // 曖昧
const data = {};              // 曖昧
```

## 型定義の命名

### Interface: 説明的な名前
```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
}

interface UserProfile extends User {
  bio: string;
  avatar: string;
}

// ❌ Bad
interface IUser { }           // I プレフィックス不要（TypeScript）
interface UserInterface { }   // Interface サフィックス不要
```

### Type Alias: 用途に応じた名前
```typescript
// ✅ Good
type UserId = string;
type UserRole = 'admin' | 'user' | 'guest';
type ApiResponse<T> = { data: T; status: number };

// ❌ Bad
type UserType = { };          // Type サフィックス不要
type TUser = { };             // T プレフィックス不要
```

### Enum: 避ける（Union Type を推奨）
```typescript
// ❌ 推奨しない: Enum
enum Status {
  Pending = 'PENDING',
  Active = 'ACTIVE',
}

// ✅ Good: Union Type + const object
type Status = 'pending' | 'active';
const STATUS = {
  PENDING: 'pending',
  ACTIVE: 'active',
} as const;
```

## API・ルート命名

### API Routes: RESTful
```
GET    /api/profile/achievement       # 一覧取得
GET    /api/profile/achievement/:id   # 詳細取得
POST   /api/profile/achievement       # 新規作成
PUT    /api/profile/achievement/:id   # 更新
DELETE /api/profile/achievement/:id   # 削除
```

### ページルート: kebab-case（URL）
```
/                          # トップページ
/achievements              # 実績一覧
/achievements/:id          # 実績詳細
/user-profile              # ユーザープロフィール
```

## 禁止事項

### 絶対禁止
- ❌ ローマ字の使用（`namae`, `jikkou`）
- ❌ 1文字変数（`x`, `y`, `a`）※ループカウンタ・座標以外
- ❌ 曖昧な名前（`data`, `temp`, `info`, `obj`）
- ❌ Hungarian Notation（`strName`, `arrUsers`）

### 推奨しない
- ⚠️ 過度な略語（`btn` → `button`, `usr` → `user`）
- ⚠️ 長すぎる名前（4単語以上）
- ⚠️ 数字のサフィックス（`user1`, `user2`）
- ⚠️ 否定形の Boolean（`isNotActive` → `isActive`）

## 一般的な略語（許容）

```typescript
// ✅ 許容される略語
const id = 'user-123';           // identifier
const url = 'https://...';       // uniform resource locator
const api = '/api/users';        // application programming interface
const ref = useRef(null);        // reference
const props = { };               // properties
const args = [1, 2, 3];          // arguments
const params = { id: 1 };        // parameters
const config = { };              // configuration
const env = process.env;         // environment
const ctx = useContext();        // context
const err = new Error();         // error
const msg = 'Hello';             // message
const src = '/images/logo.png';  // source
const dest = '/output';          // destination
const prev = 10;                 // previous
const curr = 20;                 // current
const max = 100;                 // maximum
const min = 0;                   // minimum
const temp = celsius * 9/5 + 32; // temperature（一時変数ではない）
```

## 例外ケース

### ループカウンタ: 1文字変数（許容）
```typescript
// ✅ 許容
for (let i = 0; i < 10; i++) { }
for (let j = 0; j < 5; j++) { }

// 座標
const x = 100;
const y = 200;
```

### コールバック引数: 短縮形（許容）
```typescript
// ✅ 許容
users.map(u => u.name);
items.filter(i => i.isActive);

// ✅ Good: 複雑な場合は説明的に
users.map(user => ({
  id: user.id,
  displayName: user.name,
}));
```

## チェックリスト

新しい名前を付ける際の確認事項：

- [ ] 適切なケーススタイルか？（camelCase/PascalCase/snake_case）
- [ ] 役割・目的が明確か？
- [ ] 英語で統一されているか？
- [ ] 略語は一般的なものか？
- [ ] プロジェクト内で一貫しているか？
- [ ] Boolean は `is/has/should/can` で始まるか？
- [ ] 関数は動詞で始まるか？
- [ ] 配列は複数形か？

## 参考資料

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
