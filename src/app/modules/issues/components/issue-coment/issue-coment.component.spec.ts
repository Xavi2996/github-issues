import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueComentComponent } from './issue-coment.component';

describe('IssueComentComponent', () => {
  let component: IssueComentComponent;
  let fixture: ComponentFixture<IssueComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssueComentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
