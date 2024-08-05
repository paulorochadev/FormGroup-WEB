import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {
  label = input.required();
  inputValue = '';

  // Setup
  private ngControl = inject(NgControl, { optional: true });
  protected onTouched?: () => {};
  protected onChange?: (value: string) => {}
  protected isDisabled = false;

  /**
   *
   */
  constructor() {
    if (this.ngControl)
      this.ngControl.valueAccessor = this;
  }

  // Como que o Angular vai setar um valor no seu Componente
  writeValue(obj: string): void {
    this.inputValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
