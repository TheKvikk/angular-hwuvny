import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceItemComponent } from './components/insurance-item/insurance-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, FormsModule, SharedModule],
	declarations: [InsuranceItemComponent],
	exports: [InsuranceItemComponent],
})
class CoreModule {}

export { CoreModule };
