import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [ParentComponentComponent, ChildComponentComponent, ContainerComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentInteractionModule { }
