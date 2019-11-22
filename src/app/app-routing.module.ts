import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolationComponent } from './interpolation/interpolation.component'
import { PropertyBindingComponent } from './property-binding/property-binding.component'
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

const routes: Routes = [
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'property-binding', component: PropertyBindingComponent},
  {path: 'class-binding', component: ClassBindingComponent},
  {path: 'event-binding', component: EventBindingComponent},
  {path: 'style-binding', component: StyleBindingComponent},
  {path: 'template-reference-variables', component: TemplateReferenceVariablesComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent},
  {path: 'ng-if-directive', component: NgIfDirectiveComponent},
  {path: 'ng-switch-directive', component: NgSwitchDirectiveComponent},
  {path: 'ng-for-directive', component: NgForDirectiveComponent},
  {path: 'component-interaction', component: ComponentInteractionComponent},
  {path: 'pipes', component: PipesDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
