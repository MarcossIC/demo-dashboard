import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  constructor(){}
  
  ngOnInit() {
    window.location.href = 'https://remarkable-fox-3bb886.netlify.app/';
    localStorage.setItem("user", "{}");
  }

}
