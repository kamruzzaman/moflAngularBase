import { Component, OnInit } from '@angular/core';



/**
 * This is my class
 * @deprecated This class is deprecated by parvez
 */
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss']
})
export class DefaultHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
