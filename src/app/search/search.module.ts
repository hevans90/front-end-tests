import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './components/character/character.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { MaterialManifestModule } from '../material-manifest/material-manifest.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialManifestModule,
    RouterModule.forChild([{ path: '', component: CharacterSearchComponent }]),
  ],
  declarations: [CharacterComponent, CharacterSearchComponent],
  exports: [CharacterComponent, CharacterSearchComponent],
})
export class SearchModule {}
