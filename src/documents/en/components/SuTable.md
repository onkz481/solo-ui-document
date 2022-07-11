### Table

The `su-table` component is used to display data in tabular format.

<su-divider class = "mb-8" />

#### How to use

<sample />

#### Options

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