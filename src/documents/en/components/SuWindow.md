### Window

You can use the `su-window` component to switch between multiple wrapped `su-window-item` components.

<su-divider class = "mb-8" />

#### Usage

You can use **v-model** to get the order of the displayed windows. <br />
You can also customize the pagination icon using the "next" and "prev" slots.

```html
<template>
  <su-window
    v-model="window"
  >
    <su-window-item>
      <su-sheet
        height="200"
        color="primary"
        class="d-flex align-center justify-center"
      >
        window 1
      </su-sheet>
    </su-window-item>

    <su-window-item>
      <su-sheet
        height="200"
        color="secondary"
        class="d-flex align-center justify-center"
      >
        window 2
      </su-sheet>
    </su-window-item>

    <su-window-item>
      <su-sheet
        height="200"
        color="primary"
        class="d-flex align-center justify-center"
      >
        window 3
      </su-sheet>
    </su-window-item>

    <template 
      #prev="{ on, attrs }"
    >
      <su-btn
        v-bind="attrs"
        v-on="on"
      >
        Prev
      </su-btn>
    </template>

    <template 
      #next="{ on, attrs }"
    >
      <su-btn
        v-bind="attrs"
        v-on="on"
      >
        Next
      </su-btn>
    </template>
  </su-window>
</template>
```

```js
export default {
  data: () => ({
    window: 0
  })
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| continuing | boolean | false | Transitions from the first item to the last item and from the last item to the first item. |
| next-icon | string | undefined | Sets the pagetion icon. |
| prev-icon | string | undefined | Sets the pagetion icon. |
| show-arrows | boolean | false | Shows / hides the pagetion icon. |
| vertical | boolean | false | Makes the transition direction vertical. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [ItemGroup](/components/SuItemGroup)