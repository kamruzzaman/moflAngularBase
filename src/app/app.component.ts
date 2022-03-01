
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  title = 'MOFL';
  constructor(
    private router: Router,
    private titleService: Title
  ) {
    titleService.setTitle(this.title);
  }
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }

}
