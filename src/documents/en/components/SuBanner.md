### Banner

The `su-banner` component displays an important, concise message and allows the user to take action.

<su-divider class="mb-8" />

#### Usage

The **icon** slot can display any icon on the banner.
The **actions** slot can be used to display a button and prompt the user for some action.

```html
<template>
  <su-banner>
    <template #icon>
      <su-icon>
        mdi-information-outline
      </su-icon>
    </template>

    This sentence is a dummy. It is included to check the size, amount, character spacing, line spacing, etc. of characters.

    <template #actions>
      <su-btn
        text
      >
        action1
      </su-btn>
      
      <su-btn
        text
      >
        action2
      </su-btn>
    </template>
  </su-banner>
</template>
```

#### Options

<sample class="mb-4" />

##### Props

|Name|Type|Default|Description|
|----|----|-------|-----------|
|single-line|boolean|false|Omit messages longer than one line. |

##### Extends

This component is extended by the following components. This inherits the options used in the source component.

- [Sheet](../components/SuSheet)

#### Slots

|Name|Description|
|----|-----------|
|icon|You can add any icon using the `su-icon` component.|
|actions|You can add any button using the `su-btn` component.|