import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadevideosComponent } from './listadevideos.component';

describe('ListadevideosComponent', () => {
  let component: ListadevideosComponent;
  let fixture: ComponentFixture<ListadevideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadevideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
