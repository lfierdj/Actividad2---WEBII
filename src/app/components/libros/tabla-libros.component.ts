import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-libros.component.html',
  styleUrl: './tabla-libros.component.css'
})
export class TablaLibrosComponent {
  servicio = inject(LibrosService)

  libros : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.libros = p
    )

    )

  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( isbn: any){
    this.visualizar = isbn
  }
  

}
