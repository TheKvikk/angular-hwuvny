import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ViewModel } from '../models/view-model';

export function createInitialState(): ViewModel {
	return {
		name: '123456789',
		date: new Date(),
		num: 12345678,
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'travel' })
export class TravelStore extends Store<ViewModel> {
	constructor() {
		super(createInitialState());
	}
}
