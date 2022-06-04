### Transition

Vueの`transition`システムを使用して、アプリケーションの動作を制御する機能を提供します。

<su-divider class="mb-8" />

#### 使い方

カスタムトランジションを適用するには、`su-transition`または`su-expand-transition`でラッピングする必要があります。

<example file='Transition/uses' />

#### サンプル

##### プロパティ

###### Transition

**transition** プロパティは、アニメーションを指定するために使用されます。

<example file='Transition/props/transition' />

###### Origin

**origin** プロパティは、**scale** トランジションと組み合わせることが出来ます。

<example file='Transition/props/origin' />

##### その他

###### ExpandX

`su-expand-transition`は、x プロパティを指定することで水平方向のアニメーションに変更できます。

<example file='Transition/others/expandX' />

###### SlideSwitch

`su-slide-switch-transition` は、複数のコンテンツをスライドさせるカスタムトランジションです。これは、`su-window`コンポーネントのコアに使用され、通常は **su-window** を使用することをお勧めします。

<example file='Transition/others/slideSwitch' />