### DataList

`su-data-list`コンポーネントは、複数の情報を分割して表示する機能を提供します。

<su-divider class="mb-8" />

#### 使い方

**items**、**to**、**total** プロパティは、`su-data-list` コンポーネントが正しく機能するために必要です。

<sample />

#### Options

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