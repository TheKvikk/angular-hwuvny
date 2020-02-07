import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { TravelSimulationInputComponent } from './steps/simulation-input/simulation-input.component';
import { TravelSimulationAdditionalInformationComponent } from './steps/simulation-additional-information/simulation-additional-information.component';
import { TravelNavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from '../common/material.module';
import { TranslocoRootModule } from '../../shared/transloco-root.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		NgxMaskModule.forRoot(),
		TranslocoRootModule,
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
