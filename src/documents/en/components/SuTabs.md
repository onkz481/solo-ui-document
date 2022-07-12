### Tabs

The `su-tabs` component can be used as a navigation to switch the contents of the display area.

<su-divider class = "mb-8" />

#### Usage

The `su-tabs` component is used by wrapping the `su-tab` component.

```html
<template>
  <su-tabs
    v-model="tab"
  >
    <su-tab
      v-for="n in 10"
      :key="n"
    >
      <span v-text="`Item ${n}`" />
    </su-tab>
  </su-tabs>
</template>
```

```js
<script>
export default {
  data: () => ({
    tab: 0
  })
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active-class | string |'su-tab--active' | Sets the class name applied when the component is active. |
| color | string |'primary' | Applies the specified color to the component. |
| hide-slider | boolean | false | Hides the slider. |
| shrink | boolean | false | Reduces the width of `su-tab`. |
| slider-color | string |'primary' | Sets the color of the slider. |
| slider-size | number | 2 | Sets the height of the slider. |

##### Mixins

This component has the following common properties:

- [Colorable](../internals/mixins#Colorable)
- [Roundable](../internals/mixins#Roundable)