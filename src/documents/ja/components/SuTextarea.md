### Textarea

`su-textarea`コンポーネントは、大量のテキストデータを入力するのに役立ちます。

<su-divider class="mb-8" />

#### Usage

入力したテキストは、**v-model** を使用して取得できます。

```html
<template>
  <su-textarea
    v-model="text"
  />
</template>
```

```js
export default {
  data: () => ({
    text: ''
  })
}
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|auto-grow|boolean|false|入力されたテキストによって、入力フィールドの高さを自動で調整します。|
|row-height|number|28|入力されたテキストの行の高さを設定します。|
|rows|number|5|入力フィールドの高さを行数で指定します。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [TextField](../components/SuTextField)