import { Component, Input, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
	selector: 'tooltip',
	template: `<div class="tooltip" tooltip [tooltipOptions]="options">
		<div svg [path]="'images/svg/help.svg'"></div>
		<div style="display: none;" #tooltipBody>
			<ng-content></ng-content>
		</div>
	</div>`,
	styles: ['.tooltip { display: inline-block; }'],
})
class TooltipComponent implements OnInit {
	@ViewChild('tooltipBody', { static: true })
	tooltipBody: ElementRef<HTMLDivElement>;

	options: Object;

	@Input() name: string;
	@Input() interactive = false;
	@Input() maxWidth: number | string;
	@Input() placement: 'top' | 'right' | 'bootom' | 'left' = null;

	ngOnInit(): void {
		this.options = {
			name: this.name,
			content: this.tooltipBody.nativeElement.innerHTML,
			allowHTML: true,
			maxWidth: this.maxWidth,
			interactive: true,
			placement: this.placement,
		};
	}
}

export { TooltipComponent };
