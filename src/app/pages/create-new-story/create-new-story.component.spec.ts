import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewStoryComponent } from './create-new-story.component';

describe('CreateNewStoryComponent', () => {
  let component: CreateNewStoryComponent;
  let fixture: ComponentFixture<CreateNewStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewStoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
