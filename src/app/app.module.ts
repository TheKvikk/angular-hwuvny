import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { AppComponent } from './app.component';
import { InsurancesModule } from './insurances/insurances.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './shared/transloco-root.module';
import { IconService } from './shared/services/icon.service';
import { help, assistance } from './shared/components/icons/icons';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		TranslocoRootModule,
		InsurancesModule,
		ReactiveFormsModule,
		FormsModule,
		MatRadioModule,
		HttpClientModule,
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(private iconService: IconService) {
		this.iconService.registerIcons([assistance, help]);
	}
}
