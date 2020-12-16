pipeline { 
    agent any  
    stages { 
        stage('Build') { 
            steps { 
                    npm install
                    npm install mocha -g
                    npm install mocha --save-dev
                    npm run test 
            }
        }
    }
}
