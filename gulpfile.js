import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";
import {watching} from "./gulp/tasks/watching.js";
import {styles} from "./gulp/tasks/styles.js";

const {series, task, parallel} = gulp;

const dev = series(
    styles,
    parallel(server, watching),
);

task('dev', dev);
task('styles', styles);
task("default", dev);
