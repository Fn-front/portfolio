# SCSS / スタイリング規約

このドキュメントは SCSS とスタイリングに関する詳細規約を定義します。

## 【重要】スタイル変更の絶対ルール

**【必須】スタイルは必ず `src/styles/` ディレクトリ配下で管理すること**

- ✅ **正しい**: `src/styles/` 配下にSCSSファイルを作成・編集
- ❌ **禁止**: コンポーネントディレクトリ内に `.scss` / `.module.scss` ファイルを作成
- ❌ **禁止**: インラインスタイル（`style` 属性）の使用
- ❌ **禁止**: `sx` prop の多用（一時的な調整のみ許可）

### 理由
- プロジェクト全体のスタイルを一元管理するため
- FLOCSS アーキテクチャに準拠するため
- スタイルの重複を防ぎ、保守性を高めるため

### 例外
- **Material-UI のテーマ設定**: `src/lib/mui/theme.ts` など
- **グローバルスタイルのインポート**: `github-markdown-css` など外部CSSライブラリ

## FLOCSS アーキテクチャ

このプロジェクトは **FLOCSS**（Foundation, Layout, Object, Component, Structure, Skin）に準拠したCSS設計を採用しています。

### ディレクトリ構成

```
src/styles/
├── app.scss              # エントリーポイント
├── foundation/           # リセット・変数・基礎設定
│   └── _variables.scss  # 色・サイズ等の変数
├── layout/               # レイアウト（ヘッダー・フッター等）
│   ├── _header.scss
│   ├── _footer.scss
│   └── _container.scss
├── components/           # 再利用可能なコンポーネント
│   ├── button/
│   │   ├── _default.scss
│   │   └── _primary.scss
│   └── card/
│       └── _default.scss
├── project/              # プロジェクト固有のスタイル
│   └── _profile.scss
├── utility/              # ユーティリティクラス
│   ├── _margin.scss
│   └── _text.scss
└── mixin/                # Mixin
    └── _breakpoint.scss
```

### レイヤー構成

```scss
// app.scss
@import 'foundation/variables';
@import 'foundation/reset';

@import 'mixin/breakpoint';

@import 'layout/header';
@import 'layout/footer';
@import 'layout/container';

@import 'components/button/default';
@import 'components/card/default';

@import 'project/profile';

@import 'utility/margin';
@import 'utility/text';
```

## 命名規則

### クラス名のルール

**【必須】スネークケースを使用**

Stylelint で強制されており、違反するとエラーになります。

```scss
// ✅ Good: スネークケース
.button_primary { }
.card_header { }
.user_profile_image { }

// ❌ Bad: キャメルケース
.buttonPrimary { }  // Stylelintエラー

// ❌ Bad: ケバブケース
.button-primary { } // Stylelintエラー
```

### BEM ベースの命名（スネークケース版）

```scss
// Block（ブロック）
.card { }

// Element（要素） - Block_Element
.card_header { }
.card_body { }
.card_footer { }

// Modifier（修飾子） - Block__Modifier
.card__primary { }
.card__large { }

// Element + Modifier
.card_header__large { }
```

### HTMLタグ名の直接指定禁止

**【必須】独自のクラス名を使用すること**

```scss
// ❌ Bad: HTMLタグを直接指定
div {
  padding: 10px;
}

button {
  background: blue;
}

// ✅ Good: 独自のクラス名を使用
.container {
  padding: 10px;
}

.button_primary {
  background: blue;
}
```

**【許容】リセットCSS・ベーススタイルのみ**

```scss
// ✅ 許容: foundation層のリセット
html, body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

// ✅ 許容: クラス内でのタグ指定
.article {
  h1 {
    font-size: 2rem;
  }

  p {
    line-height: 1.6;
  }
}
```

## Stylelint ルール

### 強制ルール（エラー）

プロジェクトの `.stylelintrc.json` で以下が強制されています：

```json
{
  "rules": {
    "selector-class-pattern": "^[a-z][a-z0-9]*(_[a-z0-9]+)*$",
    "color-named": "never",
    "declaration-no-important": true,
    "declaration-property-value-no-unknown": true
  }
}
```

#### 1. クラス名はスネークケース必須
```scss
// ✅ Good
.user_card { }
.button_primary_large { }

// ❌ Bad: エラーになる
.userCard { }
.button-primary { }
```

