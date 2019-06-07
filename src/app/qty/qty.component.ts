import { Component, OnInit } from '@angular/core';
import {UoM} from './uo-m';
import {UOMS} from './allUoMs'

@Component({
  selector: 'app-qty',
  templateUrl: './qty.component.html',
  styleUrls: ['./qty.component.css']
})
export class QtyComponent implements OnInit {

allUoMs  = UOMS;

  constructor() { }

  ngOnInit() {
  }

}