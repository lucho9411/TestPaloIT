import { Component, OnInit } from '@angular/core';
import { AlertUtilityService } from 'src/app/services/alert-utility.service';

@Component({
  selector: 'app-pantalla-inicial',
  templateUrl: './pantalla-inicial.component.html',
  styleUrls: ['./pantalla-inicial.component.css']
})

export class PantallaInicialComponent implements OnInit {

  cadena: string;
  numero: string | undefined;

  constructor(private alertUtilityService: AlertUtilityService) { }

  ngOnInit(): void {
  }

  soloNumeros(event: any){
    var code = (event.which) ? event.which : event.keyCode;
    if(code == 8) {
        return true;
    } 
    else if(code >= 48 && code <= 57) {
        return true;
    } 
    else{
        return false;
    }
  }

  calcularNumeroSuerte(){
    this.alertUtilityService.openLoading;
    if(this.cadena.length < 14 || this.cadena.length > 16){
      this.alertUtilityService.openError('El número no tiene entre 14 y 16 dígitos!');
    }
    else{
      let cantAnt = 0;
      let digitoAnt = '';
      let digito = '';
      for (let index1 = 0; index1 < this.cadena.length; index1++) {
        digito = this.cadena.charAt(index1);
        let cantidad = 0;
        for (let index2 = 0; index2 < this.cadena.length; index2++) {
          if(digito === this.cadena.charAt(index2)){
            cantidad++;
          }
        }
        if(cantidad >= cantAnt){
          cantAnt = cantidad;
          digitoAnt = digito;
        }
      }
      this.numero = digitoAnt;
      console.log('Cantidad de veces: ' + cantAnt);
      this.alertUtilityService.openSave('El número de la suerte es ' + digitoAnt);
    }
  }

}
