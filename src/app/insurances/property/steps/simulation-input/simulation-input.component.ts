import { Component } from '@angular/core';
import { ViewModel } from '../../models/view-model';
import { PropertyStore } from '../../state/property.store';
import { StepBaseComponent } from '../../../core/components/step-base.component';

@Component({
	templateUrl: './simulation-input.component.html',
})
class SimulationInputComponent extends StepBaseComponent {
	get viewModel(): ViewModel {
		return this.propertyStore.getValue();
	}

	constructor(private propertyStore: PropertyStore) {
		super();
	}
}

export { SimulationInputComponent as PropertySimulationInputComponent };
