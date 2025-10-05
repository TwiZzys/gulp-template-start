import gulp from "gulp";
import config from "../../config.js";
import {styles} from "./styles.js";

const {watch} = gulp;

export const watching = () => {
    watch(config.scss.watchFiles, styles);
}