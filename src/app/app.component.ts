import { Component, OnInit } from '@angular/core';
import { StepsService } from './insurances/core/services/steps.service';
import { StepsContainer } from './insurances/core/models/steps-container';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { InsuranceType } from './insurances/core/models/insurance-type';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	insuranceType: InsuranceType = 1;
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

	pickSteps = (step: InsuranceType) => {
		if (step === InsuranceType.Property) {
			this.steps = this.stepsService.getPropertySteps();
		}

		if (step === InsuranceType.Travel) {
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
