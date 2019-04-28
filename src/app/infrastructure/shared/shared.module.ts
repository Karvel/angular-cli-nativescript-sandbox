import { NgModule } from '@angular/core';

@NgModule({})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
        };
    }
}
