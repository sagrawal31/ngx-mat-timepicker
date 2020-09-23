"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    path = require("path"),
    exec = require("child_process").exec
;

const libName = "ngx-mat-timepicker";
const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, `projects/${libName}/src/lib`);
const distFolder = path.join(rootFolder, `dist/${libName}`);

const taskNames = {
    postBuild: "postBuild",
    copyMDs: "copyMDs",
    pack: "pack"
};

gulp.task(taskNames.copyMDs, (cb) => {
    logStart(taskNames.copyMDs);
    gulp.src([
        path.join(rootFolder, "changelog.md"),
        path.join(rootFolder, "README.md")
    ])
    .pipe(gulp.dest(distFolder));
    logEnd(taskNames.copyMDs);
    cb();
});

// PACK
gulp.task(taskNames.pack, function (cb) {
    logStart(taskNames.pack);
    exec(`npm pack ./dist/${libName}`, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        logEnd(taskNames.pack);
        cb(err);
    });
});

//MAIN
gulp.task(taskNames.postBuild, gulp.series(taskNames.copyMDs, function (cb, err) {
    logEnd(taskNames.postBuild);
    cb(err);
}));