import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertySimulationInputComponent } from './steps/simulation-input/simulation-input.component';
import { PropertyNavigationComponent } from './components/navigation/navigation.component';
import { TranslocoRootModule } from '../../shared/transloco-root.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
	imports: [CommonModule, MaterialModule, TranslocoRootModule],
	declarations: [PropertySimulationInputComponent, PropertyNavigationComponent],
	entryComponents: [
		PropertySimulationInputComponent,
		PropertyNavigationComponent,
	],
})
export class PropertyModule {}
