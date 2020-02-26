import { ControlValueAccessor } from '@angular/forms';
import {
	ChangeDetectorRef,
	Component,
	Injector,
	Input,
	Type,
} from '@angular/core';
import { uuid } from '../../utils';

@Component({ template: '' })
// tslint:disable-next-line: no-any
export class AbstractNgModelComponent<T = any> implements ControlValueAccessor {
	@Input()
	cid: string = uuid();

	@Input()
	disabled: boolean;

	@Input()
	set value(value: T) {
		this._value = value;
		this.notifyValueChange();
	}

	get value(): T {
		return this._value;
	}

	onChange: (value: T) => {};
	onTouched: () => {};

	protected _value: T;
	protected cdRef: ChangeDetectorRef;

	constructor(public injector: Injector) {
		this.cdRef = injector.get<ChangeDetectorRef>(
			ChangeDetectorRef as Type<ChangeDetectorRef>,
		);
	}

	notifyValueChange(): void {
		if (this.onChange) {
			this.onChange(this.value);
		}
	}

	writeValue(value: T): void {
		this._value = value;
		setTimeout(() => this.cdRef.detectChanges(), 0);
	}

	// tslint:disable-next-line: no-any
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	// tslint:disable-next-line: no-any
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
}
