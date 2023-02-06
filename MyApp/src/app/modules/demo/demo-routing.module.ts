import { Directive, NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";

const DEMO_ROUTES: Route[] = [
    {path:"", redirectTo:"directives", pathMatch: "full"},
    {path:"directives", component: DirectivesDemoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(DEMO_ROUTES)],
    exports: [RouterModule]
})

export class DemoRoutingModule {

}