import {Component, EventEmitter, h, Prop, Event, State} from '@stencil/core';

export type InputSize = 'medium' | 'large';

@Component({
  tag: 'custom-input',
  styleUrl: 'custom-input.scss',
  shadow: true,
})
// tslint:disable-next-line:component-class-suffix
export class CustomInput {

  @State()
  value: string;

  @Prop({mutable: true})
  isValid = true;

  @Prop()
  type = 'text';

  @Prop()
  placeholder = '';

  @Prop()
  size: InputSize = 'medium';

  @Prop()
  validationPattern;

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

  setValidation(value: boolean): void {
    this.isValid = value;
    this.validationChanged.emit(value);
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
      <div class={'custom-input-container'}>
        <input type={this.type}
               value={this.value}
               placeholder={this.placeholder}
               onInput={(ev) => this.handleChange(ev)}
               class={`custom-input-container__input custom-input-container__input--${this.size} ${!this.isValid ? 'custom-input-container__input--invalid' : ''}`}
        />
        <p class={'custom-input-container__error'}>Fill a valid <span class={'custom-input-container__error--upper'}>{this.type}</span></p>
      </div>
    );

}
}
