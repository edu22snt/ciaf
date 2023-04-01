import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeUpdateComponent } from './modalidade-update.component';

describe('ModalidadeUpdateComponent', () => {
  let component: ModalidadeUpdateComponent;
  let fixture: ComponentFixture<ModalidadeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
