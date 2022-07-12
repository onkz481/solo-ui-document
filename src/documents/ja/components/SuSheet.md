### Sheet

`su-sheet`コンポーネントは、マテリアルデザインにおける「Surface（紙）」の概念を形成します。

<su-divider class="mb-8" />

#### Usage

`su-sheet`コンポーネントは、他のコンポーネントの基礎となる変形可能な要素です。

```html
<template>
  <su-sheet
    width="100"
    height="100"
    color="#ffffff"
  />
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|outlined|boolean|false|枠線を追加します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Colorable](../internals/mixins#Colorable)
- [Dimensionable](../internals/mixins#Dimensionable)
- [Elevatable](../internals/mixins#Elevatable)
- [Roundable](../internals/mixins#Roundable)
- [Themeable](../internals/mixins#Themeable)