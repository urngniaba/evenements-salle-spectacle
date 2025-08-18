pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/urngniaba/evenements-salle-spectacle.git'
            }
        }

        stage('Install Git & Docker via Ansible') {
            steps {
                sh 'ansible-playbook -i install-tools.yaml'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t events-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop events-app || true
                docker rm events-app || true
                docker run -d -p 5000:5000 --name events-app events-app
                '''
            }
        }
    }
}



// pipeline {
//     agent any

//     stages {
//         stage('Checking Docker version') {
//             steps {
//                 sh '/usr/bin/docker docker -v'
//             }
//         }
        
//         stage('Docker Login') {
//             steps {
//                 sh '/usr/bin/docker login -u ulrichromeo -p dckr_pat_1UApvmuUrthDRL3lo-yukoeQ9t8'
//             }
//         }

//         stage('Pulling docker image') {
//             steps {
//                 sh '/usr/bin/docker pull ulrichromeo/my-events'
//             }
//         }
//         stage('Running events container') {
//             steps {
//                 sh '/usr/bin/docker run -dt ulrichromeo/my-events'
//             }
//         }
//     }
// }

