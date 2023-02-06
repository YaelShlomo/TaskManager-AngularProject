import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AsyncAwaitDemoComponent } from "./async-await-demo/async-await-demo.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { DemoRoutingModule } from "./demo-routing.module";
import { HighLightDirective } from "./directives-demo/highlight.directive";

@NgModule({
    declarations:[AsyncAwaitDemoComponent,ObservableDemoComponent, DirectivesDemoComponent, HighLightDirective],
    imports: [CommonModule, DemoRoutingModule],
    exports: [AsyncAwaitDemoComponent,ObservableDemoComponent]
})

export class DemoModule {

}