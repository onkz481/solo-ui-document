### Col

**flex-box**を使用したグリッドレイアウトにおける、**Col** の役割を持ちます。`su-row`の子要素である必要があります。

<su-divider class="mb-8" />

#### Usage

通常、`su-col` は `su-row` の子要素として配置します。

```html
<template>
  <su-row>
    <su-col
      cols="6"
    />

    <su-col
      cols="6"
    />
  </su-row>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|align-self|string|undefined|垂直方向の配置を設定します。|
|cols|number|undefined|コンポーネントのカラム数を設定します。使用できる値は 1 ~ 12 又は **auto** です。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Tagable](../internals/mixins#Tagable)