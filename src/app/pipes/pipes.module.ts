import { NgModule } from '@angular/core';
import { ReadStatusPipe } from './read-status.pipe';

@NgModule({
  declarations: [ReadStatusPipe],
  exports: [ReadStatusPipe]
})
export class PipesModule {}
