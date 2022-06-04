### Application

`su-app`は、SoloUIの多くのコンポーネントに必要な設定を読み込むためのコンポーネントです。ほとんどのSoloUIコンポーネントは、`su-app`内で使用する必要があります。

<su-divider class="mb-8" />

#### 使い方

レイアウトを容易にするために、`su-header`、`su-nav`、および`su-main`コンポーネントが提供されています。

```html
<template>
  <su-app>
    <su-header>
      <!-- -->
    </su-header>

    <su-nav>
      <!-- -->
    </su-nav>

    <su-main>
      <!-- -->

      <!-- vue-router -->
      <router-view />
    </su-main>
  </su-app>
</template>
```

#### コンポーネント

##### Header

常にアプリケーションの上部に配置されるヘッダーコンポーネントを提供します。

##### Nav

アプリケーションの左側にナビゲーションを配置します。 ナビゲーションドロワーは、画面サイズに応じて自動的に切り替わります。

##### Main

メインコンテンツを表示する領域を提供します。

#### Layout

レイアウトサービスは、SoloUIのレイアウトを制御するために使用されます。 ユーザーは、必要に応じてサービスのプロパティにアクセスできます。

```js
{
  header: {
    width: Number
  },
  nav: {
    gutterWidth: Number,
    width: Number
  },
  main: {
    width: Number,
    centerWidth: Number,
    rightWidth: Number
  },
  mobile: Boolean,
  narrow: Boolean,
}
```

これらの値には、$soloui.layoutプロパティを使用してアクセスします。

```js
console.log(this.$soloui.layout)
```