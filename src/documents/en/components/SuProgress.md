### Progress

The `su-progress` component can be used to create the ability to inform the user of the progress of the process.

<su-divider class = "mb-8" />

#### How to use

<sample />

#### Options

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| background-color | string | undefined | Specifies the background color. |
| background-opacity | string, number | 0.3 | Specifies the transparency of the background. |
| color | string |'primary' | Apply the specified color. |
| indeterminate | boolean | false | If `true`, the value of` value` passed in the default slot is fixed to the string'* indeterminate *'. |

##### Slots

| Name | Props | Description |
| ---- | ----- | ----------- |
| default | & # 123; value, color & # 125; | The value of `value` receives the value of the variable specified in` v-model`. When `indeterminate`prop is enabled, it always returns the '*indeterminate*' string. |