import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[appHighLight]"
})

export class HighLightDirective {

    @Input()
    highlightColor: string;

    constructor (private _el: ElementRef) {
        console.log("HighLightDirective created");
    }

    ngOnInit() {
        // this._el.nativeElement.style.backgroundColor = this.highlightColor || "yellow";
    }

    @HostListener("mouseenter")
    onMouseEnter() {
        this._el.nativeElement.style.backgroundColor = this.highlightColor || "yellow";
    }

    onMouseLeave() {
        this._el.nativeElement.style.backgroundColor = null;
    }

}