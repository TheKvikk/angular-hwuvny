import { Injectable } from '@angular/core';
import { PropertySimulationInputComponent } from '../../property/steps/simulation-input/simulation-input.component';
import { PropertyNavigationComponent } from '../../property/components/navigation/navigation.component';
import { TravelSimulationInputComponent } from '../../travel/steps/simulation-input/simulation-input.component';
import { TravelSimulationAdditionalInformationComponent } from '../../travel/steps/simulation-additional-information/simulation-additional-information.component';
import { TravelNavigationComponent } from '../../travel/components/navigation/navigation.component';
import { StepItem } from '../models/step-item';
import { StepsContainer } from '../models/steps-container';
import { Step } from '../models/step';

@Injectable({
	providedIn: 'root',
})
export class StepsService {
	getPropertySteps() {
		return new StepsContainer(PropertyNavigationComponent, [
			new StepItem(
				Step.SimulationInput,
				PropertySimulationInputComponent,
				'Property – SimulationInput 1',
			),
			new StepItem(
				Step.SimulationAdditionalInformation,
				PropertySimulationInputComponent,
				'Property – SimulationInput 2',
			),
		]);
	}

	getTravelSteps() {
		return new StepsContainer(TravelNavigationComponent, [
			new StepItem(
				Step.SimulationInput,
				TravelSimulationInputComponent,
				'Travel – SimulationInput 1',
			),
			new StepItem(
				Step.SimulationAdditionalInformation,
				TravelSimulationAdditionalInformationComponent,
				'Travel – SimulationAdditionalInformationComponent 2',
			),
		]);
	}
}
