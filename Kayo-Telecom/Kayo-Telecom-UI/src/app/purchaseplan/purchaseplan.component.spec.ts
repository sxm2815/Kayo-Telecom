import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseplanComponent } from './purchaseplan.component';

describe('PurchaseplanComponent', () => {
  let component: PurchaseplanComponent;
  let fixture: ComponentFixture<PurchaseplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
