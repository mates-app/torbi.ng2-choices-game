/**
 * Created by josecullen on 30/08/16.
 */
import { Component, Input } from '@angular/core';

import { Post } from './models'

@Component({
    selector: 'tbt-post',
    template: `
        <h1>{{post.title}}</h1>
        <h6>{{post.author}} {{post.date}}</h6>
        <h5>{{post.content}}</h5>
    `
})
export class TbtPost{
    @Input() post:Post = new Post('','','','')

}

