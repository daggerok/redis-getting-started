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

## show keys `keys`

```bash
redis-cli 'keys *'
# (empty list or set)
```

## set value `set`

```bash
redis-cli redis-cli 'set message hi'
# OK
```

## get value `get`

```bash
redis-cli 'get message'
# "hi"
redis-cli 'keys *'
# 1) "message"
```

## delete data `del`

```bash
redis-cli 'del message'
# (integer) 1
```

## delete all data `flushall`

```bash
redis-cli redis-cli 'set k1 v1'
redis-cli redis-cli 'set k2 v2'
 
redis-cli 'keys *'
# 1) "k2"
# 2) "k1"
redis-cli 'flushall'
# OK
redis-cli 'keys *'
# (empty list or set)
```

## set value with expire of the key `setex`

```bash
redis-cli 'setex temporal 60 this-value-will-exire-after-60-secons'
# OK
redis-cli 'ttl temporal'
# (integer) 58
sleep 6s ; redis-cli 'get temporal'
# "this-value-will-exire-after-60-secons"
sleep 60s ; redis-cli 'get temporal'
# (nil)
redis-cli 'ttl temporal'
# (integer) -2
```

## set value if key is not available with `setnx`

```bash
redis-cli 'get new-key'
# (nil)
redis-cli 'setnx new-key a-value'
# (integer) 1
redis-cli 'get new-key'
# "a-value"
redis-cli 'setnx new-key this-value-wont-be-present'
# (integer) 0
redis-cli 'get new-key'
# "a-value"
```

## get value size with `strlen` command

```bash
redis-cli 'set ololo trololo'
# OK
redis-cli 'strlen ololo'
# (integer) 7
```

NOTE:  command `ttl` stands for `time to live`

## cleanup

```bash
docker rm -f -v redis
```

## build VuePress documentation

```bash
npm i ; npm run build
```
