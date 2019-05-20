import { Component, OnInit, HostBinding, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-script-box',
  templateUrl: './script-box.component.html',
  styleUrls: ['./script-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScriptBoxComponent implements AfterViewInit {

  @HostBinding('class.script-box')
  scriptBox = true;

  @HostBinding('class.script-box-focused')
  focused = false;

  @ViewChild('input')
  input: ElementRef;

  ngAfterViewInit() {
    this.input.nativeElement.addEventListener('focus', () => this.focused = true);
    this.input.nativeElement.addEventListener('blur', () => this.focused = false);
  }
}
