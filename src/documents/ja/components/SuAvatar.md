### Avatar

`su-avatar`コンポーネントは、円形の画像を表示するのに適しています。 アイコンやテキストを表示したり、提供されているプロパティを使用してサイズや形状を変更したりすることもできます。

<su-divider class="mb-8" />

#### Usage

`su-avatar`コンポーネントは、デフォルトのスロットに`img`、`su-icon`、またはテキストを使用できます。

```html
<template>
  <su-avatar
    color="secondary"
  >
    <img src="https://joeschmoe.io/api/v1/random">
  </su-avatar>

  <su-avatar
    color="primary"
  >
    <su-icon>mdi-home</su-icon>
  </su-avatar>

  <su-avatar
    color="primary"
  >
    <span class="text-h6">TE</span>
  </su-avatar>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|size|number|48|コンポーネントのサイズを指定します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](../internals/mixins#Colorable)
- [Roundable](../internals/mixins#Roundable)