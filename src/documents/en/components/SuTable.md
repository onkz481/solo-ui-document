### Table

The `su-table` component is used to display data in tabular format.

<su-divider class = "mb-8" />

#### Usage

Generates a "table" element based on the values specified in the **headers** and **items** properties.

```html
<template>
  <su-table
    :headers="headers"
    :items="items"
  />
</template>
```

```js
<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'header name',
        value: 'name'
      },
      {
        text: 'header value',
        value: 'value'
      }
    ],
    items: [
      {
        name: 'item name 1 <code>code</code>',
        value: 'item value 1'
      },
      {
        name: 'item name 2',
        value: 'item value 2'
      }
    ]
}
</script>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| headers | array | [] | Specifies the object of the array that will be the column of the header. |
| hide-footer | boolean | false | Hides the default footer of the table. |
| hide-table-header | boolean | false | Hide table default headers |
| items | array | [] | Specifies an array object of the items displayed in the table. |
| itemsPerPage | number | 5 | Specifies the number of items displayed per page. |
| options | object | \{\} | Specifies the value of the option currently applied to the display of the table. You can always synchronize by using the `.sync` modifier. |
| page | number | 1 | Specifies the page to display. |