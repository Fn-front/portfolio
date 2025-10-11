# コーディング規約

このドキュメントはプロジェクト全体に適用される基本的なコーディング規約を定義します。

## 基本原則

### コード品質の優先順位
1. **可読性**: 次の開発者が即座に理解できるコード
2. **保守性**: 変更・拡張が容易なコード
3. **一貫性**: プロジェクト全体で統一されたスタイル
4. **シンプルさ**: 必要最小限の複雑さ

### コーディング哲学
- **KISS原則**: Keep It Simple, Stupid
- **DRY原則**: Don't Repeat Yourself
- **YAGNI原則**: You Aren't Gonna Need It
- **ボーイスカウト・ルール**: コードを触ったら、来た時よりきれいにする

## コードフォーマット

### インデント・スペース
- **インデント**: 2スペース（タブ禁止）
- **改行コード**: LF（Unix形式）
- **行幅**: 80文字を推奨（最大100文字まで許容）
- **ファイル末尾**: 必ず改行を入れる

### 引用符
- **JavaScript/TypeScript**: シングルクォート `'` を使用
- **JSX**: シングルクォート `'` を使用
- **SCSS**: シングルクォート `'` を使用

```typescript
// ✅ Good
const message = 'Hello, World';
const element = <div className='container'>Content</div>;

// ❌ Bad
const message = "Hello, World";
const element = <div className="container">Content</div>;
```

### セミコロン
- **必須**: すべての文の終わりにセミコロンを付ける

```typescript
// ✅ Good
const name = 'Alice';
console.log(name);

// ❌ Bad
const name = 'Alice'
console.log(name)
```

### 括弧・スペース
- **オブジェクト**: `{ }` の内側にスペース
- **配列**: `[ ]` の内側にスペース不要
- **関数引数**: `( )` の内側にスペース不要
- **if/for/while**: キーワードと括弧の間にスペース

```typescript
// ✅ Good
const obj = { name: 'Alice', age: 30 };
const arr = [1, 2, 3];
function greet(name: string) { }
if (condition) { }

// ❌ Bad
const obj = {name: 'Alice', age: 30};
const arr = [ 1, 2, 3 ];
function greet( name: string ) { }
if(condition) { }
```

## コメント

### コメントの原則
- **なぜ（Why）を説明**: 何（What）はコードが語る
- **複雑なロジック**: 必ずコメントで説明
- **TODO/FIXME**: 課題追跡システムと連携

### コメントスタイル
```typescript
// ✅ Good: 理由を説明
// レート制限を回避するため、リトライ間隔を指数的に増加
const retryDelay = baseDelay * Math.pow(2, attemptCount);

// ❌ Bad: コードの繰り返し
// retryDelayを計算
const retryDelay = baseDelay * Math.pow(2, attemptCount);
```

### JSDocコメント
- **エクスポート関数**: JSDocを必須
- **複雑な型**: 説明を追加

```typescript
/**
 * ユーザーのプロフィール情報を取得
 * @param userId - ユーザーID
 * @returns プロフィール情報、エラー時はnull
 * @throws {NotFoundError} ユーザーが存在しない場合
 */
export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  // ...
}
```

## エラーハンドリング

### 基本方針
- **早期リターン**: ネストを避けるためガード節を使用
- **具体的なエラーメッセージ**: 問題の特定が容易に
- **エラーの伝播**: 適切なレベルでキャッチ

```typescript
// ✅ Good: 早期リターン
function processUser(user: User | null) {
  if (!user) {
    throw new Error('User not found');
  }

  if (!user.isActive) {
    throw new Error('User is not active');
  }

  // メイン処理
  return user.profile;
}

// ❌ Bad: ネストが深い
function processUser(user: User | null) {
  if (user) {
    if (user.isActive) {
      return user.profile;
    } else {
      throw new Error('User is not active');
    }
  } else {
    throw new Error('User not found');
  }
}
```

## 依存関係管理

### インポート順序
1. 外部ライブラリ（React, Next.js等）
2. プロジェクト内の絶対パス（@/から始まる）
3. 相対パス
4. 型定義インポート
5. スタイル

```typescript
// ✅ Good
import React from 'react';
import { Box } from '@mui/material';

import { Profile } from '@/features/Profile';
import { Button } from '@/components/Ui/Button';

import { formatDate } from './utils';

import type { User } from '@/functions/types/user';

import styles from './styles.module.scss';
```

### 不要な依存の禁止
- **最小限の依存**: 本当に必要なライブラリのみ追加
- **軽量な代替**: 大きなライブラリより軽量な選択肢を優先
- **標準APIの活用**: ブラウザ標準APIで対応可能なら使用

## パフォーマンス

### 基本指針
- **不要な再レンダリング防止**: React.memo, useMemo, useCallback の適切な使用
- **遅延ロード**: 大きなコンポーネントは動的インポート
- **画像最適化**: Next.js の Image コンポーネント使用

```typescript
// ✅ Good: 動的インポート
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <Skeleton />,
  ssr: false,
});

// ✅ Good: メモ化
const MemoizedList = React.memo(UserList);
```

## セキュリティ

### 基本原則
- **XSS対策**: ユーザー入力は必ずエスケープ
- **CSRF対策**: Next.js の標準機能を活用
- **環境変数**: 秘匿情報はコミット禁止

```typescript
// ✅ Good: エスケープ処理
<div>{escapeHtml(userInput)}</div>

// ❌ Bad: 生のHTML挿入
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

## 禁止事項

### 絶対禁止
- ❌ `var` の使用（`const` / `let` を使用）
- ❌ `any` 型の濫用（適切な型定義を使用）
- ❌ `console.log` の本番コードへの残存（デバッグ後は削除）
- ❌ ハードコードされた秘匿情報
- ❌ コメントアウトされたコード（削除すること）

### 推奨しない
- ⚠️ 過度なネスト（3階層以上）
- ⚠️ 100行を超える関数
- ⚠️ マジックナンバー（定数化すること）
- ⚠️ グローバル変数の使用

## コードレビュー観点

### 必須チェック項目
- [ ] Prettier/ESLint/Stylelintの警告がゼロ
- [ ] 型エラーがない
- [ ] テストが通る
- [ ] 不要なコメントアウトコードがない
- [ ] console.log等のデバッグコードがない
- [ ] 適切なエラーハンドリングがある
- [ ] パフォーマンスへの配慮がある

## ツール設定の遵守

### 必須ツール
- **ESLint**: `.eslintrc.json` の設定に従う
- **Prettier**: `.prettierrc` の設定に従う
- **Stylelint**: `.stylelintrc.json` の設定に従う
- **TypeScript**: `tsconfig.json` の設定に従う

### 実行タイミング
- **保存時**: 自動フォーマット推奨
- **コミット前**: `npm run lint` 実行必須
- **プッシュ前**: `npm run build` 成功確認

## 参考資料

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Next.js Best Practices](https://nextjs.org/docs)
