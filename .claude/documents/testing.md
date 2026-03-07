# テスト規約

このドキュメントはテストに関する規約を定義します。

## テスト戦略

### テストピラミッド

```
        /\
       /E2E\          少ない（重要なフロー）
      /------\
     /Integration\    中程度（コンポーネント間）
    /------------\
   /   Unit Tests  \  多い（ロジック・関数）
  /----------------\
```

このプロジェクトでは以下のテストを実施：

1. **E2Eテスト**: Playwright（重要な画面遷移・機能）
2. **スナップショットテスト**: Playwright（ビジュアルリグレッション）
3. **単体テスト**: （将来的に Jest 導入予定）

## Playwright E2Eテスト

### プロジェクト設定

```typescript
// playwright.config.ts
export default defineConfig({
  testDir: process.env.APP_ENV,      // 環境変数でテストディレクトリ指定
  fullyParallel: true,               // 並列実行
  retries: process.env.CI ? 2 : 0,   // CI環境ではリトライ
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  webServer: {
    command: 'npm run dev',
    port: 2937,                       // 開発サーバーポート
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```

### テストコマンド

```bash
# E2Eテスト実行 + レポート表示
npm run e2e

# CI環境向け実行
npm run e2e:actions

# スナップショットテスト
npm run snapshot
```

### テストディレクトリ構成

```
src/
├── tests/                  # E2Eテスト
│   └── codeView.spec.ts
└── snapshot/               # スナップショットテスト
    └── snapshot.spec.ts
```

### テストファイル命名規則

- **E2Eテスト**: `{機能名}.spec.ts`（例: `codeView.spec.ts`）
- **スナップショット**: `snapshot.spec.ts`

## E2Eテストの書き方

### 基本構造

```typescript
import { test, expect } from '@playwright/test';

test.describe('機能名', () => {
  test.beforeEach(async ({ page }) => {
    // 各テスト実行前の準備
    await page.goto('/');
  });

  test('テストケースの説明', async ({ page }) => {
    // Arrange: テストデータの準備

    // Act: 操作の実行
    await page.click('button');

    // Assert: 結果の検証
    await expect(page.locator('h1')).toHaveText('Expected Text');
  });
});
```

### セレクタの優先順位

Playwright では以下の優先順で要素を特定：

```typescript
// 1. ✅ Best: role + name（アクセシビリティ対応）
await page.getByRole('button', { name: '送信' });
await page.getByRole('heading', { name: 'タイトル' });

// 2. ✅ Good: label（フォーム要素）
await page.getByLabel('メールアドレス');

// 3. ✅ Good: placeholder（入力フィールド）
await page.getByPlaceholder('名前を入力');

// 4. ✅ Good: text（テキストコンテンツ）
await page.getByText('詳細を見る');

// 5. ⚠️ 許容: test-id（最後の手段）
await page.getByTestId('user-profile');

// 6. ❌ Bad: CSS セレクタ（変更に弱い）
await page.locator('.button.button_primary');

// 7. ❌ Bad: XPath（可読性が低い）
await page.locator('//div[@class="container"]/button');
```

### ページオブジェクトモデル

複雑なページは Page Object Pattern を使用：

```typescript
// pages/ProfilePage.ts
import { Page } from '@playwright/test';

export class ProfilePage {
  constructor(private page: Page) {}

  // セレクタをメソッド化
  async goto() {
    await this.page.goto('/profile');
  }

  async fillName(name: string) {
    await this.page.getByLabel('名前').fill(name);
  }

  async clickSaveButton() {
    await this.page.getByRole('button', { name: '保存' }).click();
  }

  async getSuccessMessage() {
    return this.page.getByText('保存しました').textContent();
  }
}

// tests/profile.spec.ts
import { test, expect } from '@playwright/test';
import { ProfilePage } from '../pages/ProfilePage';

test('プロフィール編集', async ({ page }) => {
  const profilePage = new ProfilePage(page);

  await profilePage.goto();
  await profilePage.fillName('Alice');
  await profilePage.clickSaveButton();

  const message = await profilePage.getSuccessMessage();
  expect(message).toBe('保存しました');
});
```

### 非同期処理の待機

```typescript
// ✅ Good: 自動待機（Playwright が要素を待つ）
await page.click('button');
await expect(page.locator('h1')).toHaveText('Title');

// ✅ Good: 明示的な待機（特定の状態を待つ）
await page.waitForSelector('.loading', { state: 'hidden' });
await page.waitForLoadState('networkidle');

// ⚠️ 避ける: 固定時間の待機（不安定になる）
await page.waitForTimeout(3000); // 最後の手段のみ
```

### アサーション

```typescript
// ✅ Good: expect() で検証
await expect(page.locator('h1')).toHaveText('Expected Text');
await expect(page.locator('button')).toBeVisible();
await expect(page.locator('input')).toHaveValue('test');
await expect(page.locator('.error')).toBeHidden();

// ✅ Good: カスタムメッセージ
await expect(page.locator('h1'), 'タイトルが表示されること').toHaveText('Title');

// ✅ Good: ソフトアサーション（失敗しても続行）
await expect.soft(page.locator('h1')).toHaveText('Title');
await expect.soft(page.locator('p')).toHaveText('Description');
```

## スナップショットテスト

### ビジュアルリグレッションテスト

