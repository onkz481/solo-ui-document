### Avatar

The `su-avatar` component is suitable for displaying circular images. You can also display icons and text, and change the size and shape using the properties provided.

<su-divider class="mb-8" />

#### How to use

The `su-avatar` component can use` img`, `su-icon`, or text in the default slot.

```html
<template>
  <su-avatar
    color="secondary"
  >
    <img src="https://joeschmoe.io/api/v1/random">
  </su-avatar>

  <su-avatar
    color="primary"
  >
    <su-icon>mdi-home</su-icon>
  </su-avatar>

  <su-avatar
    color="primary"
  >
    <span class="text-h6">TE</span>
  </su-avatar>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| size | number | 48 | Specifies the size of the component. |

##### Mixins

This component has the following common properties:

- [Colorable](../internals/mixins#Colorable)
- [Roundable](../internals/mixins#Roundable)