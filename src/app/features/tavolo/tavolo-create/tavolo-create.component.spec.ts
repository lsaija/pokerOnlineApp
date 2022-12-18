import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TavoloCreateComponent } from './tavolo-create.component';

describe('TavoloCreateComponent', () => {
  let component: TavoloCreateComponent;
  let fixture: ComponentFixture<TavoloCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TavoloCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TavoloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
