# Development

Local Setup Gitlab
```docker-compose up -d```
```docker exec -i -t $GITLAB-RUNNER-ID sh```
```gitlab-runner register -n -r $GITLAB-RUNNER-TOKEN-FROM-PROCEJT-CICD -u http://gitlab --executor docker --docker-image docker:latest --docker-network-mode gitlaboncompose_default --docker-privileged```
