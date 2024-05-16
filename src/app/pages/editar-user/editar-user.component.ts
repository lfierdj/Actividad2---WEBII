import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-user.component.html',
  styleUrl: './editar-user.component.css'
})
export class EditarUserComponent {

  id:any
  email:any
  password:any
 
  

users:any

servicio = inject(UsersService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()
    this.route.navigateByUrl("gestionU")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idUsers']
 
     this.servicio.getPersonalUnico(this.id).subscribe( e =>{
       this.users= e
     })
 
 
    })
   }
}
