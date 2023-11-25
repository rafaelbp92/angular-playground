import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilService } from '../../services/utils.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  @Input() message: string = 'Message test';
  @Output() outputEvent = new EventEmitter<number>;

  messageLetters : string[] = [];

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.messageLetters = this.utilService.getLettersArray(this.message);
  }

  emitValue(value: number) {
    this.outputEvent.emit(value);
  }

}
