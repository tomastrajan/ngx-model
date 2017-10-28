import { NgModule } from '@angular/core';
import { MODEL_PROVIDER } from './lib/model';

export * from './lib/model';

@NgModule({
  providers: [MODEL_PROVIDER]
})
export class NgxModelModule {}
