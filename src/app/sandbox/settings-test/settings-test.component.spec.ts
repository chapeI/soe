import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTestComponent } from './settings-test.component';

describe('SettingsTestComponent', () => {
  let component: SettingsTestComponent;
  let fixture: ComponentFixture<SettingsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
