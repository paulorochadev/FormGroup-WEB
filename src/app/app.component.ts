import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "./components/input/input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, InputComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FormGroup-WEB';

  private formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    nome: [null, Validators.required],
    rua: [null, Validators.required],
    numero: [null, Validators.required],
    complemento: [null],
  });

  protected meuInput ='';

  /**
   *
   */
  constructor() {
    // this.form.controls.nome.disable()
  }

  onClick(){
    // console.log(this.form);
    console.log(this.meuInput);
  }
}