### TextField

The `su-text-field` component provides a user-editable text input form.

<su-divider class = "mb-8" />

#### Usage

The entered text can be retrieved using **v-model**.

```html
<template>
  <su-text-field
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
| append-inner-icon | string | undefined | Sets the icon that appears behind and inside the input field. |
| clearable | boolean | false | Add a button to delete all input values. |
| clear-icon | string |'mdi-close' | **Clearable** Sets the icon to be displayed when enabled. |
| prepare-inner-icon | string | undefined | Sets the icon that appears inside the front of the input field. |
| rounded | string |'normal' | Add **border-radius** to the component. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

-[Input](/components/SuInput)

##### Mixins

This component has the following common properties:

-[Roundable](/internals/mixins#Roundable)

#### Events

<example file ='SuTextField/events/icon' />

| Name | Description |
| ---- | ---- |
| click: append | Adds an event to the icon set by `append-icon`. |
| click: append-inner | Adds an event to the icon set by `append-inner-icon`. |
| click: prepare Adds an event to the icon set by `prepend-icon`. |
| click: prepare-inner | Adds an event to the icon set by `prepend-inner-icon`. |