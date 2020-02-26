import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { TravelStore } from './travel.store';
import { State } from '../models/state';

@Injectable({ providedIn: 'root' })
export class TravelQuery extends Query<State> {
	constructor(protected store: TravelStore) {
		super(store);
	}
}
