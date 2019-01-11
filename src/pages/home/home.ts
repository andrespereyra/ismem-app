import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { NotasPage } from '../notas/notas';
import { AlumnosPage } from '../alumnos/alumnos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

    irHorario(){
      this.navCtrl.setRoot(ListPage); //Selects the first tab
    }
    irNotas(){
      this.navCtrl.setRoot(NotasPage); //Selects the first tab
    }
    irAlumnos(){
      this.navCtrl.setRoot(AlumnosPage); //Selects the first tab
    }

}
