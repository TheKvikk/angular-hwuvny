import { Component } from '@angular/core';
import { ViewModel } from '../../models/view-model';
import { StepBaseComponent } from 'src/app/insurances/common/components/step-base.component';
import { TravelStore } from '../../state/travel.store';

@Component({
	templateUrl: './simulation-additional-information.component.html',
})
class SimulationAdditionalInformationComponent extends StepBaseComponent {
	get viewModel(): ViewModel {
		return this.travelStore.getValue();
	}

	constructor(private travelStore: TravelStore) {
		super();
	}
}

export { SimulationAdditionalInformationComponent as TravelSimulationAdditionalInformationComponent };
