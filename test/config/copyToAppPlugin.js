const exec = require('child_process').exec

function CopyToAppPlugin() {}

CopyToAppPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function() {
    exec('cp -fr ../htdocs_before_deploy/ ../htdocs/', (err, stdout) => {
      console.log('1111')
      if (err) {
        console.log(err)
      }
      console.log(stdout)
    })
  })
}

module.exports = CopyToAppPlugin
