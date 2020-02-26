import {
	ChangeDetectionStrategy,
	Component,
	forwardRef,
	Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { AbstractInputComponent } from '../abstraction/input.component';

@Component({
	selector: 'input-text',
	template: `
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
			/>
		</mat-form-field>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputTextComponent),
			multi: true,
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent extends AbstractInputComponent {
	@Input() control: FormControl;
}
