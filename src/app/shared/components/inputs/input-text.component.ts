import {
	ChangeDetectionStrategy,
	Component,
	forwardRef,
	Input,
} from '@angular/core';
import {
	NG_VALUE_ACCESSOR,
	ControlContainer,
	FormGroupDirective,
} from '@angular/forms';
import { AbstractInputComponent } from '../abstraction/input.component';

@Component({
	selector: 'input-text',
	template: `
		<ng-container>
			<mat-form-field [hideRequiredMarker]="false" [floatLabel]="'auto'">
				<input
					matInput
					[id]="cid"
					[type]="type"
					[placeholder]="placeholder"
					[readonly]="inputReadonly"
					[required]="inputRequired"
					(blur)="onBlur.next()"
					(focus)="onFocus.next()"
					formControlName="{{ name }}"
				/>
			</mat-form-field>
		</ng-container>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputTextComponent),
			multi: true,
		},
	],
	viewProviders: [
		{
			provide: ControlContainer,
			useExisting: FormGroupDirective,
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent extends AbstractInputComponent {}
