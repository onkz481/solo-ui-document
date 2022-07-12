### ItemGroup

`su-item-group`は、選択可能なアイテムのグループを作成します。

<su-divider class="mb-8" />

#### Usage

`su-item-group`は、子コンポーネントに `su-item` を使用して、選択したアイテムを監視できます。

```html
<template>
  <su-item-group
    v-model="group"
  >
    <su-row>
      <su-col
        v-for="n in 3"
        :key="n"
        class="text--center"
      >
        <su-item
          v-slot="{ active, toggle }"
          active-class="primary"
        >
          <su-card
            height="200"
            class="mx-auto"
            @click="toggle"
          >
            <su-transition
              transition="slide-y"
            >
              <div
                v-show="active"
                style="height: 100%;"
                class="text-h4 d-flex align-center justify-center"
                v-text="`Active ${n}`"
              />
            </su-transition>
          </su-card>
        </su-item>
      </su-col>
    </su-row>
  </su-item-group>
</template>
```

```js
<script>
  export default {
    data: () => ({
      group: null
    })
  }
</script>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|'su-item--active'|アクティブなアイテムに適用されるCSSクラスを設定します。|
|mandatory|boolean|false|アイテムの選択を強制します。|
|multiple|boolean|false|複数アイテムの選択を許可します。|