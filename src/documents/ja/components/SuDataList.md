### DataList

`su-data-list`コンポーネントは、複数の情報を分割して表示する機能を提供します。

<su-divider class="mb-8" />

#### Usage

**items**、**to**、**total** プロパティは、`su-data-list` コンポーネントが正しく機能するために必要です。

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

|Name|Type|Default|Description|
|----|----|-------|-----------|
|items|array|[]|表示されるアイテムの配列オブジェクトを指定します。|
|to|number|0|表示するアイテムの番号を設定します。|
|total|number|1|**items** で指定された配列の総数を設定します。|
|loading|boolean|false|処理が進行中であることをユーザに伝えます。|
|emptyText|string|undefined|**items** が空の場合に表示するテキストを設定します。|
|mostBottomText|string|undefined|データが最後まで表示されたことを示すテキストを設定します。|

##### Slots

<example file='SuDataList/slots/defaultSlot' />

|Name|Props|Description|
|----|----|-------|
|default|\{ item \}|リストをカスタマイズすることができます。スロットプロパティを使用して、**items prop**で渡されたアイテムにアクセスできます。|

##### Events

<example file='SuDataList/events/more' />

|Name|Description|
|----|----|
|more|未取得のデータがある場合に表示される `su-btn`コンポーネントをクリックすると発生します。|