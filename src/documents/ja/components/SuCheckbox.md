### Checkbox

`su-checkbox`コンポーネントは、ユーザーに2つの値から選択する機能を提供します。

<su-divider class="mb-8" />

#### 使い方

現在のステータスは、**v-model**ディレクティブを使用して取得できます。

単一の`su-checkbox`の値はブール値です。

<example file='SuCheckbox/uses1' />

複数の`su-checkbox`を使用している場合、配列を使用して**v-model**を共有できます。

<example file='SuCheckbox/uses2' />

#### サンプル

##### プロパティ

###### Icon

**on-icon**および**off-icon**を使用して、チェックボックスアイコンをカスタマイズできます。

<example file='SuCheckbox/props/icon' />