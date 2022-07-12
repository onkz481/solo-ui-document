### Radio Button

`su-radio-group`コンポーネントは、`su-radio`コンポーネントと組み合わせて使用します。

<su-divider class="mb-8" />

#### Usage

`su-radio-group`の**v-model**を使用して、グループ内の選択したラジオボタンにアクセスできます。

```html
<template>
  <div
    class="flex-box"
  >
    <su-radio-group
      v-model="radios"
    >
      <su-radio
        v-for="n in 3"
        :key="n"
        :label="`Radio ${n}`"
        :value="`Radio ${n}`"
      />
    </su-radio-group>
  </div>
</template>
```

```js
<script>
export default {
  data: () => ({
    radios: 'Radio 1'
  })
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|column|boolean|true|ラジオグループの方向を垂直に設定します。|
|row|string|false|ラジオグループの方向を水平に設定します。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [Input](../components/SuInput)
- [ItemGroup](../components/SuItemGroup)