module.exports = {
  darkicons: {
    files: [{
      expand: true,
      cwd: 'src/icons/source/',
      src: '*.svg',
      dest: 'src/icons/svg/'
    }]
  },
  lighticons: {
    files: [{
      expand: true,
      cwd: 'src/icons/source/',
      src: '*.svg',
      dest: 'src/icons/svg/',
      rename: function(dest, src) {
        var parts = src.split('.')
        return dest + parts[0]+'.c-icon-.colors-light.'+parts[1];
      }
    }]
  },
  dev: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'img/**', 'fonts/**', 'media/**'],
      dest: 'dev/'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['fonts/**', 'js/prism.js'],
      dest: 'build/'
    }]
  }
};