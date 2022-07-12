### Row

**flex-box**を使用したグリッドレイアウトにおける、**Row** の役割を持ちます。

<su-divider class="mb-8" />

#### Usage

`su-row` は `su-col` の親要素として配置され、子要素の水平位置を制御できます。

```html
<template>
  <su-row
    align="center"
    justify="center"
  >
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
|align|string|undefined|垂直方向の配置を設定します。|
|justify|string|undefined|水平方向の配置を設定します。|
|no-gutters|boolean|false|子要素の`su-col`コンポーネントからパディングを削除します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Tagable](../internals/mixins#Tagable)