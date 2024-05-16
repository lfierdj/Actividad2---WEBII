import { Component } from '@angular/core';
import { TablaUsuariosComponent } from '../../components/usuarios/tabla-usuarios.component';


@Component({
  selector: 'app-gestion-u',
  standalone: true,
  imports: [TablaUsuariosComponent],
  templateUrl: './gestion-u.component.html',
  styleUrl: './gestion-u.component.css'
})
export class GestionUComponent {

}
