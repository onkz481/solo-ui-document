### Checkbox

`su-checkbox`コンポーネントは、ユーザーに2つの値から選択する機能を提供します。

<su-divider class="mb-8" />

#### Usage

**v-model** を使用して、現在のチェック状態を同期できます。

```html
<template>
  <su-checkbox
    v-model="checked"
    :label="`checked: ${checked.toString()}`"
  />
</template>
```

```js
<script>
  export default {
    data: () => ({
      checked: false
    })
  }
</script>
```

または、配列を指定することで、複数のチェックボックスの値をまとめて管理できます。

```html
<template>
  <su-checkbox
    v-model="selected"
    value="box 1"
    label="box 1"
  />

  <su-checkbox
    v-model="selected"
    value="box 2"
    label="box 2"
  />
</template>
```

```js
<script>
  export default {
    data: () => ({
      selected: []
    })
  }
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|offIcon|string|'mdi-checkbox-blank-outline'|コンポーネントが非アクティブ時のアイコンを設定します。|
|onIcon|string|'mdi-checkbox-outline'|コンポーネントがアクティブ時のアイコンを設定します。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [Input](../components/SuInput)