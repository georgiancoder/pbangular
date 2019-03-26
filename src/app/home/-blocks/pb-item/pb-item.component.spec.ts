import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbItemComponent } from './pb-item.component';

describe('PbItemComponent', () => {
  let component: PbItemComponent;
  let fixture: ComponentFixture<PbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
