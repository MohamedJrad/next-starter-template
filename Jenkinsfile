pipeline {

  agent any
    
  tools {nodejs "node"}

    stages {

        stage('Prepare') {
             steps {
                  sh "npm install -g yarn"
            }
        }

        stage('Build') {
            steps {
                sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                   sh 'yarn test'
            }
        }

         stage('Deploy') {
            
            steps {

    
                   withCredentials([usernamePassword(credentialsId: 'jenkins_ssh_access', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        script {

                              def remote = [name: 'ssh remote', host: "72.167.53.61", user: "$USERNAME", password:"$PASSWORD", allowAnyHosts: true]
                              
                              if (env.BRANCH_NAME == "dev") {                                          
                                   
                                    echo 'dev branch...'
                                    sshCommand remote: remote, command: "/var/www/html/fetsh-deploy-scripts/fetsh-client-web-app/dev/deploy.sh", sudo: true
                              
                                } else  if (env.BRANCH_NAME == "stage") {   
                                     
                                    echo 'stage branch...'
                                    sshCommand remote: remote, command: "/var/www/html/fetsh-deploy-scripts/fetsh-client-web-app/stage/deploy.sh", sudo: true
                                   
                                }  else  if (env.BRANCH_NAME == "prod") { 
                                  
                                    echo 'prod branch...'
                                    sshCommand remote: remote, command: "/var/www/html/fetsh-deploy-scripts/fetsh-client-web-app/prod/deploy.sh", sudo: true
                               
                                }                                                                              

                              
                               
                        }
                    }  
            }
        }

        
    }
}