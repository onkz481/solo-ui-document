### SlideGroup

`su-slide-group`コンポーネントは、`su-slide-item`に応じて、スクロール可能な領域を設定します。

<su-divider class="mb-8" />

#### Usage

`su-slide-group`コンポーネントは、`su-slide-item`コンポーネントを参照して、スクロールに必要な領域を自動的に設定します。ユーザーは、設定された領域を左右に移動できます。

```html
<template>
  <su-slide-group
    active-class="primary"
  >
    <su-row>
      <su-col
        v-for="n in 10"
        :key="n"
      >
        <su-slide-item
          v-slot="{ active, toggle }"
        >
          <su-card
            width="150"
            height="200"
            @click="toggle"
          >
            <su-transition
              transition="slide-y"
            >
              <div
                v-show="active"
                style="height: 100%;"
                class="text-h4 d-flex align-center justify-center"
              >
                <span v-text="`Active ${n}`" />
              </div>
            </su-transition>
          </su-card>
        </su-slide-item>
      </su-col>
    </su-row>
  </su-slide-group>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|'su-slide-item--active'|コンポーネントがアクティブ時に適用されるクラス名を設定します。|
|next-icon|string|'mdi-chevron-right'|ペジネーションアイコンを設定します。|
|prev-icon|string|'mdi-chevron-right'|ペジネーションアイコンを設定します。|
|show-arrows|boolean|false|ペジネーションアイコンの表示・非表示を切り替えます。|

##### Extends

このコンポーネントは、以下コンポーネントによって拡張されています。これにより、拡張元コンポーネントで使用されているオプションが継承されます。

- [ItemGroup](../components/SuItemGroup)