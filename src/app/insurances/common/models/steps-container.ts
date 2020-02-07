import { Type } from '@angular/core';
import { StepItem } from './step-item';
import { InsuranceBaseService } from '../services/insurance-base.service';
import { NavigationBaseComponent } from '../components/navigation/navigation.component';

class StepsContainer {
	constructor(
		public navigation: Type<NavigationBaseComponent>,
		public steps: StepItem[],
	) // public insuranceService: Type<InsuranceBaseService<any>>
	{}
}

export { StepsContainer };
