import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageTitle: string = "";

  constructor(private router: Router) {
    this.router.events
    .subscribe(
      (event) => {
        if(event instanceof NavigationEnd) {
          if(event.urlAfterRedirects == '/home') {
            this.pageTitle = 'HOME'
          } else if (event.urlAfterRedirects == '/about') {
            this.pageTitle = 'ABOUT'
          } else if (event.urlAfterRedirects == '/findyourcoach') {
            this.pageTitle = 'FIND YOUR COACH'
          } else if (event.urlAfterRedirects == '/contact') {
            this.pageTitle = 'CONTACT'
          }
        }
       }
      )
  }
  
  ngOnInit(): void {
  }


}