#### 2. 色名禁止（HEX/RGB使用）
```scss
// ❌ Bad: エラーになる
.button {
  color: red;
  background: white;
}

// ✅ Good
.button {
  color: #ff0000;
  background: #ffffff;
}

// ✅ Good: 変数を使用（推奨）
.button {
  color: $color_danger;
  background: $color_white;
}
```

#### 3. !important 禁止
```scss
// ❌ Bad: エラーになる
.text {
  color: red !important;
}

// ✅ Good: 詳細度を適切に管理
.text.text__emphasis {
  color: red;
}
```

### プロパティ順序（Recess Order）

プロパティは以下の順序で記述（Stylelint が自動整形）：

```scss
.element {
  // 1. Positioning
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  // 2. Box Model
  display: flex;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  // 3. Typography
  font-size: 16px;
  line-height: 1.5;
  color: #333;

  // 4. Visual
  background: #fff;
  border: 1px solid #ccc;

  // 5. Misc
  cursor: pointer;
  transition: all 0.3s;
}
```

## SCSS 機能の活用

### 変数の使用

```scss
// ✅ Good: foundation/_variables.scss で定義
$color_primary: #1976d2;
$color_secondary: #dc004e;
$color_text: #333333;
$color_bg: #f5f5f5;

$size_xs: 4px;
$size_sm: 8px;
$size_md: 16px;
$size_lg: 24px;
$size_xl: 32px;

$breakpoint_sm: 600px;
$breakpoint_md: 960px;
$breakpoint_lg: 1280px;

// 使用例
.button_primary {
  padding: $size_md $size_lg;
  background: $color_primary;
  color: #fff;
}
```

### ネスト

```scss
// ✅ Good: 適度なネスト（3階層まで）
.card {
  padding: $size_md;

  .card_header {
    margin-bottom: $size_sm;

    .card_title {
      font-size: 18px;
    }
  }

  .card_body {
    line-height: 1.6;
  }
}

// ❌ Bad: 深すぎるネスト（4階層以上）
.card {
  .card_header {
    .card_title {
      .card_title_text {
        .card_title_icon { // 5階層！
          // ...
        }
      }
    }
  }
}
```

### & 親参照セレクタ

```scss
// ✅ Good: Modifier の定義
.button {
  padding: $size_sm $size_md;
  background: $color_primary;

  &__large {
    padding: $size_md $size_lg;
  }

  &__small {
    padding: $size_xs $size_sm;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// 出力結果
// .button { }
// .button__large { }
// .button__small { }
// .button:hover { }
// .button:disabled { }
```

### Mixin の使用

```scss
// ✅ Good: mixin/_breakpoint.scss
@mixin media_sm {
  @media (min-width: $breakpoint_sm) {
    @content;
  }
}

@mixin media_md {
  @media (min-width: $breakpoint_md) {
    @content;
  }
}

@mixin media_lg {
  @media (min-width: $breakpoint_lg) {
    @content;
  }
}

// 使用例
.container {
  width: 100%;

  @include media_sm {
    width: 540px;
  }

  @include media_md {
    width: 720px;
  }

  @include media_lg {
    width: 960px;
  }
}
```

### 関数の使用

```scss
// ✅ Good: 色の明度調整
.button_primary {
  background: $color_primary;

  &:hover {
    background: darken($color_primary, 10%);
  }

  &:active {
    background: darken($color_primary, 20%);
  }
}

// ✅ Good: 透明度の調整
.overlay {
  background: rgba($color_text, 0.5);
}
```

## レスポンシブデザイン

### モバイルファースト

```scss
// ✅ Good: モバイルファーストで記述
.container {
  // モバイル（デフォルト）
  width: 100%;
  padding: $size_sm;

  // タブレット以上
  @include media_sm {
    width: 540px;
    padding: $size_md;
  }

  // デスクトップ以上
  @include media_md {
    width: 720px;
    padding: $size_lg;
  }
}

// ❌ Bad: デスクトップファースト
.container {
  width: 720px; // デスクトップがデフォルト

  @media (max-width: 960px) {
    width: 540px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
}
```

## Material-UI との共存

### MUI コンポーネントのカスタマイズ

```scss
// ✅ Good: グローバルスタイルで上書き
.MuiButton-root {
  text-transform: none; // 大文字化を無効
  border-radius: 8px;
}

// ✅ Good: カスタムクラスとの組み合わせ
.button_custom {
  // MUIボタンにカスタムスタイルを追加
  &.MuiButton-contained {
    background: $color_primary;
    box-shadow: none;

    &:hover {
      background: darken($color_primary, 10%);
    }
  }
}
```

