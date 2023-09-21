import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { optionsListResolver } from './resolvers/options-list.resolver';
import { WizardFormComponent } from './components/wizard-form/wizard-form.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: WizardFormComponent,
      resolve: {
        optionsList: optionsListResolver
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
