import { Component, Input } from '@angular/core';

@Component({
  selector: 'ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.less']
})
export class FichaComponent {
	@Input() value: 'X' | 'O' = 'X'
}