### sx prop との使い分け

- **SCSS**: プロジェクト全体の共通スタイル
- **sx prop**: コンポーネント固有の一時的なスタイル

```typescript
// ✅ Good: 共通スタイルはSCSS
// styles/components/card/_default.scss
.card_profile {
  padding: $size_md;
  border-radius: 8px;
}

// コンポーネント固有はsx prop
<Card className='card_profile' sx={{ marginBottom: 2 }}>
  {/* ... */}
</Card>
```

## パフォーマンス

### 効率的なセレクタ

```scss
// ✅ Good: シンプルなセレクタ
.card_title {
  font-size: 18px;
}

// ❌ Bad: 複雑すぎるセレクタ
body div.container > ul li.item:nth-child(2) span {
  font-size: 18px;
}

// ❌ Bad: ユニバーサルセレクタの乱用
* {
  box-sizing: border-box; // リセットCSS以外では避ける
}
```

### CSS ファイルサイズ削減

```scss
// ✅ Good: 共通スタイルを変数・mixinで共有
$button_base: (
  padding: $size_sm $size_md,
  border-radius: 4px,
  cursor: pointer,
);

@mixin button_base {
  padding: map-get($button_base, padding);
  border-radius: map-get($button_base, border-radius);
  cursor: map-get($button_base, cursor);
}

.button_primary {
  @include button_base;
  background: $color_primary;
}

.button_secondary {
  @include button_base;
  background: $color_secondary;
}
```

## アクセシビリティ

### フォーカス表示

```scss
// ✅ Good: フォーカス時の明示的なスタイル
.button {
  &:focus {
    outline: 2px solid $color_primary;
    outline-offset: 2px;
  }

  // キーボードフォーカスのみ表示
  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid $color_primary;
    outline-offset: 2px;
  }
}
```

### コントラスト比

```scss
// ✅ Good: 十分なコントラスト（WCAG AA基準: 4.5:1以上）
.text_primary {
  color: #333333; // 白背景で十分なコントラスト
  background: #ffffff;
}

// ❌ Bad: コントラストが低い
.text_low_contrast {
  color: #cccccc; // 白背景で読みにくい
  background: #ffffff;
}
```

## 禁止事項

### 絶対禁止
- ❌ キャメルケース・ケバブケースのクラス名（Stylelintエラー）
- ❌ HTMLタグの直接指定（foundation層以外）
- ❌ 色名の使用（`red`, `blue`等）
- ❌ `!important` の使用
- ❌ インライン CSS（`style` 属性）

### 推奨しない
- ⚠️ 4階層以上のネスト
- ⚠️ IDセレクタ（`.class` を推奨）
- ⚠️ グローバル汚染（スコープを意識）
- ⚠️ マジックナンバー（変数化推奨）

## ファイル分割の原則

### 1ファイル1コンポーネント
```scss
// ✅ Good: components/button/_primary.scss
.button_primary {
  // button_primaryのスタイルのみ
}

// ❌ Bad: 複数のコンポーネントを1ファイルに
.button_primary { }
.card_header { }
.modal_overlay { } // 異なるコンポーネント
```

### インポート順序
```scss
// app.scss

// 1. 変数・Mixin（依存されるもの）
@import 'foundation/variables';
@import 'mixin/breakpoint';

// 2. リセット・ベーススタイル
@import 'foundation/reset';

// 3. レイアウト
@import 'layout/header';

// 4. コンポーネント
@import 'components/button/default';

// 5. プロジェクト固有
@import 'project/profile';

// 6. ユーティリティ（上書きするため最後）
@import 'utility/margin';
```

## デバッグ・メンテナンス

### コメント
```scss
// ✅ Good: 意図を説明
// Material-UIのデフォルトスタイルを上書き
.MuiButton-root {
  text-transform: none;
}

// Z-indexの管理（header: 100, modal: 200, tooltip: 300）
.header {
  z-index: 100;
}
```

### 開発時のみのスタイル
```scss
// ⚠️ 開発時のみ有効（本番環境では削除）
// .debug {
//   border: 1px solid red;
// }
```

## 参考資料

- [FLOCSS](https://github.com/hiloki/flocss)
- [Stylelint](https://stylelint.io/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [BEM](http://getbem.com/)
