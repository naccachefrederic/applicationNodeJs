pipeline {
  agent any 
  tools { nodejs 'NodeJS' }
  stages {
    stage('build') {
      steps {
                sh 'npm install'
                sh 'npm install mocha -g'
                sh 'npm install mocha --save-dev'
      }
    }
    stage('test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
