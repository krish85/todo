import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapInputSearchComponent } from './bootstrap-input-search.component';

describe('BootstrapInputSearchComponent', () => {
  let component: BootstrapInputSearchComponent;
  let fixture: ComponentFixture<BootstrapInputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootstrapInputSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render input button label correctly', () => {
    component.buttonLabel = 'Add';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-label').textContent).toBe('Add');
  });

  it('render placeholder label correctly', () => {
    component.placeholder = 'Enter the task';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('.input').getAttribute('placeholder')
    ).toEqual('Enter the task');
  });

  it('emit the input value on button click', () => {
    spyOn(component.onAddEvent, 'emit');
    const btn = fixture.nativeElement.querySelector('.btn-label');
    fixture.nativeElement.querySelector('.input').value = 'New task ';
    const txt = fixture.nativeElement.querySelector('.input').value;

    btn.click();
    fixture.detectChanges();

    expect(component.onAddEvent.emit).toHaveBeenCalledWith(txt.trim());
  });

  // it('hadleSearch function test', ()=> {

  // })
});
