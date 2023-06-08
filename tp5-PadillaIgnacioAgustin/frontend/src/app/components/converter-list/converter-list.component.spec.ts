import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterListComponent } from './converter-list.component';

describe('ConverterListComponent', () => {
  let component: ConverterListComponent;
  let fixture: ComponentFixture<ConverterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
