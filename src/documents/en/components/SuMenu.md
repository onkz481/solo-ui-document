### Menu

The `su-menu` component displays a menu at the specified element position.

<su-divider class="mb-8" />

#### How to Use

It consists of **activator** and **default** slots. Place the trigger element in the **activator** slot.

<example file='SuMenu/uses' />

#### Sample

##### Props

###### OffsetX

Offset the menu on the X axis. You can specify the offset direction using the **left** and **right** properties.

<example file='SuMenu/props/offsetX' />

###### OffsetY

Offset the menu on the Y axis. You can specify the offset direction using the **top** and **bottom** properties.

<example file='SuMenu/props/offsetY' />

###### CloseOnContentClick

The **close-on-content-click** property specifies whether to close the menu when the content is clicked. The default value is **true**.

<example file='SuMenu/props/closeOnContentClick' />