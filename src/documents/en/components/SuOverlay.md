### Overlay

The `su-overlay` component can be used to emphasize specific elements or content.

<su-divider class = "mb-8" />

#### Usage

If no property or default slot is specified, the component will display a translucent layer in the application.

```html
<template>
  <su-overlay
    :value="overlay"
  >
    <su-btn @click="overlay = !overlay">
      hide overlay
    </su-btn>
  </su-overlay>
</template>
```

```js
<script>
export default {
  data: () => ({
    overlay: false
  })
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| absolute | boolean | false | Displays the overlay inside the parent element. |
| value | boolean | true | Shows / hides the overlay. |