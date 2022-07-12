### Progress

`su-progress`コンポーネントは、処理の進捗状況をユーザに伝える機能の作成に使用できます。

<su-divider class="mb-8" />

#### Usage

デフォルトのスロットには、スロットのプロパティとして「value」と「color」が渡されます。

```html
<template>
  <su-progress
    v-model="progress"
  >
    <template #default="{ value, color }">
      <div
        class="d-flex align-center justify-center"
        style="height: 100px;"
      >
        <div
          :class="`${color}`"
          :style="{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: `${value}px`,
            backgroundColor: `${color}`,
            transition: '0.3s cubic-bezier(0.25, 0.8, 0.5, 1)'
          }"
        />

        <su-btn
          v-if="value !== 'indeterminate'"
          @click="changeInterval"
        >
          <span v-text="`${value}%`" />
        </su-btn>
      </div>
    </template>
  </su-progress>
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
|background-color|string|undefined|背景の色を指定します。|
|background-opacity|string, number|0.3|背景の透過度を指定します。|
|color|string|'primary'|指定された色を適用します。|
|indeterminate|boolean|false|`true`の場合、default スロットで渡される`value`の値が、文字列 '*indeterminate*' に固定されます。|

##### Slots

|Name|Props|Description|
|----|-----|-----------|
|default|&#123; value, color &#125;|`value`の値は、`v-model`に指定された変数の値を受け取ります。`indeterminate`propが有効の場合は、常に'*indeterminate*'文字列を返します。|