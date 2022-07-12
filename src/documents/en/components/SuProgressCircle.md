### ProgressCircle

The `su-progress-circle` component is a circular progress bar that can visually inform the user of the progress of the process.

<su-divider class = "mb-8" />

#### Usage

The "value" of the slot property always returns 'indeterminate' if the **indeterminate** property is `true`.

```html
<template>
  <su-progress-circle
    v-model="progress"
  >
    <template #default="{ value }">
      <span v-text="value !== 'indeterminate' ? `${value}%` : '∞'" />
    </template>
  </su-progress-circle>
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

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| background-color | string | undefined | Specifies the background color. |
| background-opacity | number | 0.3 | Specifies the transparency of the background. |
| color | string |'primary' | Apply the specified color. |
| indeterminate | boolean | false | will always animate. It is used when the progress is unknown. |
| indeterminate-bezier | string |'cubic-bezier (0.65, 0, 0.35, 1)' | You can specify the movement of the animation with a cubic Bezier curve. **indeterminate** Reflected when prop is enabled. |
| indeterminate-dasharray | number | undefined | Specifies the minimum size of the bar. **indeterminate** Reflected when prop is enabled. |
| indeterminate-duration | number | 2 | Specifies the rotation speed of the bar. **indeterminate** Reflected when prop is enabled. |
| linecap | string | undefined |Add **stroke-linecap: round** to the component. **indeterminate** Reflected when prop is enabled. |
| rotate | number | 0 | Specifies the start point of the bar. |
| size | number | 36 | Specifies the size of the component. |
| width | number | 4 | Specifies the width of the bar. |

##### Slots

| Name | Props | Description |
| ---- | ----- | ----------- |
| default | & # 123; value, color & # 125; | The value of `value` receives the value of the variable specified in` v-model`. When **indeterminate** prop is enabled, it always returns the '*indeterminate*' string. |