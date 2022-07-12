### Overlay

`su-overlay`コンポーネントは、特定の要素またはコンテンツを強調するために使用できます。

<su-divider class="mb-8" />

#### Usage

プロパティまたはデフォルトのスロットが指定されていない場合、コンポーネントはアプリケーションに半透明のレイヤーを表示します。

```html
<template>
  <su-overlay
    :value="overlay"
  >
    <su-btn @click="overlay = !overlay">
      hide overlay
    </su-btn>
  </su-overlay>
</template>
```

```js
<script>
export default {
  data: () => ({
    overlay: false
  })
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|absolute|boolean|false|オーバーレイを親要素内に表示します。|
|value|boolean|true|オーバーレイの表示・非表示を切り替えます。|