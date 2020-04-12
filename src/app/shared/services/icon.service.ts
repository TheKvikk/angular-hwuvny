import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Icon } from '../components/icons/icons';

@Injectable({
	providedIn: 'root',
})
class IconService {
	private svg: SVGSVGElement;
	private registry = new Map<string, string>();

	constructor() {
		const parser = new DOMParser();
		this.svg = parser
			.parseFromString(
				'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0;"></svg>',
				'text/xml',
			)
			.querySelector('svg');
		document.body.insertAdjacentElement('afterbegin', this.svg);
	}

	public registerIcons(icons: Icon[]): void {
		icons.forEach((icon: Icon) => {
			this.registry.set(icon.name, icon.htmlContent);

			const parser = new DOMParser();
			const symbol = parser
				.parseFromString(icon.htmlContent, 'image/svg+xml')
				.querySelector('symbol');
			this.svg.insertAdjacentElement('beforeend', symbol);
		});
	}

	public getIcon(iconName: string): string | undefined {
		if (!this.registry.has(iconName)) {
			// tslint:disable-next-line: no-console
			console.warn(
				`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`,
			);
		}
		return this.registry.get(iconName);
	}
}

export { IconService };
