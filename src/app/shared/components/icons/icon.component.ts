// Import the core angular services.
import {
	ChangeDetectionStrategy,
	Input,
	Component,
	OnChanges,
} from '@angular/core';
import { uuid } from '../../utils';

export type icons = 'help';

@Component({
	selector: 'icon',
	host: {
		'[attr.title]': 'ariaTitle',
		'[attr.aria-hidden]': 'ariaHidden',
		'[attr.aria-labelledby]': 'ariaLabelledBy',
		role: 'img',
	},
	template: `
		<svg
			aria-hidden="true"
			focusable="false"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			[attr.width]="width"
			[attr.height]="height"
		>
			<title *ngIf="ariaTitle" [attr.id]="ariaLabelledBy">
				{{ ariaTitle }}
			</title>

			<use [attr.xlink:href]="'#' + type"></use>
		</svg>
	`,
	styles: ['svg { color: inherit; fill: currentColor; }'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
	ariaHidden: true | null;
	ariaLabelledBy: string | null;
	ariaTitle: string | null;

	@Input() title: string;
	@Input() type: icons;
	@Input() width = '24px';
	@Input() height = '24px';

	constructor() {
		this.ariaHidden = true;
		this.ariaLabelledBy = null;
		this.ariaTitle = null;
	}

	ngOnChanges(): void {
		if (this.title) {
			this.ariaHidden = null;
			this.ariaLabelledBy = this.ariaLabelledBy || `aria-id-${uuid()}`;
			this.ariaTitle = this.title;
		} else {
			this.ariaHidden = true;
			this.ariaLabelledBy = null;
			this.ariaTitle = null;
		}
	}
}
