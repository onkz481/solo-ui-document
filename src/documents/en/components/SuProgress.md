### Progress

The `su-progress` component can be used to create the ability to inform the user of the progress of the process.

<su-divider class = "mb-8" />

#### Usage

The default slot is passed "value" and "color" as slot properties.

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

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| background-color | string | undefined | Specifies the background color. |
| background-opacity | string, number | 0.3 | Specifies the transparency of the background. |
| color | string |'primary' | Apply the specified color. |
| indeterminate | boolean | false | If `true`, the value of` value` passed in the default slot is fixed to the string'* indeterminate *'. |

##### Slots

| Name | Props | Description |
| ---- | ----- | ----------- |
| default | & # 123; value, color & # 125; | The value of `value` receives the value of the variable specified in` v-model`. When `indeterminate`prop is enabled, it always returns the '*indeterminate*' string. |