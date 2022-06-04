### TextField

The `su-text-field` component provides a user-editable text input form. Also, because we are using the `su-input` component internally, we can use the properties of the <r-link to="components/SuInput">SuInput</r-link> document.

<su-divider class="mb-8" />

#### How to Use

The label property is a good way to explain to the user the role of the input field.

<example file='SuTextField/uses' />

#### Sample

##### Props

###### Clearable

If **clearable** is specified, a button will be added to delete all input values.

<example file='SuTextField/props/clearable' />

###### Icon

You can use the **prepend-icon**, **append-icon**, **prepend-inner-icon**, and **append-inner-icon** properties to place icons outside and inside the input field.

<example file='SuTextField/props/icon' />

###### Label

You can add a label to the input field using the **label** property.

<example file='SuTextField/props/label' />

##### Events

###### Icon

You can use `click:prepare-inner`, `click:append-inner`, `click:prepare-outer`, and `click:append-outer` to set the click event for each icon.

<example file='SuTextField/events/icon' />