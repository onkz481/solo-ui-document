### Window

`su-window`コンポーネントを使用して、ラップされた複数の`su-window-item`コンポーネントを切り替えることが出来ます。

<su-divider class="mb-8" />

#### Usage

**v-model** を使用して、表示されたウィンドウの順序を取得できます。<br />
また、「next」および「prev」スロットを使用して、ペジネーションアイコンをカスタマイズできます。

```html
<template>
  <su-window
    v-model="window"
  >
    <su-window-item>
      <su-sheet
        height="200"
        color="primary"
        class="d-flex align-center justify-center"
      >
        window 1
      </su-sheet>
    </su-window-item>

    <su-window-item>
      <su-sheet
        height="200"
        color="secondary"
        class="d-flex align-center justify-center"
      >
        window 2
      </su-sheet>
    </su-window-item>

    <su-window-item>
      <su-sheet
        height="200"
        color="primary"
        class="d-flex align-center justify-center"
      >
        window 3
      </su-sheet>
    </su-window-item>

    <template 
      #prev="{ on, attrs }"
    >
      <su-btn
        v-bind="attrs"
        v-on="on"
      >
        Prev
      </su-btn>
    </template>

    <template 
      #next="{ on, attrs }"
    >
      <su-btn
        v-bind="attrs"
        v-on="on"
      >
        Next
      </su-btn>
    </template>
  </su-window>
</template>
```

```js
export default {
  data: () => ({
    window: 0
  })
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|continuing|boolean|false|最初のアイテムから最後のアイテムに、また最後のアイテムから最初のアイテムに遷移します。|
|next-icon|string|undefined|ペジネーションアイコンを設定します。|
|prev-icon|string|undefined|ペジネーションアイコンを設定します。|
|show-arrows|boolean|false|ペジネーションアイコンの表示・非表示を切り替えます。|
|vertical|boolean|false|遷移する方向を縦にします。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [ItemGroup](/components/SuItemGroup)