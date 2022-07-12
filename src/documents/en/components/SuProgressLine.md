### ProgressLine

The `su-progress-line` component is a horizontal progress bar that can visually inform the user of the progress of the process.

<su-divider class = "mb-8" />

#### Usage

The "value" of the slot property always returns 'indeterminate' if the **indeterminate** property is `true`.

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

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| absolute | boolean | false | Add **position: absolute** to the component. |
| active | boolean | true | Shows / hides the component. |
| background-color | string | undefined | Specifies the background color. |
| background-opacity | number | 0.3 | Specifies the transparency of the background. |
| bottom | boolean | false | Places the component at the bottom. This is valid when the **absolute** property is `true`. |
| color | string |'primary' | Apply the specified color. |
| height | number | 4 | Specifies the height of the component. |
| indeterminate | boolean | false | will always animate. It is used when the progress is unknown. |
| reverse | boolean | false | Displays the direction of travel of the bar in reverse. |
| rounded | string | undefined | Add **border-radius** to the component. |
| tile | boolean | false | Add **border-radius: 0px** to the component. This takes precedence over the value specified for the **rounded** property. |

##### Slots

| Name | Props | Description |
| ---- | ----- | ----------- |
| default | & # 123; value, color & # 125; | The value of `value` receives the value of the variable specified in` v-model`. When `indeterminate`prop is enabled, it always returns the '*indeterminate*' string. |