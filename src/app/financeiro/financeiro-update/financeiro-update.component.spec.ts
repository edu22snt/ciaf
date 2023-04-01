import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroUpdateComponent } from './financeiro-update.component';

describe('FinanceiroUpdateComponent', () => {
  let component: FinanceiroUpdateComponent;
  let fixture: ComponentFixture<FinanceiroUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
