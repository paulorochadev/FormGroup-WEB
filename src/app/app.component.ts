import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FormGroup-WEB';

  private formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    rua: [null, Validators.required],
    numero: [null, Validators.required],
    complemento: [null],
  });

  onClick(){
    console.log(this.form)
  }
}