### Textarea

The `su-textarea` component helps you enter large amounts of text data. Also, because we are using the `su-input` component internally, we can use the properties of the <r-link to="components/SuInput">SuInput</r-link> document.

<su-divider class="mb-8" />

#### How to Use

The `su-textarea` component works independently.

<example file='SuTextarea/uses' />

#### Sample

##### Props

###### Clearable

If **clearable** is specified, a button will be added to delete all input values.

<example file='SuTextarea/props/clearable' />

###### Icon

You can use the **prepend-icon**, **append-icon**, **prepend-inner-icon**, and **append-inner-icon** properties to place icons outside and inside the input field.

<example file='SuTextarea/props/icon' />

###### Label

You can add a label to the input field using the **label** property.

<example file='SuTextarea/props/label' />

##### Events

###### Icon

You can use `click:prepare-inner`, `click:append-inner`, `click:prepare-outer`, and `click:append-outer` to set the click event for each icon.

<example file='SuTextarea/events/icon' />