# grunt-debugger-proof

> Grunt plugin to run a source modification tool to add eval statements to every function for debugging

More information can be found in [the add-eval-to-source repository](https://github.com/johnkpaul/add-eval-to-source).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-debugger-proof --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-debugger-proof');
```

## The "debugger_proof" task

### Overview
In your project's Gruntfile, add a section named `debugger_proof` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  debugger_proof: {
    your_target: {
      'target_directory_path': ['source_paths']
    },
  },
})
```

### Usage Examples

#### Default Options
In this example, all `.js` files beneath the `src` directory are processed and then move to the dest directory

```js
grunt.initConfig({
  debugger_proof: {
    options: {},
    files: {
      'dest': ['src/**/*.js'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
