### Input

`su-input` provides the basic components of a user-customizable input field. It is used as the basis for some components such as `su-text-field` and `su-textarea`.

<su-divider class="mb-8" />

#### How to Use

`su-input` has **prepend**, **append**, messages, and default slots.

<example file='SuInput/uses' />

#### Sample

##### Props

###### Error

The **error** property sets the current status to error status.

<example file='SuInput/props/error' />

###### ErrorCount

You can use the **error-count** property to specify the number of messages that have been accumulated in the **rules** property. The initial value is "1".

<example file='SuInput/props/errorCount' />

###### ErrorMessages

The **error-messages** property specifies the messages to display if the current status is error status.

<example file='SuInput/props/errorMessages' />

###### HideDetails

Specifying the **hide-details** property hides the message.

<example file='SuInput/props/hideDetails' />

###### Hint

You can add hints by using the **hint** property. This is useful for telling the user how to use the input field.

<example file='SuInput/props/hint' />

###### Icon

Use the **prepend-icon** and **append-icon** properties to place the icon in the input field.

<example file='SuInput/props/icon' />

###### Messages

The **messages** property allows you to specify the messages that are always displayed. You can make the message multiple lines by passing it as an array.

<example file='SuInput/props/messages' />

###### Rules

You can set custom validation rules by using the **rules** property. The rule adds a function that returns a `true` or error message.

<example file='SuInput/props/rules' />