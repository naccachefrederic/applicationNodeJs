pipeline { 
    agent any  
    stages { 
        stage('Build') { 
            steps { 
                    sh 'npm install'
                    sh 'npm install mocha -g'
                    sh 'npm install mocha --save-dev'
                    sh 'npm run test'
            }
        }
    }
}
