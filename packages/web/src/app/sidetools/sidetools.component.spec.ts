import { ComponentFixture, TestBed } from "@angular/core/testing"

import { SidetoolsComponent } from "./sidetools.component"

describe("SidetoolsComponent", () => {
  let component: SidetoolsComponent
  let fixture: ComponentFixture<SidetoolsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidetoolsComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetoolsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
