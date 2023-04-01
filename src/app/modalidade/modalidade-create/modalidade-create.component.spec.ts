import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeCreateComponent } from './modalidade-create.component';

describe('ModalidadeCreateComponent', () => {
  let component: ModalidadeCreateComponent;
  let fixture: ComponentFixture<ModalidadeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
