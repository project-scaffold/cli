const exec = require('child_process').execSync

module.exports = {
   after(meta, module) {
    console.log('hook after starting')
    
    return module.runBash(`cd ${meta.dir} && npm i`)
      .then(() =>  console.log('hook after done'))
  }
}
