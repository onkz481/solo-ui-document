#### ミックスイン

**Vue** の`mixins`機能により、多くのコンポーネントに共通のプロパティがあります。<br />このページは、現在実装されている`mixins`のリストです。

##### Colorable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|color|string|undefined|指定した色をコンポーネントに適用します。|

##### Dimensionable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|height|number|undefined|コンポーネントの高さを指定します。|
|maxHeight|number|undefined|コンポーネントの最大の高さを指定します。|
|maxWidth|number|undefined|コンポーネントの最大幅を指定します。|
|minHeight|number|undefined|コンポーネントの最小の高さを指定します。|
|minWidth|number|undefined|コンポーネントの最小幅を指定します。|
|width|number|undefined|コンポーネントの幅を指定します。|

##### Elevatable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|elevation|number|undefined|コンポーネントの高さを指定します。 可能な値は「0~24」の範囲です。|

##### Overlayable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|hide-overlay|boolean|false|オーバーレイを非表示にします。|

##### Roundable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|rounded|string|undefined|コンポーネントに **border-radius** を追加します。指定できる値は、**none** , **small** , **normal** , **medium** , **large** です。|
|tile|boolean|false|コンポーネントに **border-radius: 0px** を追加します。これは、**rounded** プロパティよりも優先されます。|

##### Routable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|undefined|コンポーネントがアクティブ状態のときに適用されるクラスを指定します。|
|disabled|boolean|false|コンポーネントのリンクを無効にします。|
|target|boolean|false|コンポーネントの **target** 属性を指定します。|

##### Tagable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|tag|string|'div'|コンポーネントのタグを指定します。|

##### Themeable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|theme|string|undefined|コンポーネントのテーマを指定します。既定では、ブラウザのシステムデフォルトの値が適用されます。|

##### Transitionable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|transition|string|'fade'|コンポーネントの動きに **transition** を追加します。|

##### Validatable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|disabled|boolean|false|検証機能を無効にします。|
|error|boolean|false|現在のステータスを**エラー**状態に設定します。|
|error-count|number|1|**rules** プロパティで累積されたメッセージの表示数を指定できます。初期値は「1」です。|
|error-messages|string, array|[]|現在のステータスがエラー状態の場合に表示するメッセージを指定します。|
|messages|string, array|[]|常に表示されるメッセージを設定します。 メッセージを配列として渡すことにより、メッセージを複数行にすることができます。|
|rules|array|[]|配列として、複数の関数を設定できます。設定した関数には入力値が引数として渡されます。また、関数は戻り値が`true`/`false`または文字列（エラーメッセージ）である必要があります。|