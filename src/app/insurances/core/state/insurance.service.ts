import { Injectable } from '@angular/core';
import { InsuranceStore } from './insurance.store';
import { Step } from '../models/step';

@Injectable({ providedIn: 'root' })
export class InsuranceService {
	constructor(private insuranceStore: InsuranceStore) {}

	updateStep(step: Step): void {
		this.insuranceStore.update({ step: step });
	}
}
