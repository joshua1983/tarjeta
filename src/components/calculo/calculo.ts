import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'Calculo',
  templateUrl: 'calculo.html'
})
export class CalculoComponent {

  error: string;
  @Input() valor: number;
  @Input() interes: number;
  @Input() cuotas: number;
  pagos: Array<{
    capital :number,
    interes :number,
    pago :number,
    balance :number
  }>;
  cuota: number;

  constructor(public navParams: NavParams) {
    this.valor = navParams.get("valor");
    this.interes = navParams.get("interes");
    this.cuotas = navParams.get("cuotas");
    this.error = '-';
    this.cuota = 0;
  }

  

}
