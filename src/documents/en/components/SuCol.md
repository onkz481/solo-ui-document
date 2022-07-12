### Col

It has the role of **Col** in the grid layout using **flex-box**. Must be a child element of `su-row`.

<su-divider class = "mb-8" />

#### Usage

Normally, `su-col` is placed as a child element of `su-row`.

```html
<template>
  <su-row>
    <su-col
      cols="6"
    />

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
| align-self | string | undefined | Sets the vertical alignment. |
| cols | number | undefined | Sets the number of columns in the component. Possible values are 1 to 12 or **auto**. |

##### Mixins

This component has the following common properties:

- [Tagable](../internals/mixins#Tagable)