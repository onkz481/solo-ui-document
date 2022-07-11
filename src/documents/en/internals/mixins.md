#### Mixins

Many of the components have common properties due to**Vue**'s `mixins` feature.<br />This page is a list of currently implemented `mixins`.

##### Colorable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|color|string|undefined|Applies the specified color to the component.|

##### Dimensionable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|height|number|undefined|Specifies the height of the component.|
|maxHeight|number|undefined|Specifies the maximum height of the component.|
|maxWidth|number|undefined|Specifies the maximum width of the component.|
|minHeight|number|undefined|Specifies the minimum height of the component.|
|minWidth|number|undefined|Specifies the minimum width of the component.|
|width|number|undefined|Specifies the width of the component.|

##### Elevatable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|elevation|number|undefined|Specifies the height of the component. Possible values are in the range "0 to 24".|

##### Overlayable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|hide-overlay|boolean|false|Hide the overlay.|

##### Roundable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|rounded|string|undefined|Add**border-radius**to the component. Possible values are**none**,**small**,**normal**,**medium**,**large**.|
|tile|boolean|false|Add**border-radius: 0px**to the component. This takes precedence over the**rounded**property.|

##### Routable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|active-class|string|undefined|Specifies the class that will be applied when the component is active.|
|disabled|boolean|false|Disables component linking.|
|target|boolean|false|Specifies the**target**attribute of the component.|

##### Tagable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|tag|string|'div'|Specify the tag of the component.|

##### Themeable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|theme|string|undefined|Specifies the theme of the component. By default, the browser's system default values apply.|

##### Transitionable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|transition|string|'fade'|Add**transition**to the component movement.|

##### Validatable

|Name|Type|Default|Description|
|----|----|-------|-----------|
|disabled|boolean|false|Disable the verification function.|
|error|boolean|false|Set the current status to**Error**status.|
|error-count|number|1|You can specify the number of cumulative messages to display in the**rules**property. The initial value is "1".|
|error-messages|string, array|[]|Specifies the message to display if the current status is error status.|
|messages|string, array|[]|Set the message that is always displayed. You can make a message multiple lines by passing the message as an array.|
|rules|array|[]|You can set multiple functions as an array. The input value is passed as an argument to the set function. Also, the function must have a return value of `true`/`false` or a string (error message).|