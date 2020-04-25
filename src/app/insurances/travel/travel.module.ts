import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelSimulationInputComponent } from './steps/simulation-input/simulation-input.component';
import { TravelSimulationAdditionalInformationComponent } from './steps/simulation-additional-information/simulation-additional-information.component';
import { TravelNavigationComponent } from './components/navigation/navigation.component';
import { TranslocoRootModule } from '../../shared/transloco-root.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		TranslocoRootModule,
		SharedModule,
		CoreModule,
	],
	declarations: [
		TravelSimulationInputComponent,
		TravelSimulationAdditionalInformationComponent,
		TravelNavigationComponent,
	],
	entryComponents: [
		TravelSimulationInputComponent,
		TravelSimulationAdditionalInformationComponent,
		TravelNavigationComponent,
	],
})
export class TravelModule {}
