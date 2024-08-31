import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../models/mensaje';


@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {

  @Input() usuario : string = "";
  contenido : string = "";

  mensaje : Mensaje = {} as Mensaje;

  @Output() onEnviarContenido = new EventEmitter<Mensaje>();

  enviarMensaje() {
    this.mensaje.usuario = this.usuario;
    this.mensaje.contenido = this.contenido;
    this.onEnviarContenido.emit(this.mensaje);
    this.contenido = "";
  }

}
