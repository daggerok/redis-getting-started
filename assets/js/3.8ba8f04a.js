(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Redis playground...")]),t._v(" "),e("p",[t._v("Travis CI build status: "),e("a",{attrs:{href:"https://travis-ci.org/daggerok/redis-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://travis-ci.org/daggerok/redis-getting-started.svg?branch=master",alt:"Build Status"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("GitHub "),e("a",{attrs:{href:"https://github.com/daggerok/redis-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("daggerok/redis-getting-started"),e("OutboundLink")],1),t._v(" repository")]),t._v(" "),e("p",[t._v("Read docs on "),e("a",{attrs:{href:"https://daggerok.github.io/redis-getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),e("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"redis-getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" redis getting started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"run-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-database","aria-hidden":"true"}},[this._v("#")]),this._v(" run database")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("docker run -d --rm --name redis redis:alpine\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prepare-redis-cli-command-alias-fot-using-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-redis-cli-command-alias-fot-using-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" prepare redis-cli command alias fot using docker")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" redis-cli "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"docker exec -it redis ash -c 'redis-cli "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("'\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"show-keys-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-keys-keys","aria-hidden":"true"}},[this._v("#")]),this._v(" show keys "),s("code",[this._v("keys")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("redis-cli "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v("'keys *'")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# (empty list or set)")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"set-value-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-value-set","aria-hidden":"true"}},[this._v("#")]),this._v(" set value "),s("code",[this._v("set")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("redis-cli redis-cli "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v("'set message hi'")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# OK")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"get-value-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-value-get","aria-hidden":"true"}},[this._v("#")]),this._v(" get value "),s("code",[this._v("get")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get message'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "hi"')]),t._v("\n\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keys *'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 1) "message"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"delete-data-del"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-data-del","aria-hidden":"true"}},[this._v("#")]),this._v(" delete data "),s("code",[this._v("del")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("redis-cli "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v("'del message'")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# (integer) 1")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"delete-all-data-flushall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-data-flushall","aria-hidden":"true"}},[this._v("#")]),this._v(" delete all data "),s("code",[this._v("flushall")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("redis-cli redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set k1 v1'")]),t._v("\nredis-cli redis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'set k2 v2'")]),t._v("\n\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keys *'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 1) "k2"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 2) "k1"')]),t._v("\n\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flushall'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OK")]),t._v("\nredis-cli "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keys *'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (empty list or set)")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"cleanup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleanup","aria-hidden":"true"}},[this._v("#")]),this._v(" cleanup")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("rm")]),this._v(" -f -v redis\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"build-vuepress-documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-vuepress-documentation","aria-hidden":"true"}},[this._v("#")]),this._v(" build VuePress documentation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" i "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build\n")])])])}],!1,null,null,null);s.default=r.exports}}]);