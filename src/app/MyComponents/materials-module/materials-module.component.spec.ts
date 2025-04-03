import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsModuleComponent } from './materials-module.component';

describe('MaterialsModuleComponent', () => {
  let component: MaterialsModuleComponent;
  let fixture: ComponentFixture<MaterialsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
