import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestComponent,
      },
    ]),
  ],
  declarations: [TestComponent],
})
export class BlockTestModule {}
