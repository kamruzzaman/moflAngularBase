import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-sidenav',
  templateUrl: './default-sidenav.component.html',
  styleUrls: ['./default-sidenav.component.scss']
})
export class DefaultSidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login() :void{
    this.router.navigate(["/login"]);
  }
}
