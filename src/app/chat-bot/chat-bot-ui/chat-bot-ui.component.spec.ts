import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotUiComponent } from './chat-bot-ui.component';

describe('ChatBotUiComponent', () => {
  let component: ChatBotUiComponent;
  let fixture: ComponentFixture<ChatBotUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatBotUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatBotUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
