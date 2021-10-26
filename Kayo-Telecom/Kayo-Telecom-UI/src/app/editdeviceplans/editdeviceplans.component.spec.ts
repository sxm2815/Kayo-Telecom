import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeviceplansComponent } from './editdeviceplans.component';

describe('EditdeviceplansComponent', () => {
  let component: EditdeviceplansComponent;
  let fixture: ComponentFixture<EditdeviceplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdeviceplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeviceplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
