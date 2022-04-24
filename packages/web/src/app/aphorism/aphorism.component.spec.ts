import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AphorismComponent } from "./aphorism.component"

describe("AphorismComponent", () => {
  let component: AphorismComponent
  let fixture: ComponentFixture<AphorismComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AphorismComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AphorismComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
