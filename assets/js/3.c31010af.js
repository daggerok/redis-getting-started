(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(s,t,e){"use strict";e.r(t);var a=e(0),r=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("p",[s._v("Redis playground...")]),s._v(" "),e("p",[s._v("Travis CI build status: "),e("a",{attrs:{href:"https://travis-ci.org/daggerok/redis-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/daggerok/redis-getting-started.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("GitHub "),e("a",{attrs:{href:"https://github.com/daggerok/redis-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[s._v("daggerok/redis-getting-started"),e("OutboundLink")],1),s._v(" repository")]),s._v(" "),e("p",[s._v("Read docs on "),e("a",{attrs:{href:"https://daggerok.github.io/redis-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pages"),e("OutboundLink")],1)]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),s._m(10),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),s._m(17),s._m(18),s._v(" "),s._m(19),s._m(20),s._v(" "),s._m(21),s._m(22),s._v(" "),s._m(23),s._m(24),s._v(" "),s._m(25),s._m(26),s._v(" "),s._m(27),s._v(" "),s._m(28),s._m(29),s._v(" "),s._m(30),s._m(31),s._v(" "),s._m(32),s._m(33),s._v(" "),e("p",[s._v("Why? Limitations for strings (key-value pairs) are about 512 Mb.\nBut in case of hashes (field-value pairs) limits up to 4 billions field-value pairs")]),s._v(" "),s._m(34),s._v(" "),s._m(35),s._m(36),s._v(" "),s._m(37),s._m(38),s._v(" "),s._m(39),s._v(" "),s._m(40),s._m(41),s._v(" "),e("p",[s._v("set field value if it's does not exists")]),s._v(" "),s._m(42),s._m(43),s._v(" "),s._m(44),s._m(45),s._v(" "),s._m(46),s._m(47),s._v(" "),s._m(48)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"redis-getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" redis getting started")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"run-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-database","aria-hidden":"true"}},[this._v("#")]),this._v(" run database")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker run -d --rm --name redis redis:alpine\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"prepare-redis-cli-command-alias-fot-using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-redis-cli-command-alias-fot-using-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" prepare redis-cli command alias fot using docker")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" redis-cli "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"docker exec -it redis ash -c 'redis-cli "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("'\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"basics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[this._v("#")]),this._v(" basics")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"show-keys-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-keys-keys","aria-hidden":"true"}},[this._v("#")]),this._v(" show keys "),t("code",[this._v("keys")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("redis-cli "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'keys *'")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# (empty list or set)")]),this._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"set-value-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-value-set","aria-hidden":"true"}},[this._v("#")]),this._v(" set value "),t("code",[this._v("set")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("redis-cli redis-cli "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'set message hi'")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# OK")]),this._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"get-value-get"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-value-get","aria-hidden":"true"}},[this._v("#")]),this._v(" get value "),t("code",[this._v("get")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get message'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "hi"')]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'keys *'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 1) "message"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"delete-data-del"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-data-del","aria-hidden":"true"}},[this._v("#")]),this._v(" delete data "),t("code",[this._v("del")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("redis-cli "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'del message'")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# (integer) 1")]),this._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"delete-all-data-flushall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-data-flushall","aria-hidden":"true"}},[this._v("#")]),this._v(" delete all data "),t("code",[this._v("flushall")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set k1 v1'")]),s._v("\nredis-cli redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set k2 v2'")]),s._v("\n \nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'keys *'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 1) "k2"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 2) "k1"')]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flushall'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'keys \\*'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# escaping star... in real terminal, command should be: redis-cli keys *")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (empty list or set)")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"set-value-with-expire-of-the-key-setex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-value-with-expire-of-the-key-setex","aria-hidden":"true"}},[this._v("#")]),this._v(" set value with expire of the key "),t("code",[this._v("setex")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'setex temporal 60 this-value-will-exire-after-60-secons'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ttl temporal'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 58")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 6s "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get temporal'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "this-value-will-exire-after-60-secons"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 60s "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get temporal'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (nil)")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ttl temporal'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) -2")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("NOTE: if you wanna set expire in millis, use "),t("code",[this._v("psetex")]),this._v(" command instead:")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("redis-cli "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'psetex key milliseconds value'")]),this._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"set-value-if-key-is-not-available-with-setnx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-value-if-key-is-not-available-with-setnx","aria-hidden":"true"}},[this._v("#")]),this._v(" set value if key is not available with "),t("code",[this._v("setnx")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get new-key'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (nil)")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'setnx new-key a-value'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 1")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get new-key'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "a-value"')]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'setnx new-key this-value-wont-be-present'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 0")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get new-key'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "a-value"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"get-value-size-with-strlen-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-value-size-with-strlen-command","aria-hidden":"true"}},[this._v("#")]),this._v(" get value size with "),t("code",[this._v("strlen")]),this._v(" command")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set ololo trololo'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'strlen ololo'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 7")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"setting-multiple-key-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-multiple-key-values","aria-hidden":"true"}},[this._v("#")]),this._v(" setting multiple key-values")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flushall'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mset k1 v1 k2 v2 k3 v3'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'keys \\*'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 1) "k3"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 2) "k2"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 3) "k1"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("NOTE:  command "),t("code",[this._v("ttl")]),this._v(" stands for "),t("code",[this._v("time to live")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"increment-with-incr-and-decrement-with-decr-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increment-with-incr-and-decrement-with-decr-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" increment with "),t("code",[this._v("incr")]),this._v(" and decrement with "),t("code",[this._v("decr")]),this._v("  commands")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set salary 4444'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decr salary'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 4443")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'incr salary'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 4444")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'incr salary'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 4445")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"customize-previous-flow-with-incrby-decrby"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customize-previous-flow-with-incrby-decrby","aria-hidden":"true"}},[this._v("#")]),this._v(" customize previous flow with "),t("code",[this._v("incrby")]),this._v(" / "),t("code",[this._v("decrby")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set salary 1000'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'decrby salary 5'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 995")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'incrby salary 500'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 1495")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'incrby salary 100500'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 101995")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"append"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#append","aria-hidden":"true"}},[this._v("#")]),this._v(" append")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set message hello'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'append message -world!'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 12")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get message'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "hello-world!"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"hashes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashes","aria-hidden":"true"}},[this._v("#")]),this._v(" hashes")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"set-key-field-value-pair-with-hmset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-key-field-value-pair-with-hmset","aria-hidden":"true"}},[this._v("#")]),this._v(" set key field-value pair with "),t("code",[this._v("hmset")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hmset person username maksimko password very-secret'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hget person password'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "very-secret"')]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hgetall person'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 1) "username"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 2) "maksimko"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 3) "password"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 4) "very-secret"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"hexists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hexists","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("hexists")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hexists person age'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 0")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hexists person username'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 1")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("age dose not exists in person object")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"hdel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdel","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("hdel")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hdel person password'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 1")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hgetall person'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 1) "username"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 2) "maksimko"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"hsetnx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hsetnx","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("hsetnx")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hsetnx person age 18'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# will set new field")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 1")]),s._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hsetnx person age 19'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# will ignore because age field already exists")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (integer) 0")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"hkeys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hkeys","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v("hkeys")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("redis-cli "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'hkeys person'")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v('# 1) "username"')]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v('# 2) "age"')]),this._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"cleanup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanup","aria-hidden":"true"}},[this._v("#")]),this._v(" cleanup")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("rm")]),this._v(" -f -v redis\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"build-vuepress-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-vuepress-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" build VuePress documentation")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build\n")])])])}],!1,null,null,null);t.default=r.exports}}]);