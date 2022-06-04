### DataList

`su-data-list`コンポーネントは、複数の情報を分割して表示する機能を提供します。

<su-divider class="mb-8" />

#### 使い方

**items**、**to**、**total** プロパティは、`su-data-list` コンポーネントが正しく機能するために必要です。

<example file='SuDataList/uses' />

#### サンプル

##### プロパティ

###### Loading

**loading prop**は、処理が進行中であることをユーザーに知らせます。

<example file='SuDataList/props/loading' />

###### EmptyText

**emptyText prop**は、**items prop**が空の場合に表示するテキストを指定します。

<example file='SuDataList/props/emptyText' />

###### MostBottomText

**mostBottomText prop**は、データが最後まで表示されたことを示すテキストを指定します。

<example file='SuDataList/props/mostBottomText' />

##### イベント

###### More

**more event**は、未取得のデータがある場合に表示される `su-btn`コンポーネントをクリックすると発生します。

<example file='SuDataList/events/more' />

##### スロット

###### DefaultSlot

**default slot**は、リストをカスタマイズすることができます。スロットプロパティを使用して、**items prop**で渡されたアイテムにアクセスできます。

<example file='SuDataList/slots/defaultSlot' />