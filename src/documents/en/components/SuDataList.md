### DataList

The `su-data-list` component provides the ability to split and display multiple pieces of information.

<su-divider class = "mb-8" />

#### Usage

The **items**, **to**, **total** properties are required for the `su-data-list` component to function properly.

```html
<template>
  <su-data-list
    :items="items"
    :to="to"
    :total="total"
    :loading="loading"
    @more="getItems"
  >
    <template #default="{ item }">
      <su-list-item>
        <su-list-item-icon>
          <su-icon v-text="item.icon" />
        </su-list-item-icon>

        <su-list-item-content>
          <su-list-item-title v-text="item.title" />
        </su-list-item-content>
      </su-list-item>
    </template>
  </su-data-list>
</template>
```

```js
<script>
  export default {
    data: () => ({
      items: [],
      to: 0,
      total: 1,
      loading: false,
      dummyOptions: {
        page: 1,
        itemsPerPage: 5,
        to: 0,
        total: 15
      },
    }),
    methods: {
      getItems(){
        this.loading = true

        this.dummyApi().then((res) => {
          this.items.push(...res.data.data)

          this.to = res.to
          this.total = res.total

          this.loading = false
        })
      },
      dummyApi(){
        return new Promise((resolve) => {
          window.setTimeout(() => {
            let data = []
            for( let i = this.dummyOptions.to; i < (this.dummyOptions.to + this.dummyOptions.itemsPerPage); i++ ){
                data.push({ id: i, title: 'item ' + (i + 1), icon: 'mdi-account-circle' })
            }

            this.dummyOptions.to += this.dummyOptions.itemsPerPage

            this.dummyOptions.page++

            resolve({
              data: {
                  data: data
              },
              to: this.dummyOptions.to,
              total: this.dummyOptions.total
            })
          }, 1000)
        })
      },
    }
  }
</script>
```

#### Options

<sample class="mb-4" />

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