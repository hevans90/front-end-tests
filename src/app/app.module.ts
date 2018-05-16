import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MaterialManifestModule } from './material-manifest/material-manifest.module';
import { AppComponent } from './app.component';
import { SearchService } from './search/services/search.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialManifestModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
      {
        path: 'search',
        loadChildren: './search/search.module#SearchModule',
      },
      {
        path: 'block-test',
        loadChildren: './block-test/block-test.module#BlockTestModule',
      },
    ]),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
