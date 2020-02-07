import { Component } from '@angular/core';
import { ViewModel } from '../../models/view-model';
import { TravelStore } from '../../state/travel.store';
import { StepBaseComponent } from '../../../common/components/step-base.component';

@Component({
	templateUrl: './simulation-input.component.html',
})
class SimulationInputStepComponent extends StepBaseComponent {
	get viewModel(): ViewModel {
		return this.travelStore.getValue();
	}

	num = 12345678;

	constructor(private travelStore: TravelStore) {
		super();
	}
}

export { SimulationInputStepComponent as TravelSimulationInputComponent };
