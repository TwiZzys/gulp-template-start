import browserSync from 'browser-sync';
import config from "../../config.js";

export const bs = browserSync.create();

export const server = () => {
    bs.init({
        ...config.server
    });
}