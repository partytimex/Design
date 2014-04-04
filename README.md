## nmg-workflow  

**nmg-workflow** is a cross-platform, efficient, smooth workflow for F2E project based on [Grunt].
 

###Table of contents

* [Quick start](#quick-start)
* [What's included](#whats-included)
* [System Environment](#system-environment)
* [Documentation](#documentation)
* [Task Details](#task-details)
* [Demo](#demo)
* [Know Issues](#know-issues)
* [License](#license)

### Quick Start

4 quick start options are available:

- Install with [yeoman](http://yeoman.io/) or custom it according to repo: [generator-f2e] : 
    - `npm install -g generator-f2e`
    - `yo f2e`
- Install with [Bower](http://bower.io/): `bower install f2e`

Read the [Getting Started page] and [wiki list] for more.

### What's included

Within the download you'll find the following directories and files, you'll see something like this:

```
nmg-workflow/
│
├── package.json                // Project dependance
├── Gruntfile.js                // Grunt task config
├── .ftppass                    // FTP passwork(optional): grunt-ftp-deploy
│
├── node_modules                  // `npm install` generate package
│
├── html/                         // HTML files
│   └── index.html
├── css/                        // CSS source files(e.g., `Less`/`Sass`)
│   ├── lib-reset.less
│   ├── lib-mixins.less
│   └── style.less
├── img/                        // Images source [non-sprite] e.g, logo
│   ├── logo.png
│   └── background.png
├── slice/                      // Slice images source [Tobe-Sprite] e.g, Icons
│   ├── icon-github.png
│   ├── icon-github@2x.png      // Include 1x & 2x images
│   ├── icon-twitter.png
│   └── icon-twitter@2x.png
└── publish/                    // The target folder, The final F2E output
    ├── css/                    // The final CSS
    │   └── style.css
    ├── img/                    // just copy from `../img/`
    │   ├── logo.png
    │   └── background.png
    └── sprite/                 // Sprited automatically
        └── demo.png
```

After run `nmg-workflow`, you'll get `../publish` which is the final output.

### System Environment

#### Mac OS

1. Recommended: install [Node.js] with [Brew] *If not installed*
2. Install those two requirements [via](https://github.com/Ensighten/spritesmith#requirements)

        // install GraphicsMagick library
        // `Xcode Command Line Tools` may be needed, please agree.
        brew install GraphicsMagick
        
        // install Phantomjs library
        brew install phantomjs
        
        // re-install node_modules, e.g. `gm`
        npm install

3. Run `gm version` & `phantomjs --version` to test if your environment is OK.

#### Windows

1. Install [Node.js] *If not installed*
2. Download, then Install [GraphicsMagick] & [Phantomjs]  
    * [Install ](https://github.com/hzlzh/f2e-workflow/issues/2)  
    * Download Mirror: [GraphicsMagick-1.3.19-Q8-win32-dll.zip](https://app.box.com/s/95johmr7aggnqvrcpabu)
    * Download Mirror: [phantomjs-1.9.2-windows.zip](https://app.box.com/s/95johmr7aggnqvrcpabu)
3. At last [Set system variable](https://github.com/hzlzh/f2e-workflow/issues/6)

#### Both

1. After install `GraphicsMagick` and `Phantomjs` successfully, run `npm install` to pull the dependance package.
    * If you get some network trouble, you can download [node_modules.zip](https://app.box.com/s/95johmr7aggnqvrcpabu) instead.

<a name="details"></a>
### Documentation

A full `f2e-workflow` include those `Tasks` below:
    
* Compile `Less/Sass` to `CSS`
* `CSS` Lint
* `CSS` compression
* Auto merge sprite images
* Auto fit `@2x` retina images
* Add timestamp after `CSS` files
* Watch files changes
* `FTP` deploy
* `ZIP` package

### Task Details

#### 1. Default workflow `grunt`

```
grunt.registerTask('default', ['less:dev', 'copy:dev', 'clean:dev', 'watch']);
Output folder: ../publish/(css/ + img/ + slice/) 
```

*Note: Only do `Less/Sass` -> `CSS`*


#### 2. Full workflow `grunt all`

**Output folder:** `../publish/(css/ + img/ + sprite/)`  
*Note: Include Less/Sass Compile+Compression+Sprite+PNGmin, without file watch*

#### 3. Debug workflow `grunt debug`

**Output folder:** `../publish/(css/ + img/ + sprite/)`  
*Note: Same as `grunt all`, but will not delete `tmp/` folder, this is only for debug use(with file watch task inside)*

#### 4. FTP deploy workflow `grunt push`

*Note: `grunt push` will push all the output to FTP server*

#### 5. ZIP package `grunt zip`

*Note: `grunt zip` will package all the output files into `.zip` file*

#### Rename init `grunt sprite-cssmin`

*Note: copy files from `slice/` to -> `sprite` -> CSS compression*

#### Rename init `grunt 2x2x`

*Note: @2x image to @1x image*

### Demo

Command line demo is below, 

![Demo](https://f.cloud.github.com/assets/1049575/2406255/386e803c-aa67-11e3-982b-36590d24f459.gif)


### License

Released under [MIT] LICENSE

[MIT]: http://rem.mit-license.org/
[Grunt]: http://gruntjs.com/