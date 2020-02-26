import { Component } from '@angular/core';
import { State } from '../../models/state';
import { StepBaseComponent } from 'src/app/insurances/core/components/step-base.component';
import { TravelStore } from '../../state/travel.store';

@Component({
	templateUrl: './simulation-additional-information.component.html',
})
class SimulationAdditionalInformationComponent extends StepBaseComponent {
	get viewModel(): State {
		return this.travelStore.getValue();
	}

	constructor(private travelStore: TravelStore) {
		super();
	}
}

export { SimulationAdditionalInformationComponent as TravelSimulationAdditionalInformationComponent };
