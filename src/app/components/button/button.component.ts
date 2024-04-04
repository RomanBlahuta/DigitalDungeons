import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dd-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  constructor() {
  }

  public ngOnInit(): void {
  }

  public onClick(): void {
    console.log("click");
  }

}
