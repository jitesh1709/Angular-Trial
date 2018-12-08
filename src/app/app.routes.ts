import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { EditUserResolver } from './edit-notes/edit-notes.resolver';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-note', component: NewNoteComponent },
  { path: 'details/:id', component: EditNotesComponent, resolve:{data : EditUserResolver} }
];
