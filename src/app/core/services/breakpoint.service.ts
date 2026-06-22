import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';

/** lg breakpoint (matches Tailwind's default 1024px). */
const DESKTOP_QUERY = '(min-width: 1024px)';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  private readonly observer = inject(BreakpointObserver);

  /** True when the viewport is at or above the desktop breakpoint. */
  readonly isDesktop: Signal<boolean> = toSignal(
    this.observer.observe(DESKTOP_QUERY).pipe(map((state) => state.matches)),
    { initialValue: this.observer.isMatched(DESKTOP_QUERY) },
  );
}
