import { EventEmitter, Injectable, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserActive } from '../models/userActive.model';
import { identifierName } from '@angular/compiler';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserActiveService {

    userActive!: UserActive;

    constructor(private api: ApiService, private router: Router){}

     retriveUser(id: string){
      

      firstValueFrom(this.api.httpGet("active/"+id))
          .then((response: any) => {
            response.picture = response.picture = "default" ? "https://i.stack.imgur.com/l60Hf.png" : response.picture;
            localStorage.setItem('user', JSON.stringify(response));
          })
          .catch((error: any) => {
            console.log(error);
            alert("stop");
            this.router.navigate(['/notfound']);
          }
        );
        console.log( localStorage.getItem('user') ?? "das" );
        console.log(JSON.parse( localStorage.getItem('user') ?? "das" ) );
        this.loadUserActive(JSON.parse( localStorage.getItem('user') ?? '{}') );  
     }

    loadUserActive(user: any){
      if(this.userActive === undefined || this.userActive === null){
        this.userActive = {
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
          picture: user.picture,
          token: user.token
        };
      }
    }

    updateUserActive(user: any){
      this.userActive = {
        id: user.id,
        fullName: user.name+' '+user.lastName,
        email: user.email,
        role: user.role,
        picture: user.picture,
        token: user.token
      };
    }

}