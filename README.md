## tagsystem-docker

make tagsystem as container

### remove old images

```shell
docker image rm goldensundd/tagsystem-web
docker image rm goldensundd/tagsystem-backend
```

### build images

```shell
docker-compose build --no-cache --pull
```

### start service (if some container not start properly, try run command again after failed)

```shell
docker-compose up -d
```
