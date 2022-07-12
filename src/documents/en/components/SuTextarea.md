### Textarea

The `su-textarea` component helps you enter large amounts of text data.

<su-divider class = "mb-8" />

#### Usage

The entered text can be retrieved using **v-model**.

```html
<template>
  <su-textarea
    v-model="text"
  />
</template>
```

```js
export default {
  data: () => ({
    text: ''
  })
}
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| auto-grow | boolean | false | The height of the input field is automatically adjusted according to the entered text. |
| row-height | number | 28 | Sets the height of the line of text entered. |
| rows | number | 5 | Specifies the height of the input field in rows. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [TextField](../components/SuTextField)