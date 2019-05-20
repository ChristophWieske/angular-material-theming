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
    this.maintainDarkClassOnRoot();
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
    this.maintainAccessibleClassOnRoot();
  }

  get useAccessibilitySettings() {
    return this._useAccessibilitySettings;
  }

  @Output()
  useAccessibilitySettingsChange = new EventEmitter<boolean>();


  maintainDarkClassOnRoot() {
    if (this.useDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  maintainAccessibleClassOnRoot() {
    if (this.useAccessibilitySettings) {
      document.documentElement.classList.add('accessible');
    } else {
      document.documentElement.classList.remove('accessible');
    }
  }
}
