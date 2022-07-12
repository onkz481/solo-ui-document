### Dialog

The `su-dialog` component provides a pop-up window feature that appears at the front of the page.

<su-divider class = "mb-8" />

#### Usage

It consists of **activator** and **default** slots. Place the trigger element in the **activator** slot.

```html
<template>
  <su-dialog
    v-model="dialog"
    :max-width="400"
  >
    <template #activator="{ on }">
      <su-btn
        v-on="on"
      >
        show dialog
      </su-btn>
    </template>

    <su-card>
      <su-card-title>
        Dialog
      </su-card-title>

      <su-divider />

      <su-card-content>
        Dialog Content
      </su-card-content>

      <su-divider />

      <su-card-actions>
        <su-spacer />

        <su-btn
          @click="dialog = !dialog"
        >
          close
        </su-btn>
      </su-card-actions>
    </su-card>
  </su-dialog>
</template>
```

```js
<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| fullscreen | boolean | false | The pop-up window expands to fill the entire display area of the browser. |
| max-width | number | undefined | Sets the maximum width of the dialog. |
| value | boolean | false | Shows / hides the dialog. |
| width | number | undefined | Sets the width of the dialog. |

##### Mixins

This component has the following common properties:

- [Overlayable](../internals/mixins#Overlayable)
- [Transitionable](../internals/mixins#Transitionable)