var gulp = require("gulp");

module.exports = function() {
    return  gulp.task("build", function() {
        gulp.start("templateCache", "copy", "inject");
    })
}
