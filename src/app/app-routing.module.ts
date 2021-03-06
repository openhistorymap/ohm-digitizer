import { LogoutComponent } from './auth/logout/logout.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './shared/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'list', component: ListComponent },
  { path: 'images', loadChildren: () => import('./drawings/drawings.module').then(m => m.DrawingsModule) },
  { path: 'work/map', loadChildren: () => import('./georeferencer/georeferencer.module').then(m => m.GeoreferencerModule) },
  { path: 'work/text', loadChildren: () => import('./text/text.module').then(m => m.TextModule) },
  { path: 'work/picture', loadChildren: () => import('./picture/picture.module').then(m => m.PictureModule) },
  { path: 'work/view', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
  { path: 'merger', loadChildren: () => import('./merger/merger.module').then(m => m.MergerModule) },
  { path: 'vectorize', loadChildren: () => import('./vectorizer/vectorizer.module').then(m => m.VectorizerModule) },
  { path: 'tag', loadChildren: () => import('./tagger/tagger.module').then(m => m.TaggerModule) },
  { path: 'upload', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
  { path: 'ohmify', loadChildren: () => import('./ohmify/ohmify.module').then(m => m.OhmifyModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
