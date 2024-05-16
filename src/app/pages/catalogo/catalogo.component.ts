import { Component, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
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
