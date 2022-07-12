### Row

It has the role of **Row** in the grid layout using **flex-box**.

<su-divider class = "mb-8" />

#### Usage

`su-row` is placed as the parent element of `su-col` and allows you to control the horizontal position of the child elements.

```html
<template>
  <su-row
    align="center"
    justify="center"
  >
    <su-col
      cols="6"
    />
  </su-row>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| align | string | undefined | Sets the vertical alignment. |
| justify | string | undefined | Sets the horizontal alignment. |
| no-gutters | boolean | false | Removes the padding from the `su-col` component of the child element. |

##### Mixins

This component has the following common properties:

- [Tagable](../internals/mixins#Tagable)