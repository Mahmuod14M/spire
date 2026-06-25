import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChatService } from '../../core/services/chat.service';
import { BreakpointService } from '../../core/services/breakpoint.service';
import { TopNav } from '../top-nav/top-nav';
import { SideRail } from '../side-rail/side-rail';
import { AttendanceRail } from '../attendance-rail/attendance-rail';
import { ChatPanel } from '../../features/chat/chat-panel/chat-panel';

@Component({
  selector: 'app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MatSidenavModule, TopNav, SideRail, AttendanceRail, ChatPanel],
  templateUrl: './app-shell.html',
})
export class AppShell {
  protected readonly chat = inject(ChatService);
  protected readonly breakpoint = inject(BreakpointService);

  protected readonly menuOpen = signal(false);

  protected readonly chatMode = computed<'side' | 'over'>(() =>
    this.breakpoint.isDesktop() ? 'side' : 'over',
  );

  onChatOpenedChange(opened: boolean): void {
    if (!opened) {
      this.chat.close();
    }
  }

  onMenuOpenedChange(opened: boolean): void {
    this.menuOpen.set(opened);
  }
}
