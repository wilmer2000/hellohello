import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { optionsListResolver } from './resolvers/options-list.resolver';
import { FormContentComponent } from './components/form-content/form-content.component';

const routes: Routes = [{
  path: '',
  component: FormContentComponent,
  resolve: {
    optionsList: optionsListResolver
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
