/**
 * Created by josecullen on 28/08/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TbtPost } from './post.component'
import { TbtComments } from './comments.component'

@NgModule({
    imports:      [ BrowserModule ],
    exports: [ TbtComments, TbtPost],
    declarations: [ TbtComments, TbtPost],
    bootstrap:    [ TbtPost ]
})
export class BlogModule { }
