### DataList

The `su-data-list` component provides the ability to split and display multiple pieces of information.

<su-divider class="mb-8" />

#### How to Use

The **items**, **to**, and **total** properties are required for the `su-data-list` component to function properly.

<example file='SuDataList/uses' />

#### Sample

##### Props

###### Loading

**loading prop** informs the user that processing is in progress.

<example file='SuDataList/props/loading' />

###### EmptyText

**emptyText prop** specifies the text to display if **items prop** is empty.

<example file='SuDataList/props/emptyText' />

###### MostBottomText

**mostBottomText prop** specifies the text that indicates that the data has been displayed to the end.

<example file='SuDataList/props/mostBottomText' />

##### Events

###### More

The **more event** occurs when you click on the `su-btn` component that is displayed when there is unacquired data.

<example file='SuDataList/events/more' />

##### Slots

###### DefaultSlot

The **default slot** allows you to customize the list. You can use the slot properties to access the items passed in **items prop**.

<example file='SuDataList/slots/defaultSlot' />