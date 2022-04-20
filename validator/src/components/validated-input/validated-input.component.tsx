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

  @Prop()
  type = 'text';

  @Prop()
  placeholder = '';

  @Prop()
  size: InputSize = 'medium';

  @Prop()
  validationPattern: string;

  @Event()
  userInputChanged: EventEmitter<string>;

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
