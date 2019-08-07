# Development

## Local Setup Gitlab
```docker-compose up -d {gitlab, gitlab-runner}```
via ```docker exec sh```
```docker exec -i -t $GITLAB-RUNNER-ID sh```
```gitlab-runner register -n --url http://gitlab --clone-url http://gitlab --registration-token $GITLAB-RUNNER-TOKEN-FROM-PROCEJT-CICD --executor docker --docker-image "docker:latest" --docker-privileged --docker-network-mode gitlab-network```
or direct via ```docker exec```
```docker exec -it gitlab-runner gitlab-runner register -n --url http://gitlab --clone-url http://gitlab --registration-token $GITLAB-RUNNER-TOKEN-FROM-PROCEJT-CICD --executor docker --docker-image "docker:latest" --docker-privileged --docker-network-mode gitlab-network```

### Hosts (/etc/hosts)
127.0.0.1 gitlab.example.com
127.0.0.1 ssh.gitlab.example.com
127.0.0.1 pages.example.com
127.0.0.1 registry.gitlab.example.com

### SSH Config (~/.ssh/config)
Host ssh.gitlab.example.com¬
  HostName 127.0.0.1
  Port 2222
  User git


gitlab pages

Edit /etc/gitlab/gitlab.rb.
Set the inplace_chroot to true for GitLab Pages:

pages_nginx['enable'] = false
gitlab_pages['external_http'] = ['http://gitlab:81']
gitlab_pages['inplace_chroot'] = true

Reconfigure GitLab.


gitlab-ctl reconfigure
