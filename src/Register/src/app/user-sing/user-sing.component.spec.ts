import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingComponent } from './user-sing.component';

describe('UserSingComponent', () => {
  let component: UserSingComponent;
  let fixture: ComponentFixture<UserSingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
