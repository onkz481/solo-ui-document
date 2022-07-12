### Dialog

`su-dialog`コンポーネントは、ページの前面に表示されるポップアップウィンドウ機能を提供します。

<su-divider class="mb-8" />

#### Usage

これは、**activator**と**default**スロットで構成されています。トリガー要素を**activator**スロットに配置します。

```html
<template>
  <su-dialog
    v-model="dialog"
    :max-width="400"
  >
    <template #activator="{ on }">
      <su-btn
        v-on="on"
      >
        show dialog
      </su-btn>
    </template>

    <su-card>
      <su-card-title>
        Dialog
      </su-card-title>

      <su-divider />

      <su-card-content>
        Dialog Content
      </su-card-content>

      <su-divider />

      <su-card-actions>
        <su-spacer />

        <su-btn
          @click="dialog = !dialog"
        >
          close
        </su-btn>
      </su-card-actions>
    </su-card>
  </su-dialog>
</template>
```

```js
<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|fullscreen|boolean|false|ポップアップウィンドウが拡大され、ブラウザの表示領域全体に表示されます。|
|max-width|number|undefined|ダイアログの最大の横幅を設定します。|
|value|boolean|false|ダイアログの表示・非表示を切り替えます。|
|width|number|undefined|ダイアログの横幅を設定します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Overlayable](../internals/mixins#Overlayable)
- [Transitionable](../internals/mixins#Transitionable)