import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearForoComponent } from './modal-crear-foro.component';

describe('ModalCrearForoComponent', () => {
  let component: ModalCrearForoComponent;
  let fixture: ComponentFixture<ModalCrearForoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearForoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
