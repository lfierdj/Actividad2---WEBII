import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-usuarios',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.css'
})
export class TablaUsuariosComponent {
  servicio = inject(UsersService)
  users : any;

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.users = p
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
