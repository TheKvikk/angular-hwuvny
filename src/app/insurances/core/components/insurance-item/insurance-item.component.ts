import {
	Component,
	ViewChild,
	ElementRef,
	NgZone,
	Input,
	AfterViewInit,
} from '@angular/core';

@Component({
	selector: 'insurance-item',
	templateUrl: './insurance-item.component.html',
	styleUrls: ['./insurance-item.component.scss'],
})
class InsuranceItemComponent implements AfterViewInit {
	@ViewChild('collapsible')
	collapsible: ElementRef<HTMLDivElement>;

	@Input() isOpen = true;

	constructor(private ngZone: NgZone) {}

	ngAfterViewInit() {
		if (this.isOpen) {
			this.expandSection();
		} else {
			this.collapseSection();
		}
	}

	toggle(newState: boolean) {
		this.isOpen = newState;

		if (this.isOpen) {
			this.expandSection();
		} else {
			this.collapseSection();
		}
	}

	collapseSection() {
		this.ngZone.runOutsideAngular(() => {
			const element = this.collapsible.nativeElement,
				sectionHeight = element.scrollHeight,
				elementTransition = element.style.transition;

			element.style.transition = '';

			requestAnimationFrame(function () {
				element.style.height = sectionHeight + 'px';
				element.style.transition = elementTransition;

				requestAnimationFrame(function () {
					element.style.height = 0 + 'px';
				});
			});
		});
	}

	expandSection() {
		this.ngZone.runOutsideAngular(() => {
			const element = this.collapsible.nativeElement,
				sectionHeight = element.scrollHeight;

			element.style.height = sectionHeight + 'px';

			const transitionEnd = (e: TransitionEvent) => {
				element.removeEventListener('transitionend', transitionEnd);

				element.style.height = 'auto';
			};

			element.addEventListener('transitionend', transitionEnd);
		});
	}
}

export { InsuranceItemComponent };
