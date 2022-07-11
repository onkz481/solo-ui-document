### DataList

The `su-data-list` component provides the ability to split and display multiple pieces of information.

<su-divider class = "mb-8" />

#### How to use

The **items**, **to**, **total** properties are required for the `su-data-list` component to function properly.

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| items | array | [] | Specifies the array object for the displayed items. |
| to | number | 0 | Set the number of the item to be displayed. |
| total | number | 1 | **Sets the total number of arrays specified by items**. |
| loading | boolean | false | Tells the user that processing is in progress. |
| emptyText | string | undefined | **Set the text to display when items** is empty. |
| mostBottomText | string | undefined | Sets the text that indicates that the data has been displayed to the end. |

##### Slots

<example file ='SuDataList / slots / defaultSlot' />

| Name | Props | Description |
| ---- | ---- | ------- |
| default | \{ item \} | You can customize the list. You can use the slot properties to access the items passed in **items prop**. |

##### Events

<example file ='SuDataList/events/more' />

| Name | Description |
| ---- | ---- |
| more | Occurs when clicking the `su-btn` component that appears when there is unacquired data. |