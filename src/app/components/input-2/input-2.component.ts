import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-input-2',
  standalone: true,
  host: {
    '[class.red]' : 'isPrimary()',
  },
  imports: [],
  templateUrl: './input-2.component.html',
  styleUrl: './input-2.component.scss'
})
export class Input2Component {

  isPrimary = input(false, {
    transform: booleanAttribute
  });

}
