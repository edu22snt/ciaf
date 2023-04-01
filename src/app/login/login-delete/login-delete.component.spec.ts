import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDeleteComponent } from './login-delete.component';

describe('LoginDeleteComponent', () => {
  let component: LoginDeleteComponent;
  let fixture: ComponentFixture<LoginDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
