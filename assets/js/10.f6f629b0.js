(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{425:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx配置文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置文件结构"}},[t._v("#")]),t._v(" Nginx配置文件结构")]),t._v(" "),a("p",[t._v("​\t\tnginx配置文件的名字是nginx.conf。 一般位于 /etc/nginx目录，有时候也会位于/usr/local/nginx/conf、 /usr/local/etc/nginx下")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# aux 显示所有包含其他使用者的行程")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" nginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ cat /proc/cpuinfo|grep -c 'processor'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/nginx/nginx.conf\nworker_processes  auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n$ nginx -t\nnginx: the configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /etc/nginx/nginx.conf syntax is ok\nnginx: configuration "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" is successful\n\n$ systemctl restart nginx\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" nginx\n")])])]),a("h2",{attrs:{id:"_1-指令-dircetives-dɪˈrɛktɪvz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-指令-dircetives-dɪˈrɛktɪvz"}},[t._v("#")]),t._v(" 1. 指令（dircetives [dɪˈrɛktɪvz]）")]),t._v(" "),a("p",[t._v("​\t\t配置文件由指令及其参数组成，简单的单行指令以分号结尾，其它的指令充当了容器的功能，将相关指令组合在一起，用大括号{}包含起来，通常称之为块(block) 。下面是一些简单指令的例子:")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v("                nobady；\nerror_log           logs/error.log notice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("worker_processes")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-特定功能的配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-特定功能的配置文件"}},[t._v("#")]),t._v(" 2. 特定功能的配置文件")]),t._v(" "),a("p",[t._v("​\t\t为了使配置更易于维护，我们建议您将其拆分为存储在 /etc/nginx/conf.d目录中的特定功能的文件，并使用主nginx.conf文件中的include指令来引用其中的内容。特定功能的文件参考。")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" conf.d/http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" conf.d/stream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" conf.d/exchange-enhanced")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-上下文-contexts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-上下文-contexts"}},[t._v("#")]),t._v(" 3. 上下文（contexts）")]),t._v(" "),a("p",[t._v("一些顶级指令 （称为上下文）将适用于不同流量类型的指令组合在一起：")]),t._v(" "),a("ul",[a("li",[t._v("events- General connection processing")]),t._v(" "),a("li",[t._v("http - HTTP traffic")]),t._v(" "),a("li",[t._v("mail - Mail traffic")]),t._v(" "),a("li",[t._v("stream - TCP and UDP traffic")])]),t._v(" "),a("p",[t._v("在这些上下文之外放置称为在main上下文中。")]),t._v(" "),a("h3",{attrs:{id:"main-全局块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-全局块"}},[t._v("#")]),t._v(" main （全局块）")]),t._v(" "),a("p",[t._v("​\t\t配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。")]),t._v(" "),a("h3",{attrs:{id:"events块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events块"}},[t._v("#")]),t._v(" events块")]),t._v(" "),a("p",[t._v("​\t\t配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数,选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。")]),t._v(" "),a("h3",{attrs:{id:"http块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http块"}},[t._v("#")]),t._v(" http块")]),t._v(" "),a("p",[t._v("​\t\t可以嵌套多个server,配置代理,缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件,连接超时时间，单连接请求数等")]),t._v(" "),a("h3",{attrs:{id:"server块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server块"}},[t._v("#")]),t._v(" server块")]),t._v(" "),a("p",[t._v("配置虚拟主机的相关参数，一个http中可以有多个server")]),t._v(" "),a("p",[a("strong",[t._v("location块")])]),t._v(" "),a("p",[t._v("配置请求的路由，以及各种页面的处理情况")]),t._v(" "),a("h3",{attrs:{id:"mail块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mail块"}},[t._v("#")]),t._v(" mail块")]),t._v(" "),a("p",[t._v("配置处理mail流量")]),t._v(" "),a("h3",{attrs:{id:"stream块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream块"}},[t._v("#")]),t._v(" stream块")]),t._v(" "),a("p",[t._v("配置处理TCP和UDP流量")]),t._v(" "),a("h2",{attrs:{id:"_4-完整的配置文件结构如图所示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-完整的配置文件结构如图所示"}},[t._v("#")]),t._v(" 4. 完整的配置文件结构如图所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic-onemue-cn.oss-cn-beijing.aliyuncs.com/docs/onemue1647249861i8n6tp.png",alt:"2"}})]),t._v(" "),a("h2",{attrs:{id:"_5-虚拟服务-virtual-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-虚拟服务-virtual-servers"}},[t._v("#")]),t._v(" 5. 虚拟服务（virtual servers）")]),t._v(" "),a("p",[t._v("​\t\t在每一个流量处理的上下文中,可以包含一个或者多个server块, 定义虚拟服务来控制处理请求,包含在server上下文中的指令根据流量类型不同而不同。")]),t._v(" "),a("p",[t._v("​\t\t对于HTTP流量(http上下文)，每个server指令控制对特定域或者IP地址的资源请求处理。 在server上下文中的一个或多个location上下文定义如何处指定的URI集合。")]),t._v(" "),a("p",[t._v("​\t\t对于邮件和TCP/UDP流量(mail和stream上下文) , 每一个server指令都控制到达特定TCP端口或UNIX套接字的流量的处理。")]),t._v(" "),a("p",[a("strong",[t._v("具有多个上下文的配置文件样例")])]),t._v(" "),a("p",[t._v("以下配置说明了上下文的如何使用")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" nobody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a directive in the 'main' context（“main”上下文中的指令）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("events")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuration of connection processing（连接处理配置）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configuration specific to HTTP and affecting a11 virtual servers")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# （特定于HTTP的配置并影响a11虚拟服务器）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuration of HTTP virtual server 1 （HTTP虚拟服务器1的配置）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /one")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuration for processing URIS starting with ' /one '")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#（处理以'/one'开头的uri的配置）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("1ocation")]),t._v(" /two")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuration for processing URIS starting with' /two '")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#（处理以'/two'开头的uri的配置）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuration of HTTP virtual server 2（HTTP虚拟服务器2的配置）")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("stream")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configuration specific to TCP/UDP and affecting a11 virtual servers")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#（特定于TCP/UDP并影响a11虚拟服务器的配置）")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# configuration of TCP virtual server 1（TCP虚拟服务器1的配置）")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_6-继承-inheritance-ɪnˈherɪtəns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-继承-inheritance-ɪnˈherɪtəns"}},[t._v("#")]),t._v(" 6. 继承（inheritance [ɪnˈherɪtəns]）")]),t._v(" "),a("p",[t._v("​\t\t一般来说，子上下文(包含在另一个上下文(其父上下文)中)继承父级包含的指令设置。有些指令可以出现在多个上下文中，在这种情况下，您可以通过在子上下文中包含该指令来重写从父级继承的设置。")]),t._v(" "),a("h2",{attrs:{id:"_7-配置典型案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-配置典型案例"}},[t._v("#")]),t._v(" 7. 配置典型案例")]),t._v(" "),a("h3",{attrs:{id:"_1-web站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-web站点"}},[t._v("#")]),t._v(" 1.web站点")]),t._v(" "),a("p",[t._v("一个简单的php站点配置")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" example.org www.example.org")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("         /data/www")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("    index.html index.php")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n     "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~* \\. (gif|jpg|png)$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("expires")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30d")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n     \n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" ~ \\.php$")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fastcgi_pass")]),t._v(" local host:9000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fastcgi_param")]),t._v(" SCRIPT_FILENAME\n                        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_script_name")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v("         fastcgi_params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-负载平衡器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-负载平衡器"}},[t._v("#")]),t._v(" 2.负载平衡器")]),t._v(" "),a("p",[t._v("简单负载平衡配置样例")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" myapp1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" srv1.example.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" srv2.example.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" srv3.example.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_")]),t._v(" pass http://myapp1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-http安全站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-http安全站点"}},[t._v("#")]),t._v(" 3.HTTP安全站点")]),t._v(" "),a("p",[t._v("一个简单的HTTP/HTTPS站点  (certificate [sərˈtɪfɪkət , sərˈtɪfɪkeɪt] 证明;证明书;)")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_")]),t._v(" name          www.example.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v("      www.example.com.crt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" www.example.com.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"注-建站流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注-建站流程"}},[t._v("#")]),t._v(" 注：建站流程")]),t._v(" "),a("ol",[a("li",[t._v("注册域名")]),t._v(" "),a("li",[t._v("选择建站服务及主机")]),t._v(" "),a("li",[t._v("域名解析")]),t._v(" "),a("li",[t._v("网站备案")]),t._v(" "),a("li",[t._v("https证书配置")]),t._v(" "),a("li",[t._v("网站上线")])])])}),[],!1,null,null,null);s.default=e.exports}}]);