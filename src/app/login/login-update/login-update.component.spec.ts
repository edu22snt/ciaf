import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUpdateComponent } from './login-update.component';

describe('LoginUpdateComponent', () => {
  let component: LoginUpdateComponent;
  let fixture: ComponentFixture<LoginUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
