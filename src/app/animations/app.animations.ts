import { trigger, style, state, transition, animate } from "@angular/animations";

export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            style({transform: 'translateX(-100%)', opacity: 0}),
            animate('500ms ease-out')
        ])
    ])
}