import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import {
	NG_VALUE_ACCESSOR,
	ControlContainer,
	FormGroupDirective,
} from '@angular/forms';
import { AbstractInputComponent } from '../abstraction/input.component';

@Component({
	selector: 'input-text-with-mask',
	template: `
		<mat-form-field>
			<input
				matInput
				formControlName="{{ name }}"
				unmask="typed"
				[imask]="imaskConfig"
			/>
		</mat-form-field>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputTextWithMaskComponent),
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
export class InputTextWithMaskComponent extends AbstractInputComponent {
	imaskConfig = {
		mask: Number,
		scale: 2,
		signed: false,
		thousandsSeparator: ' ',
		padFractionalZeros: true,
		normalizeZeros: true,
		radix: '.',
		mapToRadix: [','],
	};
}
