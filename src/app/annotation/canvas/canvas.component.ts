import {Component, Input, OnInit} from '@angular/core';
import Label = Annotation.Label;
import Tool = Annotation.Tool;


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() {
  }

  labels: Label[];
  state: string;
  @Input() currentTool: Tool;

  EnterCreateMode() {

  }
  ngOnInit() {
    this.labels = new Array<Label>();
    this.state = 'Normal';
  }
}


