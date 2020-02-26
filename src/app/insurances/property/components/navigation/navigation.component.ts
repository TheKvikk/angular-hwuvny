import { Component } from '@angular/core';
import { NavigationBaseComponent } from '../../../core/components/navigation/navigation.component';
import { Step } from '../../../core/models/step';
import { InsuranceStore } from 'src/app/insurances/core/state/insurance.store';

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
class NavigationComponent extends NavigationBaseComponent {
	get currentStep(): Step {
		return this.insuranceStore.getValue().step;
	}

	constructor(private insuranceStore: InsuranceStore) {
		super();
	}
}

export { NavigationComponent as PropertyNavigationComponent };
