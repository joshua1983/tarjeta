import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  error: string;
  valor: number;
  interes: number;
  cuotas: number;
  pagos: Array<{
    capital :number,
    interes :number,
    pago :number,
    balance :number
  }>;
  cuota: number;

  constructor(public navCtrl: NavController) {

  }

  calcularCuota(){
    this.pagos = new Array();
    var interes: number;
    interes = this.interes / 100;
    var _R = this.valor/( ( 1 - Math.pow( (1 + interes), (-this.cuotas) ) ) / interes);

    if (interes == 0){
      this.error = "El interes no puede ser cero";
    }
    if (this.valor == 0){
      this.error = "El valor no puede ser cero";
    }
    if (this.cuotas == 0){
      this.cuotas = 1;
    }
    
    for (var i=0; i<this.cuotas; i++){
      var cuotaPago = {
        capital :0,
        interes :0,
        pago :0,
        balance :0
      };
      if (i > 0){
        cuotaPago.pago = _R;
        if (interes == 1){
          cuotaPago.capital = this.valor;
          cuotaPago.interes = 0;
          cuotaPago.pago = this.valor;
          cuotaPago.balance = 0;
        }else{
          var cuotaAnterior = this.pagos[i -1];
          cuotaPago.interes = cuotaAnterior.balance * interes;
          cuotaPago.capital = cuotaPago.pago - cuotaPago.interes;
          cuotaPago.balance = cuotaPago.balance - cuotaPago.capital;
          
        }
      }else{
        cuotaPago.balance = this.valor;
      }
      this.pagos.push(cuotaPago);
    }

  }

}
