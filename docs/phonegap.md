# Phonegap

[Phonegap Docs](http://docs.phonegap.com/).

## NPM commands

Execute them with `npm run [command]`.

#### phonegap:requirements

Checks the requirements for the installed targets.

#### phonegap:prepare:browser

Prepares the browser target.

#### phonegap:prepare:android

Prepares the android target.

#### phonegap:prepare:ios

Prepares the ios target.

#### phonegap:run:android

Runs the app on a USB connected android device.

#### phonegap:run:ios

Runs the app on a USB connected ios device.

#### phonegap:compile:android

Compiles the contents in `./www` to a debug build for android.

#### phonegap:compile:ios

Compiles the contents in `./www` to a debug build for ios.

#### phonegap:build:android

Runs `client:clean` & `client:copy` & `client:build:prod`, then builds a
unsigned production build for android.

#### phonegap:build:ios

Runs `client:clean` & `client:copy` & `client:build:prod`, then builds a
unsigned production build for ios.

#### phonegap:serve

Runs the Phonegap server on port `9009` from the `./www` directory.

#### phonegap

Runs `client:clean` & `client:copy` & `client:watch` & `phonegap:serve`.
