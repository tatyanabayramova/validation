/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InputSize } from "./components/validated-input/validated-input.component";
export namespace Components {
    interface ValidatedInput {
        /**
          * Placeholder attribute value of an HTML input element
         */
        "placeholder": string;
        /**
          * Defines size of the input element
         */
        "size": InputSize;
        /**
          * Type attribute value of an HTML input element
         */
        "type": string;
        /**
          * Regular expression in string form as consumed by RegExp objects
         */
        "validationPattern": string;
    }
}
declare global {
    interface HTMLValidatedInputElement extends Components.ValidatedInput, HTMLStencilElement {
    }
    var HTMLValidatedInputElement: {
        prototype: HTMLValidatedInputElement;
        new (): HTMLValidatedInputElement;
    };
    interface HTMLElementTagNameMap {
        "validated-input": HTMLValidatedInputElement;
    }
}
declare namespace LocalJSX {
    interface ValidatedInput {
        /**
          * This event is triggered when value of an input is changed, either by typing or pasting in. Current value is passed to the callback
         */
        "onUserInputChanged"?: (event: CustomEvent<string>) => void;
        /**
          * This event is triggered when input changes state from valid to invalid, and vice versa. Current validation state is passed to the callback
         */
        "onValidationChanged"?: (event: CustomEvent<boolean>) => void;
        /**
          * Placeholder attribute value of an HTML input element
         */
        "placeholder"?: string;
        /**
          * Defines size of the input element
         */
        "size"?: InputSize;
        /**
          * Type attribute value of an HTML input element
         */
        "type"?: string;
        /**
          * Regular expression in string form as consumed by RegExp objects
         */
        "validationPattern"?: string;
    }
    interface IntrinsicElements {
        "validated-input": ValidatedInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "validated-input": LocalJSX.ValidatedInput & JSXBase.HTMLAttributes<HTMLValidatedInputElement>;
        }
    }
}
