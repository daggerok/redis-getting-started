# redis getting started
Redis playground...

Travis CI build status: [![Build Status](https://travis-ci.org/daggerok/redis-getting-started.svg?branch=master)](https://travis-ci.org/daggerok/redis-getting-started/)

GitHub [daggerok/redis-getting-started](https://github.com/daggerok/redis-getting-started/) repository

Read docs on [GitHub Pages](https://daggerok.github.io/redis-getting-started/)

## run database

```bash
docker run -d --rm --name redis redis:alpine
```

## prepare redis-cli command alias fot using docker

```bash
function redis-cli { bash -c "docker exec -it redis ash -c 'redis-cli $1'"; }
```

## show keys

```bash
redis-cli 'keys *'
# (empty list or set)
```

## set value

```bash
redis-cli redis-cli 'set message hi'
# OK
```

## get value

```bash
redis-cli 'get message'
# "hi"

redis-cli 'keys *'
# 1) "message"
```

## delete data

```bash
redis-cli 'del message'
# (integer) 1
```

## cleanup

```bash
docker rm -f -v redis
```

## build VuePress documentation

```bash
npm i ; npm run build
```
