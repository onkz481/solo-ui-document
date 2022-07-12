### Menu

The `su-menu` component displays the menu at the specified element position.

<su-divider class = "mb-8" />

#### Usage

It consists of **activator** and **default** slots. Place the trigger element in the **activator** slot.

```html
<template>
  <su-menu>
    <template v-slot:activator="{ on }">
      <su-btn
        v-on="on"
      >
        menu
      </su-btn>
    </template>

    <su-card>
      <su-list>
        <su-list-item
          link
        >
          <su-list-item-content>
            <su-list-item-title>
              List 1
            </su-list-item-title>
          </su-list-item-content>
        </su-list-item>

        <su-list-item
          link
        >
          <su-list-item-content>
            <su-list-item-title>
              List 1
            </su-list-item-title>
          </su-list-item-content>
        </su-list-item>
      </su-list>
    </su-card>
  </su-menu>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| bottom | boolean | false | Places the menu at the bottom of the trigger element. |
| close-on-content-click | boolean | true | Specifies whether to close the menu when the content is clicked. |
| left | boolean | false | Places the menu to the left of the trigger element. |
| offset-x | boolean | false | Offsets the menu on the X-axis. |
| offset-y | boolean | false | Offsets the menu on the Y axis. |
| right | boolean | false | Places the menu to the right of the trigger element. |
| top | boolean | false | Places the menu at the top of the trigger element. |

##### Mixins

This component has the following common properties:

- [Elevatable](../internals/mixins#Elevatable)
- [Transitionable](../internals/mixins#Transitionable)