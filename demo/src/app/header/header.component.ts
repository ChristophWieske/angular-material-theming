import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  private _useDarkTheme = false;

  @Input()
  set useDarkTheme(value: boolean) {
    this._useDarkTheme = value;
    this.useDarkThemeChange.emit(this._useDarkTheme);
  }

  get useDarkTheme() {
    return this._useDarkTheme;
  }

  @Output()
  useDarkThemeChange = new EventEmitter<boolean>();

  private _useAccessibilitySettings = false;

  @Input()
  set useAccessibilitySettings(value: boolean) {
    this._useAccessibilitySettings = value;
    this.useAccessibilitySettingsChange.emit(this._useAccessibilitySettings);
  }

  get useAccessibilitySettings() {
    return this._useAccessibilitySettings;
  }

  @Output()
  useAccessibilitySettingsChange = new EventEmitter<boolean>();

}
