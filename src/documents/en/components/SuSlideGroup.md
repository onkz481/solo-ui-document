### SlideGroup

The `su-slide-group` component sets the scrollable area according to the` su-slide-item`.

<su-divider class = "mb-8" />

#### Usage

The `su-slide-group` component references the` su-slide-item` component and automatically sets the area required for scrolling. The user can move the set area left or right.

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

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active-class | string |'su-slide-item--active' | Sets the class name applied when the component is active. |
| next-icon | string |'mdi-chevron-right' | Set the pagetion icon. |
| prev-icon | string |'mdi-chevron-right' | Set the pagination icon. |
| show-arrows | boolean | false | Shows / hides the pagetion icon. |

##### Extends

This component has been extended by the following components: This inherits the options used by the source component.

- [ItemGroup](../components/SuItemGroup)