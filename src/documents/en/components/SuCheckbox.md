### Checkbox

The `su-checkbox` component provides the user with the ability to choose between two values.

<su-divider class="mb-8" />

#### How to Use

The current status can be obtained using the **v-model** directive.

A single `su-checkbox` value is a Boolean value.

<example file='SuCheckbox/uses1' />

If you are using multiple `su-checkbox`, you can use an array to share the **v-model**.

<example file='SuCheckbox/uses2' />

#### Sample

##### Props

###### Icon

You can customize the checkbox icon using the **on-icon** and **off-icon**.

<example file='SuCheckbox/props/icon' />