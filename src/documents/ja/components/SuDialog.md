### Dialog

`su-dialog`コンポーネントは、ページの前面に表示されるポップアップウィンドウ機能を提供します。

<su-divider class="mb-8" />

#### 使い方

これは、**activator**と**default**スロットで構成されています。トリガー要素を**activator**スロットに配置します。

<sample />

#### Options

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|fullscreen|boolean|false|ポップアップウィンドウが拡大され、ブラウザの表示領域全体に表示されます。|
|max-width|number|undefined|ダイアログの最大の横幅を設定します。|
|value|boolean|false|ダイアログの表示・非表示を切り替えます。|
|width|number|undefined|ダイアログの横幅を設定します。|

##### Mixins

このコンポーネントには、以下の共通プロパティがあります。

- [Overlayable](/internals/mixins#Overlayable)
- [Transitionable](/internals/mixins#Transitionable)