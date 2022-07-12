### Icon

The `su-icon` component provides the ability to add a single icon to a page. See the official [Material Design Icons](https://materialdesignicons.com/) page for all available icons.

<su-divider class = "mb-8" />

#### Usage

The default slot of the `su-icon` component describes the icon name.

```html
<su-icon>
  mdi-home
</su-icon>
```

#### Options

<sample class="mb-4" />

##### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| disabled | boolean | false | Disables the icon. |
| large | boolean | false | Set **Width**, **Height** of the component to "32px". |
| small | boolean | false | Set **Width**, **Height** of the component to "16px". |
| src | string | undefined | You can also set the URL of the image file. |

##### Mixins

This component has the following common properties:

- [Colorable](../internals/mixins#Colorable)
- [Themeable](../internals/mixins#Themeable)