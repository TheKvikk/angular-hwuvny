import { Component, OnInit } from '@angular/core';
import { StepsService } from './insurances/core/services/steps.service';
import { StepsContainer } from './insurances/core/models/steps-container';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	insuranceType: 1 | 2 = 2;
	steps: StepsContainer;
	availableLangs: AvailableLangs;
	activeLang: string;

	constructor(
		private stepsService: StepsService,
		private translocoService: TranslocoService,
	) {}

	ngOnInit() {
		this.pickSteps(this.insuranceType);

		this.availableLangs = this.translocoService.getAvailableLangs();
		this.getActiveLang();
	}

	pickSteps = (step: number) => {
		if (step === 1) {
			this.steps = this.stepsService.getPropertySteps();
		}

		if (step === 2) {
			this.steps = this.stepsService.getTravelSteps();
		}
	};

	setApplicationLanguage = (lang: string): void => {
		this.translocoService.setActiveLang(lang);
		this.getActiveLang();
	};

	private getActiveLang = () => {
		this.activeLang = this.translocoService.getActiveLang();
	};
}
