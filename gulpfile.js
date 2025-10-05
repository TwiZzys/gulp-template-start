import gulp from "gulp";
import {server} from "./gulp/tasks/server.js";

const {series, task} = gulp;

const dev = series(
    server,
);

task('dev', dev);
task("default", dev);
