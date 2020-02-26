import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { State } from '../models/state';

export function createInitialState(): State {
	return {
		name: 'Tom Říha',
		date: null,
		num: 232232323,
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'travel' })
export class TravelStore extends Store<State> {
	constructor() {
		super(createInitialState());
	}
}
