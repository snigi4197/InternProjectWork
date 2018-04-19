import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnigiComponent } from './snigi.component';

describe('SnigiComponent', () => {
  let component: SnigiComponent;
  let fixture: ComponentFixture<SnigiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnigiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnigiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
