import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TavoloDetailComponent } from './tavolo-detail.component';

describe('TavoloDetailComponent', () => {
  let component: TavoloDetailComponent;
  let fixture: ComponentFixture<TavoloDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TavoloDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TavoloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
