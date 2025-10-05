const root = 'src';

export default {
    root,
    server: {
        server: {
            baseDir: root
        },
        open: true,
        notify: false,
        port: 3000,
    },

    scss: {
        mainScss: `${root}/scss/main.scss`,
        allFiles: `${root}/**/*.scss`,
        get watchFiles() {
            return this.allFiles;
        }
    },

    dest: {
        cssFolder: `${root}/css`,
    }
}