### Banner

`su-banner`コンポーネントは、重要で簡潔なメッセージを表示し、ユーザーがアクションを実行できるようにします。

<su-divider class="mb-8" />

#### 使い方

バナーには、目立つメッセージと関連するオプションのアクションが表示されます。

<example file='SuBanner/uses' />

#### サンプル

##### プロパティ

###### SingleLine

**singleLine**プロパティを指定すると、1行より長いメッセージが省略されます。

<example file='SuBanner/props/singleLine' />

##### スロット

###### ActionClose

**action**スロットの**close**スロットプロパティを使用して、いつでもバナーを閉じることができます。

<example file='SuBanner/slots/actionClose' />