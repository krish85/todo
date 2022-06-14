import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-bootstrap-input-search',
  templateUrl: './bootstrap-input-search.component.html',
  styleUrls: ['./bootstrap-input-search.component.scss'],
})
export class BootstrapInputSearchComponent {
  //
  @Input() placeholder: string = '';

  // Name of the button
  @Input() buttonLabel: string = 'Submit';

  // On add button event emitter
  @Output() onAddEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('inputField') inputField: ElementRef = {} as ElementRef;

  /**
   * Trims and emits the entered text in the input box
   * @param text
   */
  handleSearch(text: string) {
    if (text) {
      this.onAddEvent.emit(text.trim());
      this.inputField.nativeElement.value = '';
    }
  }
}
