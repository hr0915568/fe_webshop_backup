pipeline {
    agent any

    stages {
     	stage('clean') {
                steps {

                }
            }
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'ng build --prod'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying....'
                echo 'Copy zip package to test server....'
                sh 'scp -r dist docker@192.168.1.7:~/fe_webshop'
            }
        }
    }
}