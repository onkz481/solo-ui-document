### Container

**flex-box**を使用したグリッドレイアウトにおける、**Container** の役割を持ちます。

<su-divider class="mb-8" />

#### Usage

`su-row` の親要素として配置することで、レスポンシブを実現します。

```html
<template>
  <su-container>
    <su-row>
      <su-col
        v-for="n in 3"
        :key="n"
      >
        ...
      </su-col>
    </su-row>
  </su-container>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|fluid|boolean|false|現在の表示領域の状態に関わらず、常に最大の幅が設定されます。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Tagable](../internals/mixins#Tagable)