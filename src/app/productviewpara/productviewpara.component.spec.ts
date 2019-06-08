import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductviewparaComponent } from './productviewpara.component';

describe('ProductviewparaComponent', () => {
  let component: ProductviewparaComponent;
  let fixture: ComponentFixture<ProductviewparaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductviewparaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductviewparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
