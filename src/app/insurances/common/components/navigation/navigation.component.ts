import { Input, Directive } from '@angular/core';
import { Step } from '../../models/step';

@Directive()
abstract class NavigationBaseComponent {
	Step = Step;

	abstract get currentStep(): Step;

	@Input() goBack: () => void;
	@Input() goNext: () => void;
}

export { NavigationBaseComponent };
