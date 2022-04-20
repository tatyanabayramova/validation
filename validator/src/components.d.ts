/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InputSize } from "./components/custom-input/custom-input";
export namespace Components {
    interface CustomInput {
        "isValid": boolean;
        "placeholder": string;
        "size": InputSize;
        "type": string;
        "validationPattern": any;
    }
}
declare global {
    interface HTMLCustomInputElement extends Components.CustomInput, HTMLStencilElement {
    }
    var HTMLCustomInputElement: {
        prototype: HTMLCustomInputElement;
        new (): HTMLCustomInputElement;
    };
    interface HTMLElementTagNameMap {
        "custom-input": HTMLCustomInputElement;
    }
}
declare namespace LocalJSX {
    interface CustomInput {
        "isValid"?: boolean;
        "onUserInputChanged"?: (event: CustomEvent<string>) => void;
        "onValidationChanged"?: (event: CustomEvent<boolean>) => void;
        "placeholder"?: string;
        "size"?: InputSize;
        "type"?: string;
        "validationPattern"?: any;
    }
    interface IntrinsicElements {
        "custom-input": CustomInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-input": LocalJSX.CustomInput & JSXBase.HTMLAttributes<HTMLCustomInputElement>;
        }
    }
}
