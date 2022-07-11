### TextField

`su-text-field`コンポーネントは、ユーザーが編集可能なテキスト入力フォームを提供します。

<su-divider class="mb-8" />

#### 使い方

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|append-inner-icon|string|undefined|入力フィールドの後方内側に表示されるアイコンを設定します。|
|clearable|boolean|false|すべての入力値を削除するボタンを追加します。|
|clear-icon|string|'mdi-close'|**clearable** が有効時に表示されるアイコンを設定します。|
|prepend-inner-icon|string|undefined|入力フィールドの前方内側に表示されるアイコンを設定します。|
|rounded|string|'normal'|コンポーネントに **border-radius** を追加します。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [Input](/components/SuInput)

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Roundable](/internals/mixins#Roundable)

#### Events

<example file='SuTextField/events/icon' />

|Name|Description|
|----|----|
|click:append|`append-icon`で設定されたアイコンにイベントを追加します。|
|click:append-inner|`append-inner-icon`で設定されたアイコンにイベントを追加します。|
|click:prepend|`prepend-icon`で設定されたアイコンにイベントを追加します。|
|click:prepend-inner|`prepend-inner-icon`で設定されたアイコンにイベントを追加します。|