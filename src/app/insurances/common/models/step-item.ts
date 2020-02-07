import { Type } from '@angular/core';
import { StepBaseComponent } from '../components/step-base.component';
import { Step } from '../models/step';

class StepItem {
	constructor(
		public step: Step,
		public component: Type<StepBaseComponent>,
		public pageTitle: string,
	) {}
}

export { StepItem };
