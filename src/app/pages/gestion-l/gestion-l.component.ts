import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { TablaLibrosComponent } from '../../components/libros/tabla-libros.component';


@Component({
  selector: 'app-gestion-l',
  standalone: true,
  imports: [TablaLibrosComponent],
  templateUrl: './gestion-l.component.html',
  styleUrl: './gestion-l.component.css'
})
export class GestionLComponent {

  
}