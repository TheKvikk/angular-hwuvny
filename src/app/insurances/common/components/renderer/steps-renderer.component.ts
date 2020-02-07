import {
	Component,
	Input,
	ViewChild,
	ComponentFactoryResolver,
	Injector,
	ViewChildren,
	QueryList,
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	OnInit,
} from '@angular/core';
import { StepDirective } from '../../directives/step.directive';
import { NavigationDirective } from '../../directives/navigation.directive';
import { StepsContainer } from '../../models/steps-container';
import { StepBaseComponent } from '../../components/step-base.component';
import { NavigationBaseComponent } from '../../components/navigation/navigation.component';
import { BehaviorSubject, pipe } from 'rxjs';
import { skip } from 'rxjs/operators';
import { InsuranceService } from '../../state/insurance.service';

@Component({
	selector: 'steps-renderer',
	templateUrl: './steps-renderer.component.html',
	styleUrls: ['./steps-renderer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
class StepsRendererComponent implements OnInit, AfterViewInit {
	private _stepsContainer: StepsContainer;

	currentStepIndex = -1;
	stepsChanged = new BehaviorSubject<void>(null);

	@ViewChild(StepDirective, { static: true })
	stepHost: StepDirective;
	@ViewChildren(NavigationDirective)
	navigationHosts!: QueryList<NavigationDirective>;

	@Input()
	set stepsContainer(container: StepsContainer) {
		this._stepsContainer = container;

		this.stepsChanged.next();
	}

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector,
		private cd: ChangeDetectorRef,
		private insuranceService: InsuranceService,
	) {
		this.goNext = this.goNext.bind(this);
		this.goBack = this.goBack.bind(this);
	}

	ngOnInit(): void {
		this.stepsChanged.pipe(skip(1)).subscribe(() => this.init());
	}

	ngAfterViewInit(): void {
		this.init();
	}

	init(): void {
		this.currentStepIndex = -1;
		this.goNext();
		this.loadNavigation();

		setTimeout(() => this.cd.markForCheck());
	}

	loadNavigation(): void {
		const navigation = this._stepsContainer.navigation;
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
			navigation,
		);

		this.navigationHosts.map(navigationHost => {
			const viewContainerRef = navigationHost.viewContainerRef;
			viewContainerRef.clear();
			const componentRef = viewContainerRef.createComponent(componentFactory);
			const instance = componentRef.instance as NavigationBaseComponent;
			instance.goBack = this.goBack;
			instance.goNext = this.goNext;
		});
	}

	loadComponent(): void {
		const step = this._stepsContainer.steps[this.currentStepIndex];
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
			step.component,
		);
		const viewContainerRef = this.stepHost.viewContainerRef;
		viewContainerRef.clear();
		const componentRef = viewContainerRef.createComponent(componentFactory);
		const instance = componentRef.instance as StepBaseComponent;
		instance.pageTitle = step.pageTitle;
	}

	goNext(): void {
		if (this.currentStepIndex + 1 === this._stepsContainer.steps.length) {
			return;
		}

		this.currentStepIndex =
			(this.currentStepIndex + 1) % this._stepsContainer.steps.length;

		this.updateContextStep();
		this.loadComponent();
	}

	goBack(): void {
		if (this.currentStepIndex - 1 === -1) {
			return;
		}

		this.currentStepIndex =
			(this.currentStepIndex - 1) % this._stepsContainer.steps.length;

		this.updateContextStep();
		this.loadComponent();
	}

	updateContextStep() {
		this.insuranceService.updateStep(
			this._stepsContainer.steps[this.currentStepIndex].step,
		);
	}
}

export { StepsRendererComponent };
