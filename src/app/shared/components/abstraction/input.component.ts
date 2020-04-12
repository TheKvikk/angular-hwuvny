import { Component, EventEmitter, Input, Output } from '@angular/core';
import { uuid } from '../../utils';

@Component({ template: '' })
export class AbstractInputComponent {
	@Input()
	cid = uuid();

	@Input()
	readonly = false;

	@Input()
	required = false;

	@Input()
	placeholder = '';

	@Input()
	type = 'text';

	@Input()
	name: string;

	@Output()
	onBlur = new EventEmitter<void>();

	@Output()
	onFocus = new EventEmitter<void>();

	get inputReadonly(): boolean {
		return this.readonly || typeof this.readonly !== 'boolean';
	}

	get inputRequired(): boolean {
		return this.required || typeof this.required !== 'boolean';
	}
}
