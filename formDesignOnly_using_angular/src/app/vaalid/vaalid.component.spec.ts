import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaalidComponent } from './vaalid.component';

describe('VaalidComponent', () => {
  let component: VaalidComponent;
  let fixture: ComponentFixture<VaalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
