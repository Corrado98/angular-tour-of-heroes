import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMaterialComponent } from './heroes-material.component';

describe('HeroesMaterialComponent', () => {
  let component: HeroesMaterialComponent;
  let fixture: ComponentFixture<HeroesMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
