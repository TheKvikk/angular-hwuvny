import { Query } from '@datorama/akita';
import { InsuranceState, InsuranceStore } from './insurance.store';
import { Injectable } from '@angular/core';
import { Step } from '../models/step';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<InsuranceState> {
	constructor(protected store: InsuranceStore) {
		super(store);
	}

	getStep(): Step {
		return this.store.getValue().step;
	}
}
