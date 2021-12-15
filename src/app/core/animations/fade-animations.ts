import { animate, style, transition, trigger } from '@angular/animations';

export const FadeInFadeOutAnimation = trigger('FadeInFadeOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('200ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('200ms', style({ opacity: 0 })),
  ]),
]);

export const FadeOutOnLeaveAnimation = trigger('FadeOutOnLeave', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('200ms', style({ opacity: 0 })),
  ]),
]);

export const FadeOutLeftOnLeaveAnimation = trigger('FadeOutLeftOnLeave', [
  transition(':leave', [
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
      '500ms ease',
      style({ opacity: 0, transform: 'translateX(-250%)' })
    ),
  ]),
]);

export const FadeInRightOnEnterAnimation = trigger('FadeInRightOnEnter', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(250%)' }),
    animate('300ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
