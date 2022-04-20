import {Component, EventEmitter, h, Prop, Event, State} from '@stencil/core';

export type InputSize = 'medium' | 'large';

@Component({
  tag: 'validated-input',
  styleUrl: 'validated-input.scss',
  shadow: true,
})
// tslint:disable-next-line:component-class-suffix
export class ValidatedInput {

  @State()
  value: string;

  @State()
  isValid = true;

  /**
   * Type attribute value of an HTML input element
   */
  @Prop()
  type = 'text';

  /**
   * Placeholder attribute value of an HTML input element
   */
  @Prop()
  placeholder = '';

  /**
   * Defines size of the input element
   */
  @Prop()
  size: InputSize = 'medium';

  /**
   * Regular expression in string form as consumed by RegExp objects
   */
  @Prop()
  validationPattern: string;

  /**
   * This event is triggered when value of an input is changed, either by typing or pasting in. Current value is passed to the callback
   */
  @Event()
  userInputChanged: EventEmitter<string>;

  /**
   * This event is triggered when input changes state from valid to invalid, and vice versa. Current validation state is passed to the callback
   */
  @Event()
  validationChanged: EventEmitter<boolean>;

  isInputValid(value: string): boolean {
    return !value || !!value?.match(this.validationPattern);
  }

  handleChange(event): void {
    const value = event?.target?.value;
    this.handleUserInputChange(value);
    this.handleValidationChange(value);
  }

  handleUserInputChange(value: string): void {
    this.value = value;
    this.userInputChanged.emit(value);
  }

  setValidation(isValid: boolean): void {
    this.isValid = isValid;
    this.validationChanged.emit(isValid);
  }

  handleValidationChange(value: string): void {
    const isValid = this.isInputValid(value);

    if (isValid !== this.isValid) {
      this.setValidation(isValid);
    }
  }

  // tslint:disable-next-line:typedef
  render() {
    return (
      <div class={'validated-input-container'}>
        <input type={this.type}
               value={this.value}
               placeholder={this.placeholder}
               onInput={(ev) => this.handleChange(ev)}
               class={this.getInputClass()}
        />
        {this.renderErrorMessage()}
      </div>
    );
  }

  private getInputClass() {
    return `validated-input-container__input validated-input-container__input--${this.size} ${!this.isValid ? 'validated-input-container__input--invalid' : ''}`;
  }

  private renderErrorMessage() {
    return <p class={'validated-input-container__error'}>
      Fill a valid <span class={'validated-input-container__error--upper'}>{this.type}</span>
    </p>;
  }
}
