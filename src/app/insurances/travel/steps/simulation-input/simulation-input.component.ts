import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';
import { State } from '../../models/state';
import { PersistNgFormPlugin } from '@datorama/akita';
import { StepBaseComponent } from '../../../core/components/step-base.component';
import { TravelQuery } from '../../state/travel.query';
import { TooltipService } from 'src/app/shared/services/tooltip.service';

@Component({
	templateUrl: './simulation-input.component.html',
})
class SimulationInputStepComponent extends StepBaseComponent
	implements OnInit, OnDestroy {
	form: FormGroup;
	persistForm: PersistNgFormPlugin;

	constructor(
		private formsManager: AkitaNgFormsManager<State>,
		private builder: FormBuilder,
		private tooltipService: TooltipService,
		private travelQuery: TravelQuery,
	) {
		super();
	}

	ngOnInit() {
		this.form = this.builder.group({
			name: this.builder.control(null),
			date: this.builder.control(null),
			num: this.builder.control(null),
		});

		this.persistForm = new PersistNgFormPlugin(this.travelQuery).setForm(
			this.form,
		);
	}

	ngOnDestroy() {
		this.formsManager.unsubscribe();
	}

	t1(): void {
		this.tooltipService.showTooltip('Tom');
	}

	t2(): void {
		this.tooltipService.showTooltip('Test');
	}

	t3(): void {
		this.tooltipService.showTooltip('A');
	}
}

export { SimulationInputStepComponent as TravelSimulationInputComponent };
