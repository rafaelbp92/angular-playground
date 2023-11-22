import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass'],
})
export class PipesComponent implements OnInit {
  dateExample: Date;
  name: string;

  constructor() {
   this.dateExample = new Date();
   this.name = "PipeExample"; 
  }

  ngOnInit(): void {}
}
