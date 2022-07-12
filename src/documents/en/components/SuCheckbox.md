### Checkbox

The `su-checkbox` component provides the user with the ability to choose between two values.

<su-divider class="mb-8" />

#### Usage

You can use **v-model** to synchronize the current check state.

```html
<template>
  <su-checkbox
    v-model="checked"
    :label="`checked: ${checked.toString()}`"
  />
</template>
```

```js
<script>
  export default {
    data: () => ({
      checked: false
    })
  }
</script>
```

Alternatively, you can manage the values of multiple checkboxes together by specifying an array.

```html
<template>
  <su-checkbox
    v-model="selected"
    value="box 1"
    label="box 1"
  />

  <su-checkbox
    v-model="selected"
    value="box 2"
    label="box 2"
  />
</template>
```

```js
<script>
  export default {
    data: () => ({
      selected: []
    })
  }
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|offIcon|string|'mdi-checkbox-blank-outline'|Set icon when component is inactive. |
|onIcon|string|'mdi-checkbox-blank-blank-outline'|Set the icon when the component is active. |

##### Extends

This component is extended by the following components. This inherits the options used in the source component.

- [Input](../components/SuInput)