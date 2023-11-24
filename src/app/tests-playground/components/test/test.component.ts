import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  @Input() message: string = 'Message test';
  @Output() outputEvent = new EventEmitter<number>;
  constructor() { }

  ngOnInit(): void {
  }

  emitValue(value: number) {
    this.outputEvent.emit(value);
  }

}
