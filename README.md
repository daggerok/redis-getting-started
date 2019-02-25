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

## basics

### show keys `keys`

```bash
redis-cli 'keys *'
# (empty list or set)
```

### set value `set`

```bash
redis-cli redis-cli 'set message hi'
# OK
```

### get value `get`

```bash
redis-cli 'get message'
# "hi"
redis-cli 'keys *'
# 1) "message"
```

### delete data `del`

```bash
redis-cli 'del message'
# (integer) 1
```

### delete all data `flushall`

```bash
redis-cli redis-cli 'set k1 v1'
redis-cli redis-cli 'set k2 v2'
 
redis-cli 'keys *'
# 1) "k2"
# 2) "k1"
redis-cli 'flushall'
# OK
redis-cli 'keys \*' # escaping star... in real terminal, command should be: redis-cli keys *
# (empty list or set)
```

### set value with expire of the key `setex`

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

_NOTE: if you wanna set expire in millis, use `psetex` command instead:_

```bash
redis-cli 'psetex key milliseconds value'
```

### set value if key is not available with `setnx`

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

### get value size with `strlen` command

```bash
redis-cli 'set ololo trololo'
# OK
redis-cli 'strlen ololo'
# (integer) 7
```

### setting multiple key-values

```bash
redis-cli 'flushall'
# OK
redis-cli 'mset k1 v1 k2 v2 k3 v3'
# OK
redis-cli 'keys \*'
# 1) "k3"
# 2) "k2"
# 3) "k1"
```
 
_NOTE:  command `ttl` stands for `time to live`_

### increment with `incr` and decrement with `decr`  commands

```bash
redis-cli 'set salary 4444'
# OK
redis-cli 'decr salary'
# (integer) 4443
redis-cli 'incr salary'
# (integer) 4444
redis-cli 'incr salary'
# (integer) 4445
```

### customize previous flow with `incrby` / `decrby`

```bash
redis-cli 'set salary 1000'
# OK
redis-cli 'decrby salary 5'
# (integer) 995
redis-cli 'incrby salary 500'
# (integer) 1495
redis-cli 'incrby salary 100500'
# (integer) 101995
```

### append

```bash
redis-cli 'set message hello'
# OK
redis-cli 'append message -world!'
# (integer) 12
redis-cli 'get message'
# "hello-world!"
```

## hashes

Why? Limitations for strings (key-value pairs) are about 512 Mb.
But in case of hashes (field-value pairs) limits up to 4 billions field-value pairs

### set key field-value pair with `hmset`

```bash
redis-cli 'hmset person username maksimko password very-secret'
# OK
redis-cli 'hget person password'
# "very-secret"
redis-cli 'hgetall person'
# 1) "username"
# 2) "maksimko"
# 3) "password"
# 4) "very-secret"
```

### `hexists`

```bash
redis-cli 'hexists person age'
# (integer) 0
redis-cli 'hexists person username'
# (integer) 1
```

_age dose not exists in person object_

### `hdel`

```bash
redis-cli 'hdel person password'
# (integer) 1
redis-cli 'hgetall person'
# 1) "username"
# 2) "maksimko"
```

### `hsetnx`

set field value if it's does not exists

```bash
redis-cli 'hsetnx person age 18' # will set new field
# (integer) 1
redis-cli 'hsetnx person age 19' # will ignore because age field already exists
# (integer) 0
```

### `hkeys`

```bash
redis-cli 'hkeys person'
# 1) "username"
# 2) "age"
```

### `hincrby` similar to strings

```bash
redis-cli 'hincrby person age 1'
# (integer) 19
redis-cli 'hincrby person age 5'
# (integer) 24
```

_NOTE: returns only key fields of object_

## cleanup

```bash
docker rm -f -v redis
```

## build VuePress documentation

```bash
npm i ; npm run build
```
