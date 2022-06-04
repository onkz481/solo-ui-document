### Input

`su-input`は、ユーザーがカスタマイズ可能な入力フィールドの基本コンポーネントを提供します。 これは、`su-text-field`や`su-textarea`などの一部のコンポーネントの基礎として使用されます。

<su-divider class="mb-8" />

#### 使い方

`su-input`には、**prepend**、**append**、メッセージ、およびデフォルトのスロットがあります。

<example file='SuInput/uses' />

#### サンプル

##### プロパティ

###### Error

**error**プロパティは、現在のステータスをエラー状態に設定します。

<example file='SuInput/props/error' />

###### ErrorCount

**error-count**プロパティを使用して、**rules**プロパティで累積されたメッセージの表示数を指定できます。初期値は「1」です。

<example file='SuInput/props/errorCount' />

###### ErrorMessages

**error-messages**プロパティは、現在のステータスがエラー状態の場合に表示するメッセージを指定します。

<example file='SuInput/props/errorMessages' />

###### HideDetails

**hide-details**プロパティを指定すると、メッセージが非表示になります。

<example file='SuInput/props/hideDetails' />

###### Hint

**hint**プロパティを使用してヒントを追加できます。 これは、入力フィールドの使用方法をユーザーに伝えるのに役立ちます。

<example file='SuInput/props/hint' />

###### Icon

**prepend-icon**、**append-icon**プロパティを使用して、入力フィールドにアイコンを配置します。

<example file='SuInput/props/icon' />

###### Messages

**messages**プロパティを使用すると、常に表示されるメッセージを指定できます。 メッセージを配列として渡すことにより、メッセージを複数行にすることができます。

<example file='SuInput/props/messages' />

###### Rules

**rules**プロパティを使用することで、カスタムのバリデーションルールを設定できます。このルールは、`true`またはエラーメッセージを返す関数を追加します。

<example file='SuInput/props/rules' />