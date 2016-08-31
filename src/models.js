"use strict";
/**
 * Created by josecullen on 30/08/16.
 */
var Post = (function () {
    function Post(author, date, title, content) {
        this.author = author;
        this.date = date;
        this.title = title;
        this.content = content;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=models.js.map