module.exports = {
  compass: {
    files: ['src/sass/**/*.{scss,sass}'],
    tasks: ['compass:dev', 'newer:postcss:dev']
  },
  components: {
    files: ['src/components/**/*.mustache'],
    tasks: ['makedocs:dev']
  },
  pages: {
    files: ['src/pages/*.md', '!src/pages/sample.md'],
    // tasks: ['newer:makedocs:dev'] // Recreates nav with single, changed file :(
    tasks: ['makedocs:dev']
  },
  study: {
    files: ['src/templates/**/*.html'],
    tasks: ['newer:copy:templates']
  },
  js: {
    files: ['src/js/**/*.js'],
    tasks: ['newer:copy:dev']
  },
  img: {
    files: ['src/img/**/*.{png,jpg,svg,gif}'],
    tasks: ['newer:copy:dev']
  }
};