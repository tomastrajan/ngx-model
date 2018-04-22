import { NgModule } from '@angular/core';
import { MODEL_PROVIDER } from './model';

export * from './model';

@NgModule({
  providers: [MODEL_PROVIDER]
})
export class NgxModelModule {}
