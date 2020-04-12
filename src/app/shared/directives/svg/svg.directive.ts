import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
	selector: '[svg]',
})
class SvgDirective implements OnInit {
	@Input() path: string;

	constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		const element = this.el.nativeElement as HTMLDivElement,
			loadedPath = require(`src/assets/${this.path}`) as string,
			safeHtml = this.sanitizer.bypassSecurityTrustHtml(loadedPath);
		element.innerHTML = safeHtml['changingThisBreaksApplicationSecurity'];

		const test = require(`src/assets/i18n/cs.json`);
	}
}

export { SvgDirective };
