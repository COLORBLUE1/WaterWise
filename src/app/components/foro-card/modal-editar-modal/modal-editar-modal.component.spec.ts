import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarModalComponent } from './modal-editar-modal.component';

describe('ModalEditarModalComponent', () => {
  let component: ModalEditarModalComponent;
  let fixture: ComponentFixture<ModalEditarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditarModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
