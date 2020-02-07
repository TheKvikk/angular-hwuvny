import { Store, StoreConfig } from '@datorama/akita';
import { Step } from '../models/step';
import { Injectable } from '@angular/core';

export interface InsuranceState {
	step: Step;
}

export function createInitialState(): InsuranceState {
	return {
		step: Step.SimulationInput,
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'insurance' })
export class InsuranceStore extends Store<InsuranceState> {
	constructor() {
		super(createInitialState());
	}
}
