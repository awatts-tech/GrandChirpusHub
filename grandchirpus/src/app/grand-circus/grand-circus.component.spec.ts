import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandCircusComponent } from './grand-circus.component';

describe('GrandCircusComponent', () => {
  let component: GrandCircusComponent;
  let fixture: ComponentFixture<GrandCircusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandCircusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandCircusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
