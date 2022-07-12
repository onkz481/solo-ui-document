### List

The `su-list` component is suitable for displaying multiple pieces of information in list format.

<su-divider class = "mb-8" />

#### Usage

It has the following related components:

- su-list-item
- su-list-item-avatar
- su-list-item-content
- su-list-item-icon
- su-list-item-overline
- su-list-item-subtitle
- su-list-item-title

<br />

```html
<template>
  <su-list>
    <su-list-item
      three-line
    >
      <su-list-item-avatar
        color="primary"
      >
        TE
      </su-list-item-avatar>

      <su-list-item-content>
        <su-list-item-title>Title</su-list-item-title>

        <su-list-item-subtitle>SubTitle</su-list-item-subtitle>

        <su-list-item-subtitle>SubTitle</su-list-item-subtitle>
      </su-list-item-content>

      <su-list-item-icon>
        <su-icon>mdi-square</su-icon>
      </su-list-item-icon>
    </su-list-item>
  </su-list>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| shrink | boolean | false | Reduces the width of `su-list-item`. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [Sheet](../components/SuSheet)