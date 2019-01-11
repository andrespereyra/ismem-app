import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlumnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumnos',
  templateUrl: 'alumnos.html',
})
export class AlumnosPage {

  ciclos : any;
  alumnos : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ciclos = [



      [
        {
          nombre : "Cristian",
          edad : 24,
          dni : 45454545,
          curso : "computacion",
          foto: 2
        },

        {
          nombre : "Alfredo",
          edad : 35,
          dni : 40673760,
          curso : "computacion",
          foto:3

        },
        {
          nombre : "Yulian",
          edad : 25,
          dni : 42532753,
          curso : "computacion",
          foto:4
        },
        {
          nombre : "Steven",
          edad : 22,
          dni : 43278119,
          curso : "computacion",
          foto:5
        },
        {
          nombre : "Ricardo",
          edad : 18,
          dni : 71241786,
          curso : "computacion",
          foto:6
        },
        {
          nombre : "Britney",
          edad : 19,
          dni : 45743257,
          curso : "computacion",
          foto:7
        },
        {
          nombre : "Dayana",
          edad : 20,
          dni : 46202533,
          curso : "computacion",
          foto:8
        },
      ],



      [
        {
          nombre : "Jhamile",
          edad : 24,
          dni : 42264899,
          curso : "contabilidad",
          foto: 9
        },
        {
          nombre : "Betzabe",
          edad : 35,
          dni : 44936062,
          curso : "contabilidad",
          foto: 10
        },
        {
          nombre : "Brenda",
          edad : 25,
          dni : 41841665,
          curso : "contabilidad",
          foto: 11
        },
        {
          nombre : "Angel",
          edad : 22,
          dni : 41980531,
          curso : "contabilidad",
          foto: 12
        },
        {
          nombre : "Yasmin",
          edad : 18,
          dni : 45460173,
          curso : "contabilidad",
          foto: 13
        },
        {
          nombre : "Geraldo",
          edad : 19,
          dni : 44925744,
          curso : "contabilidad",
          foto: 14
        },
        {
          nombre : "aldahir",
          edad : 20,
          dni : 44705102,
          curso : "contabilidad",
          foto: 15
        },
      ],




      [
        {
          nombre : "Alexandra",
          edad : 20,
          dni : 44121820,
          curso : "computacion",
          foto: 16
        },
        {
          nombre : "Aylin",
          edad : 21,
          dni : 43830345,
          curso : "computacion",
          foto: 17
        },
        {
          nombre : "Elizabeth",
          edad : 23,
          dni : 43668686,
          curso : "computacion",
          foto: 18
        },
        {
          nombre : "deysi",
          edad : 25,
          dni : 42146964,
          curso : "computacion",
          foto: 19
        },
        {
          nombre : "Luis",
          edad : 27,
          dni : 42146964,
          curso : "computacion",
          foto: 20
        },
        {
          nombre : "rocio",
          edad : 22,
          dni : 42146964,
          curso : "computacion",
          foto: 21
        },
        {
          nombre : "melissa ",
          edad : 26,
          dni : 42146964,
          curso : "computacion",
          foto: 22
        },
      ],




      [
        {
          nombre : "Jhony",
          edad : 23,
          dni : 42146964,
          curso : "computacion",
          foto: 23

        },
        {
          nombre : "Alexandra",
          edad : 19,
          dni : 42146964,
          curso : "computacion",
          foto: 24
        },
        {
          nombre : "Pedro",
          edad : 27,
          dni : 42146964,
          curso : "computacion",
          foto: 25
        },
        {
          nombre : "Elizabeth",
          edad : 26,
          dni : 42146964,
          curso : "computacion",
          foto: 26
        },
        {
          nombre : "Maria",
          edad : 26,
          dni : 42146964,
          curso : "computacion",
          foto: 27
        },
        {
          nombre : "Daniela",
          edad : 18,
          dni : 42146964,
          curso : "computacion",
          foto: 28
        },
        {
          nombre : "Debora",
          edad : 19,
          dni : 42146964,
          curso : "computacion",
          foto: 29
        }, 
      ],

            [
        {
          nombre : "Caroline",
          edad : 20,
          dni : 42146964,
          curso : "contabilidad",
          foto: 30
        },
        {
          nombre : "Rocio",
          edad : 21,
          dni : 42146964,
          curso : "contabilidad",
          foto: 31
        },
        {
          nombre : "Brenda",
          edad : 23,
          dni : 42146964,
          curso : "contabilidad",
          foto: 32
        },
        {
          nombre : "Jorge",
          edad : 25,
          dni : 42146964,
          curso : "contabilidad",
          foto: 33
        },
        {
          nombre : "Jose",
          edad : 27,
          dni : 42146964,
          curso : "contabilidad",
          foto: 34
        },
        {
          nombre : "Mauricio",
          edad : 22,
          dni : 42146964,
          curso : "contabilidad",
          foto: 35
        },
        {
          nombre : "Sergio",
          edad : 26,
          dni : 42146964,
          curso : "contabilidad",
          foto: 36
        },
      ],




      [
        {
          nombre : "Jhony",
          edad : 23,
          dni : 42146964,
          curso : "contabilidad",
          foto: 37
        },
        {
          nombre : "Alexandra",
          edad : 19,
          dni : 42146964,
          curso : "contabilidad",
          foto: 38
        },
        {
          nombre : "Pedro",
          edad : 27,
          dni : 42146964,
          curso : "contabilidad",
          foto: 39
        },
        {
          nombre : "Elizabeth",
          edad : 26,
          dni : 42146964,
          curso : "contabilidad",
          foto: 40
        },
        {
          nombre : "Maria",
          edad : 26,
          dni : 42146964,
          curso : "contabilidad",
          foto: 41
        },
        {
          nombre : "Daniela",
          edad : 18,
          dni : 42146964,
          curso : "contabilidad",
          foto: 42
        },
        {
          nombre : "Debora",
          edad : 19,
          dni : 42146964,
          curso : "contabilidad",
          foto: 43
        }, 
      ],



    ];

    this.alumnos = this.ciclos[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumnosPage');
  };

  

  cambiarCiclo() {
    this.alumnos = this.ciclos[this.ciclo];
  }

} 
