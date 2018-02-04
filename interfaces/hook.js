const execSync = require('child_process').execSync

module.exports = {
  after(answer, reply){
    console.log('hook after starting')
    execSync(`cd ${answer.scaffold} && npm i`)
    console.log('hook after done')
  }
}
