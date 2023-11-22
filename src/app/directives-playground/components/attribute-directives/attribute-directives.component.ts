import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.sass']
})
export class AttributeDirectivesComponent implements OnInit {
  direction: string = "left";
  condition: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeDirection() : void {
    if (this.direction === 'right')
      this.direction = 'left';
    else 
      this.direction = 'right';
  }

}
