### Banner

The `su-banner` component displays important and concise messages and provides actions for the user to take action on.

<su-divider class="mb-8" />

#### How to Use

A banner displays a prominent message and related optional actions.

<example file='SuBanner/uses' />

#### Sample

##### Props

###### SingleLine

Specifying the **singleLine** property omits messages that are longer than one line.

<example file='SuBanner/props/singleLine' />

##### Slots

###### ActionClose

You can use the **close** slot property of the **action** slot to close the banner at any time.

<example file='SuBanner/slots/actionClose' />