```typescript
import { test, expect } from '@playwright/test';

test('ホームページのスナップショット', async ({ page }) => {
  await page.goto('/');

  // スクリーンショット比較
  await expect(page).toHaveScreenshot('home.png', {
    fullPage: true,           // ページ全体をキャプチャ
    animations: 'disabled',   // アニメーションを無効化
  });
});

test('特定要素のスナップショット', async ({ page }) => {
  await page.goto('/profile');

  const card = page.locator('.card_profile');
  await expect(card).toHaveScreenshot('profile-card.png');
});
```

### スナップショット更新

```bash
# スナップショットを更新
npx playwright test --update-snapshots
```

## テストのベストプラクティス

### 1. 独立性を保つ

```typescript
// ✅ Good: 各テストが独立
test('テスト1', async ({ page }) => {
  await page.goto('/');
  // テスト1の処理
});

test('テスト2', async ({ page }) => {
  await page.goto('/');
  // テスト2の処理（テスト1に依存しない）
});

// ❌ Bad: テスト間で状態を共有
let userId: string;

test('ユーザー作成', async ({ page }) => {
  userId = await createUser(); // 次のテストで使用
});

test('ユーザー削除', async ({ page }) => {
  await deleteUser(userId); // テスト1に依存
});
```

### 2. データのセットアップ

```typescript
// ✅ Good: beforeEach でセットアップ
test.describe('プロフィール編集', () => {
  test.beforeEach(async ({ page }) => {
    // テストデータの準備
    await page.goto('/profile');
    await page.evaluate(() => {
      localStorage.setItem('user', JSON.stringify({ id: '1', name: 'Test' }));
    });
  });

  test('名前を変更できる', async ({ page }) => {
    // テスト本体
  });

  test('メールを変更できる', async ({ page }) => {
    // テスト本体
  });
});
```

### 3. 適切な粒度

```typescript
// ✅ Good: 1つのテストケースで1つの機能を検証
test('ログインボタンをクリックするとログインページに遷移する', async ({ page }) => {
  await page.goto('/');
  await page.click('text=ログイン');
  await expect(page).toHaveURL('/login');
});

// ❌ Bad: 複数の機能を1つのテストで検証
test('ユーザー登録からログインまでの一連の流れ', async ({ page }) => {
  // ユーザー登録
  await page.goto('/register');
  // ...
  // ログイン
  await page.goto('/login');
  // ...
  // プロフィール編集
  await page.goto('/profile');
  // ...
  // ログアウト
  // ...
});
```

### 4. わかりやすいテスト名

```typescript
// ✅ Good: 何をテストするか明確
test('ログインボタンをクリックするとログインページに遷移する', async ({ page }) => {
  // ...
});

test('無効なメールアドレスを入力するとエラーメッセージが表示される', async ({ page }) => {
  // ...
});

// ❌ Bad: 曖昧なテスト名
test('テスト1', async ({ page }) => {
  // ...
});

test('ボタンのテスト', async ({ page }) => {
  // ...
});
```

### 5. フレーキーテストを避ける

```typescript
// ✅ Good: Playwright の自動待機を活用
await page.click('button');
await expect(page.locator('.result')).toBeVisible();

// ❌ Bad: 固定時間の待機
await page.click('button');
await page.waitForTimeout(1000);
const result = await page.locator('.result').textContent();
```

## CI/CD 対応

### GitHub Actions での実行

```yaml
# .github/workflows/test.yml
name: E2E Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run e2e:actions
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## デバッグ

### ヘッドモードでの実行

```bash
# ブラウザを表示してテスト実行
npx playwright test --headed

# 特定のテストのみ実行
npx playwright test tests/codeView.spec.ts

# デバッグモード
npx playwright test --debug
```

### Playwright Inspector

```typescript
// コード内でデバッガーを起動
await page.pause();
```

### トレースビューア

```bash
# トレースを記録
npx playwright test --trace on

# トレースを表示
npx playwright show-trace trace.zip
```

## テストカバレッジ

### 優先度の高いテスト

1. **Critical Path**: ユーザーの主要な操作フロー
   - ホームページ表示
   - 実績一覧表示
   - 実績詳細表示

2. **フォーム送信**: データ入力・送信フロー
   - バリデーション
   - 送信成功・失敗

3. **認証フロー**: ログイン・ログアウト
   （将来的に実装予定）

### テストすべきこと

- ✅ ユーザーが実行する重要な操作
- ✅ エラーハンドリング
- ✅ レスポンシブ対応（モバイル・デスクトップ）
- ✅ ビジュアルリグレッション

### テストしなくてよいこと

- ❌ ライブラリの内部実装
- ❌ ブラウザの標準機能
- ❌ 単純なスタイルの確認（スナップショットで十分）

## 禁止事項

### 絶対禁止
- ❌ テスト間での状態共有
- ❌ 本番環境へのテスト実行
- ❌ 固定時間の待機（`waitForTimeout`）の多用
- ❌ `test.only` のコミット（CI でエラー）

### 推奨しない
- ⚠️ 複雑すぎるテストケース（分割推奨）
- ⚠️ CSS セレクタの直接使用（role/label 推奨）
- ⚠️ 100行を超えるテストファイル（分割推奨）

## 参考資料

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Testing Library Principles](https://testing-library.com/docs/guiding-principles/)
