'use strict'

module.exports = {
  name: 'Frontend Extend with Phonegap',
  description: 'https://github.com/mustardamus/lehm-frontend-extend-phonegap',
  delimiters: '{{ }}',
  ignore: ['README.md', 'package.json'],

  after: function (srcPath, distPath, variables, utils) {
    let pkgPath = distPath + '/package.json'
    let oldPkg = require(pkgPath)
    let extPkg = require(srcPath + '/package.json')

    utils._.assign(oldPkg.config, extPkg.config)
    utils._.assign(oldPkg.scripts, extPkg.scripts)

    console.log(utils.Chalk.yellow('Extending package.json...'))
    utils.Fs.writeFileSync(pkgPath, JSON.stringify(oldPkg, null, 2), 'utf8')

    let giPath = distPath + '/.gitignore'
    let gitIgnore = utils.Fs.readFileSync(giPath, 'utf8')
    gitIgnore += '\n/platforms\n/plugins\n'

    console.log(utils.Chalk.yellow('Extending .gitignore...'))
    utils.Fs.writeFileSync(giPath, gitIgnore, 'utf8')

    console.log(utils.Chalk.yellow('Installing Phonegap...'))
    utils.Shell.exec('npm install phonegap --save')

    console.log(utils.Chalk.yellow('Preparing Browser target...'))

    if (!utils.Fs.existsSync(distPath + '/www/index.html')) {
      utils.Shell.exec('npm run client:clean')
      utils.Shell.exec('npm run client:copy')
    }

    utils.Shell.exec('npm run phonegap:prepare:browser')
  }
}
