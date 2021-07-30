import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertUtilityService {

  constructor() { }

  openLoading() {
    if (!Swal.isVisible()) {
      Swal.fire({
        title: "Proceso en ejecución",
        text: "Por favor espere",
        imageUrl: "assets/images/ajaxloader.gif",
        imageWidth: 80,
        imageHeight: 60,
        showConfirmButton: false,
        allowOutsideClick: false
      });
    } else {
      Swal.close();
      Swal.fire({
        title: "Proceso en ejecución",
        text: "Por favor espere",
        imageUrl: "assets/images/ajaxloader.gif",
        imageWidth: 80,
        imageHeight: 60,
        showConfirmButton: false,
        allowOutsideClick: false
      });
    }
  }

  openCustomMessageLoading(message: string) {
    if (!Swal.isVisible()) {
      Swal.fire({
        title: "Proceso en ejecución",
        text: message,
        imageUrl: "assets/images/ajaxloader.gif",
        imageWidth: 80,
        imageHeight: 60,
        showConfirmButton: false,
        allowOutsideClick: false
      });
    } else {
      Swal.close();
      Swal.fire({
        title: "Proceso en ejecución",
        text: message,
        imageUrl: "assets/images/ajaxloader.gif",
        imageWidth: 80,
        imageHeight: 60,
        showConfirmButton: false,
        allowOutsideClick: false
      });
    }
  }

  openError(message: string) {
    Swal.fire({
      text: message,
      icon: 'error',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => { });
  }

  openSave(message: string) {
    Swal.fire({
      text: message,
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => { });
  }

  warning(message: string) {
    Swal.fire({
      text: message,
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar'
    }).then((result) => { });
  }

  info(message: string) {
    Swal.fire({
      text: message,
      icon: 'info',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar'
    }).then((result) => { });
  }

  closeLoading() {
    Swal.close();
  }

}
