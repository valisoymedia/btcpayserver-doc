(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{665:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"minimal-manual-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimal-manual-setup"}},[t._v("#")]),t._v(" Minimal manual setup")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("h4",{attrs:{id:"not-recommended-for-production-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#not-recommended-for-production-use"}},[t._v("#")]),t._v(" Not recommended for production use")]),t._v(" "),e("p",[t._v("Manual installation is NOT recommended for production use unless you are very confident with your Operating System and Bitcoin security expertise. If you are unsure use the docker deployment or one of the other "),e("RouterLink",{attrs:{to:"/Deployment/"}},[t._v("deployment options")]),t._v(".")],1),t._v(" "),e("h4",{attrs:{id:"you-must-have-technical-literacy-and-be-able-to-resolve-any-issues-on-your-own-the-community-will-not-provide-extensive-support-for-this-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#you-must-have-technical-literacy-and-be-able-to-resolve-any-issues-on-your-own-the-community-will-not-provide-extensive-support-for-this-deployment"}},[t._v("#")]),t._v(" You must have technical literacy and be able to resolve any issues on your own. The community will not provide extensive support for this deployment.")])]),t._v(" "),e("p",[t._v("The process is basically the following:")]),t._v(" "),e("ol",[e("li",[t._v("Download and sync "),e("a",{attrs:{href:"https://bitcoincore.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Core"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Clone and run "),e("a",{attrs:{href:"https://github.com/dgarage/NBxplorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("NBXplorer"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Clone and run "),e("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("BTCPay Server"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Take a look at our video to learn more:")]),t._v(" "),e("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/Xo_vApXTZBU/hqdefault.jpg)"},attrs:{href:"http://www.youtube.com/watch?v=Xo_vApXTZBU","data-id":"Xo_vApXTZBU"}},[e("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/Xo_vApXTZBU?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),e("h2",{attrs:{id:"warning-not-recommended-to-use-in-production"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#warning-not-recommended-to-use-in-production"}},[t._v("#")]),t._v(" Warning: Not recommended to use in production")]),t._v(" "),e("p",[e("strong",[t._v("Manual installation")]),t._v(" is NOT recommended in production. It should be only used for learning purpose.")]),t._v(" "),e("p",[t._v("Instead you should use the "),e("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker deployment"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("The docker deployment will provide you easy update system and make sure that all moving parts are wired correctly without any technical knowledge. It will also setup HTTPS for you.")]),t._v(" "),e("h2",{attrs:{id:"typical-manual-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typical-manual-installation"}},[t._v("#")]),t._v(" Typical manual installation")]),t._v(" "),e("p",[t._v("This steps have been done on Ubuntu 18.04, adapt for your own install.")]),t._v(" "),e("h3",{attrs:{id:"1-install-bitcoin-core-0191"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1-install-bitcoin-core-0191"}},[t._v("#")]),t._v(" 1) Install Bitcoin Core 0.19.1")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BITCOIN_VERSION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.19.1"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BITCOIN_URL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://bitcoin.org/bin/bitcoin-core-0.19.1/bitcoin-0.19.1-x86_64-linux-gnu.tar.gz"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BITCOIN_SHA256")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5fcac9416e486d4960e1a946145566350ca670f9aaba99de6542080851122e4c"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install bitcoin binaries")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /tmp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O bitcoin.tar.gz "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_URL")]),t._v('"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_SHA256")]),t._v(' bitcoin.tar.gz"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sha256sum -c - "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" bin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf bitcoin.tar.gz -C /usr/local/bin --strip-components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bitcoin-'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_VERSION")]),t._v('/bin/bitcoin-cli"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bitcoin-'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_VERSION")]),t._v('/bin/bitcoind"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" bitcoin.tar.gz\n")])])]),e("h3",{attrs:{id:"2-install-net-core-sdk-31"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#2-install-net-core-sdk-31"}},[t._v("#")]),t._v(" 2) Install .NET Core SDK 3.1")]),t._v(" "),e("p",[t._v("On my ubuntu 18.04 (See "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-ubuntu-1804",target:"_blank",rel:"noopener noreferrer"}},[t._v("these instructions"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://dotnet.microsoft.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(" for different OS).")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i packages-microsoft-prod.deb\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apt-transport-https\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y dotnet-sdk-3.1\n")])])]),e("h3",{attrs:{id:"3-install-nbxplorer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#3-install-nbxplorer"}},[t._v("#")]),t._v(" 3) Install NBXplorer")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/dgarage/NBXplorer\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" NBXplorer\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout latest\n./build.sh\n")])])]),e("h3",{attrs:{id:"4-install-btcpayserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#4-install-btcpayserver"}},[t._v("#")]),t._v(" 4) Install BTCPayServer")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/btcpayserver/btcpayserver\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout latest\n./build.sh\n")])])]),e("h3",{attrs:{id:"5-run-bitcoind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#5-run-bitcoind"}},[t._v("#")]),t._v(" 5) Run bitcoind")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("bitcoind\n")])])]),e("h3",{attrs:{id:"6-run-nbxplorer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#6-run-nbxplorer"}},[t._v("#")]),t._v(" 6) Run NBXplorer")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/NBXplorer\n./run.sh\n")])])]),e("h3",{attrs:{id:"7-run-btcpayserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#7-run-btcpayserver"}},[t._v("#")]),t._v(" 7) Run BTCPayServer")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/btcpayserver\n./run.sh --port "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" --bind "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n")])])]),e("p",[t._v("Now you can browse your server on port 8080.")]),t._v(" "),e("h2",{attrs:{id:"additional-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-links"}},[t._v("#")]),t._v(" Additional links")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ManualDeploymentExtended/"}},[t._v("Extended Manual Deployment")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://freedomnode.com/blog/114/how-to-setup-btc-and-lightning-payment-gateway-with-btcpayserver-on-linux-manual-install",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Setup BTC and Lightning Payment Gateway with BTCPayServer on Linux [Manual Install]"),e("OutboundLink")],1),t._v(" from freedomnode.com.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);