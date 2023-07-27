import { Component } from "@angular/core";

@Component({
    selector: 'app-redirect',
    template: '<p class="m-auto text-3xl text-black p-10">No estas autorizado :(</p>',
    styles: []
  })
  export class NotFoundComponent  {
    constructor(){}
  }