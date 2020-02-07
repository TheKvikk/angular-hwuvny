import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ViewModel } from '../models/view-model';

export function createInitialState(): ViewModel {
	return {
		name: 'Tomáš',
		title: 'Developer',
	};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'property' })
export class PropertyStore extends Store<ViewModel> {
	constructor() {
		super(createInitialState());
	}
}
