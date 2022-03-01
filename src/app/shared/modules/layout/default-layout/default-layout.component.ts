
import { ChangeDetectorRef, Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
// import { MediaMatcher } from '@angular/cdk/layout';
// import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnDestroy ,OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  public ngOnDestroy(): void {

  }
}
