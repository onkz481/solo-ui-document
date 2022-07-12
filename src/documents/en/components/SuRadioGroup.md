### Radio Button

The `su-radio-group` component is used in combination with the` su-radio` component.

<su-divider class = "mb-8" />

#### Usage

You can use the `su-radio-group` **v-model** to access the selected radio buttons in the group.

```html
<template>
  <div
    class="flex-box"
  >
    <su-radio-group
      v-model="radios"
    >
      <su-radio
        v-for="n in 3"
        :key="n"
        :label="`Radio ${n}`"
        :value="`Radio ${n}`"
      />
    </su-radio-group>
  </div>
</template>
```

```js
<script>
export default {
  data: () => ({
    radios: 'Radio 1'
  })
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| column | boolean | true | Sets the radio group orientation vertically. |
| row | string | false | Sets the radio group orientation horizontally. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [Input](../components/SuInput)
- [ItemGroup](../components/SuItemGroup)