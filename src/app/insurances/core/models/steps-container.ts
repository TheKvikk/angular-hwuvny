import { Type } from '@angular/core';
import { StepItem } from './step-item';
import { NavigationBaseComponent } from '../components/navigation/navigation.component';

class StepsContainer {
	constructor(
		public navigation: Type<NavigationBaseComponent>,
		public steps: StepItem[],
	) {}
}

export { StepsContainer };
