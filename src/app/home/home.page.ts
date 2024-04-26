import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private database:Database) {}
  valorSimple: number = 50; 
  async ngOnInit() {
      //HOME.PAGE.TS

    const route = ref(this.database, /*direccion a donde ir dentro de la base de datos */);
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
    });
  
    await LocalNotifications.requestPermissions();//solicitar permisos de la app
    
    await LocalNotifications.schedule({//Elaboracion del objeto notificacion
      notifications: [
        {
          title: "Esta es una notificación emergente",
          body: "Esta notificación debería ejecutarse en segundo plano pero no cuando lapp esté cerrada",
          id: 1
        }
      ]
    });
  }
 
  }


