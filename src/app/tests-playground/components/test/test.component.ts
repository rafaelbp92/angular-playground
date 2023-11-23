import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  @Input() message: string = 'Message test';
  constructor() { }

  ngOnInit(): void {
  }

}
