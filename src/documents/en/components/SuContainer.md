### Container

It has the role of **Container** in the grid layout using **flex-box**.

<su-divider class = "mb-8" />

#### Usage

Responsive by placing it as the parent element of `su-row`.

```html
<template>
  <su-container>
    <su-row>
      <su-col
        v-for="n in 3"
        :key="n"
      >
        ...
      </su-col>
    </su-row>
  </su-container>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| fluid | boolean | false | The maximum width is always set regardless of the current state of the display area. |

##### Mixins

This component has the following common properties:

- [Tagable](../internals/mixins#Tagable)