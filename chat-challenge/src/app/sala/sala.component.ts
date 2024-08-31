import { Component, OnInit } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { Mensaje } from '../models/mensaje';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {

  usuarios : string[] = ["Pepe", "Maria"];
  mensaje : Mensaje = {} as Mensaje;
  mensajes : Mensaje[] = [];

  mostrarConversacion(event : Mensaje) {
    
    this.mensajes.push(event);
    console.log(this.mensajes);
  }



}
