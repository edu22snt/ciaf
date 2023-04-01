import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeDeleteComponent } from './modalidade-delete.component';

describe('ModalidadeDeleteComponent', () => {
  let component: ModalidadeDeleteComponent;
  let fixture: ComponentFixture<ModalidadeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
