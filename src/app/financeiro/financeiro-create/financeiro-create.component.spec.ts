import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroCreateComponent } from './financeiro-create.component';

describe('FinanceiroCreateComponent', () => {
  let component: FinanceiroCreateComponent;
  let fixture: ComponentFixture<FinanceiroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
