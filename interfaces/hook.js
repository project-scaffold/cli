const execSync = require('child_process').execSync

module.exports = {
  after(answer, reply){
    execSync(`cd ${answer.scaffold} && npm i`)
    console.log('hook after done')
  }
}
