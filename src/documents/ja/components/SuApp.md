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

      <template #narrow>
        <!-- -->
      </template>

      <template #mobile>
        <!-- -->
      </template>
    </su-nav>

    <su-main>
      <!-- -->

      <!-- vue-router -->
      <router-view />

      <template #right>
        <!-- -->
      </template>
    </su-main>
  </su-app>
</template>
```

#### コンポーネント

##### Header

常にアプリケーションの上部に配置されるヘッダーコンポーネントを提供します。

##### Nav

アプリケーションの左側にナビゲーションを配置します。 画面サイズに応じて3つのスロットを切り替えます。

* 表示領域の幅が**1280px**より大きい場合：`default`
* 表示領域の幅が**720px**より大きく、**1280px**以下の場合：`narrow`
* 表示領域の幅が**720px**以下の場合：`mobile`

※これらは、SoloUIオプションがデフォルトの場合のしきい値です。{.error--text}

##### Main

メインコンテンツを表示する領域を提供します。 `right`スロットを使用して、ウィジェット領域を表示領域の右側に作成することもできます。

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