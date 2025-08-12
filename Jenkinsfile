pipeline {
    agent any

    stages {
        stage('Docker Login') {
            steps {
                sh 'docker login -u ulrichromeo -p dckr_pat_1UApvmuUrthDRL3lo-yukoeQ9t8'
            }
        }

        stage('Pulling docker image') {
            steps {
                sh 'docker pull ulrichromeo/my-events'
            }
        }
        stage('Running events container') {
            steps {
                sh 'docker run -dt --name ctr-1 -p 3000:3000 ulrichromeo/my-events'
            }
        }
    }
}

