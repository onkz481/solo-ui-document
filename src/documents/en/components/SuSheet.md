### Sheet

The `su-sheet` component forms the concept of "Surface" in Material Design.

<su-divider class = "mb-8" />

#### Usage

The `su-sheet` component is the deformable element that underlies other components.

```html
<template>
  <su-sheet
    width="100"
    height="100"
    color="#ffffff"
  />
</template>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| outlined | boolean | false | Add a border. |

##### Mixins

This component has the following common properties:

- [Colorable](../internals/mixins#Colorable)
- [Dimensionable](../internals/mixins#Dimensionable)
- [Elevatable](../internals/mixins#Elevatable)
- [Roundable](../internals/mixins#Roundable)
- [Themeable](../internals/mixins#Themeable)