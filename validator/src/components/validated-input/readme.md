# validated-input



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                     | Type                  | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------- | --------------------- | ----------- |
| `placeholder`       | `placeholder`        | Placeholder attribute value of an HTML input element            | `string`              | `''`        |
| `size`              | `size`               | Defines size of the input element                               | `"large" \| "medium"` | `'medium'`  |
| `type`              | `type`               | Type attribute value of an HTML input element                   | `string`              | `'text'`    |
| `validationPattern` | `validation-pattern` | Regular expression in string form as consumed by RegExp objects | `string`              | `undefined` |


## Events

| Event               | Description                                                                                                                                | Type                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `userInputChanged`  | This event is triggered when value of an input is changed, either by typing or pasting in. Current value is passed to the callback         | `CustomEvent<string>`  |
| `validationChanged` | This event is triggered when input changes state from valid to invalid, and vice versa. Current validation state is passed to the callback | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
