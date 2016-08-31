/**
 * Created by josecullen on 30/08/16.
 */
/**
 * Created by josecullen on 30/08/16.
 */
import { Component, Input } from '@angular/core';

import { Post } from './models'

@Component({
    selector: 'tbt-comments',
    template: `
        <div *ngFor="let comment of comments">
            <h3>{{comment.title}}</h3>
            <h6>{{comment.author}} {{comment.date}}</h6>
            <h5>{{comment.content}}</h5>
        </div>
    `

})
export class TbtComments{
    @Input() comments:Array<Post> = []

}

