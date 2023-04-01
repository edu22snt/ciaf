import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroListComponent } from './financeiro-list.component';

describe('FinanceiroListComponent', () => {
  let component: FinanceiroListComponent;
  let fixture: ComponentFixture<FinanceiroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
