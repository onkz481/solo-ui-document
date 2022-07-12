### ProgressLine

`su-progress-line`コンポーネントは、処理の進捗状況をユーザに視覚的に伝えることのできる、水平方向のプログレスバーです。

<su-divider class="mb-8" />

#### Usage

**indeterminate** プロパティが`true`の場合、スロットプロパティの"value"は常に'indeterminate'を返します。

```html
<template>
  <su-progress-line
    v-model="progress"
    height="30"
  >
    <template #default="{ value }">
      <div 
        class="d-flex align-center justify-center"
        style="height: 100%;"
      >
        <span v-text="value !== 'indeterminate' ? `${value}%` : '∞'" />
      </div>
    </template>
  </su-progress-line>
</template>
```

```js
<script>
  export default {
    data: () => ({
      interval: null,
      progress: 0
    }),
    methods: {
      changeInterval(){
        if( this.interval ){
          window.clearInterval(this.interval)

          this.interval = null

          return
        }

        this.interval = window.setInterval(() => {
          let value = this.progress + 1

          this.progress = value > 100 ? 0 : value
        }, 100)
      }
    }
  }
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|absolute|boolean|false|コンポーネントに **position: absolute** を追加します。|
|active|boolean|true|コンポーネントの表示・非表示を切り替えます。|
|background-color|string|undefined|背景の色を指定します。|
|background-opacity|number|0.3|背景の透過度を指定します。|
|bottom|boolean|false|コンポーネントを下部に配置します。これは、**absolute** プロパティが`true`の場合に有効です。|
|color|string|'primary'|指定された色を適用します。|
|height|number|4|コンポーネントの高さを指定します。|
|indeterminate|boolean|false|常にアニメーションを行うようになります。進捗状況が不明な場合などに使用します。|
|reverse|boolean|false|バーの進行方向を逆に表示します。|
|rounded|string|undefined|コンポーネントに **border-radius** を追加します。|
|tile|boolean|false|コンポーネントに **border-radius: 0px** を追加します。これは、**rounded** プロパティに指定された値よりも優先されます。|

##### Slots

|Name|Props|Description|
|----|-----|-----------|
|default|&#123; value, color &#125;|`value`の値は、`v-model`に指定された変数の値を受け取ります。`indeterminate`propが有効の場合は、常に'*indeterminate*'文字列を返します。|