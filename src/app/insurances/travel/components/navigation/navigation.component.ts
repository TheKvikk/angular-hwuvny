import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

	constructor(
		private insuranceStore: InsuranceStore,
		private snackBar: MatSnackBar,
	) {
		super();
	}

	doStuff(): void {
		this.snackBar.open('Pizza time! 🍕', 'close', {
			duration: 10 * 1000,
		});
	}
}

export { NavigationComponent as TravelNavigationComponent };
