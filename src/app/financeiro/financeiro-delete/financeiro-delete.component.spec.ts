import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroDeleteComponent } from './financeiro-delete.component';

describe('FinanceiroDeleteComponent', () => {
  let component: FinanceiroDeleteComponent;
  let fixture: ComponentFixture<FinanceiroDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
