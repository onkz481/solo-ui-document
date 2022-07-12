### Divider

`su-divider`コンポーネントは、レイアウトを視覚的に分割するために使用されます。

<su-divider class="mb-8" />

#### Usage

単純な`su-divider`コンポーネントは、要素内に水平線を表示します。

```html
<template>
  <su-divider />
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|vertical|boolean|false|水平線を縦方向に変更します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Themeable](../internals/mixins#Themeable)