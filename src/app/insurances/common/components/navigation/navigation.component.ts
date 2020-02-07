import { Input } from '@angular/core';
import { Step } from '../../models/step';

abstract class NavigationBaseComponent {
	Step = Step;

	abstract get currentStep(): Step;

	@Input() goBack: () => void;
	@Input() goNext: () => void;
}

export { NavigationBaseComponent };
