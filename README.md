# Development

Local Setup Gitlab
```docker-compose up -d {gitlab, gitlab-runner}```
```docker exec -i -t $GITLAB-RUNNER-ID sh```
```gitlab-runner register -n -r $GITLAB-RUNNER-TOKEN-FROM-PROCEJT-CICD -u http://gitlab --executor docker --docker-image docker:latest --docker-network-mode fhstpcdnexample_default --docker-privileged```

Hosts
127.0.0.1 gitlab.example.com
127.0.0.1 ssh.gitlab.example.com

SSH Config
Host ssh.gitlab.example.com¬
  HostName 127.0.0.1
  Port 2222
  User git



-----

docker exec -it gitlab-runner gitlab-runner register -n --url http://gitlab.example.com:4567 --registration-token $GITLAB-RUNNER-TOKEN-FROM-PROCEJT-CICD --clone-url http://gitlab.example.com:4567 --executor docker --docker-image "docker:latest" --docker-privileged

docker exec -t gitlab-master gitlab-ctl reconfigure
