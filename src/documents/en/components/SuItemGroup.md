### ItemGroup

`su-item-group` creates a group of selectable items.

<su-divider class = "mb-8" />

#### Usage

`su-item-group` can use` su-item` on its child components to monitor selected items.

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

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active-class | string |'su-item--active' | Sets the CSS class applied to the active item. |
| mandatory | boolean | false | Forces item selection. |
| multiple | boolean | false | Allows selection of multiple items. |