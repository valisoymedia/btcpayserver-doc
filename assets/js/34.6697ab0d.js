(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{415:function(e,t,r){e.exports=r.p+"assets/img/lunanode-fork.0a8ba55f.png"},416:function(e,t,r){e.exports=r.p+"assets/img/regtest-paid-invoice.d35b2e14.png"},620:function(e,t,r){"use strict";r.r(t);var a=r(26),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"testing-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing-btcpay-server"}},[e._v("#")]),e._v(" Testing BTCPay Server")]),e._v(" "),a("p",[e._v("Table of contents:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#testing-btcpay-server"}},[e._v("Testing BTCPay Server")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#setup-regtest-network-local-btcpay-server"}},[e._v("Setup Regtest Network and Local BTCPay Server")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#using-docker-images-for-mainnet-testing"}},[e._v("Using Docker Images for Mainnet Testing")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#create-invoice"}},[e._v("Create Invoice")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#pay-invoice"}},[e._v("Pay Invoice")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#testers-faq"}},[e._v("Testers FAQ")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#start-debugging-gives-error-no-connection-could-be-made-because-the-target-machine-actively-refused-it-12700139372"}},[e._v("Start Debugging gives Error: No connection could be made because the target machine actively refused it. 127.0.0.1:39372")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#regtest-payments-are-not-showing-as-confirmed"}},[e._v("Regtest payments are not showing as confirmed")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#which-branch-should-be-tested-for-major-releases"}},[e._v("Which branch should be tested for major releases?")])])])])])])]),e._v(" "),a("p",[e._v("Testing the software is a great way to contribute to the project. There are many different ways that someone can "),a("em",[e._v("test")]),e._v(" the software. Users who manually test (QA) the software and features to provide user experience, feedback or bugs to the project developers and designers is always appreciated.")]),e._v(" "),a("p",[e._v("Since the software is open source, anyone can test and audit the code. Some merchants or other technical users may want verify new or existing features by testing the software themselves. Developers working on the code can also benefit from understanding how to manually test certain actions in BTCPay.")]),e._v(" "),a("p",[e._v("This guide will show you how to manually test some common BTCPay features and assumes you already have your "),a("RouterLink",{attrs:{to:"/Contribute/ContributeDev/ContributeDevCode/"}},[e._v("Local Development Environment")]),e._v(" set up. Once you understand the basic testing actions, most other features can be manually tested in a similar way.")],1),e._v(" "),a("h2",{attrs:{id:"setup-regtest-network-and-local-btcpay-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-regtest-network-and-local-btcpay-server"}},[e._v("#")]),e._v(" Setup Regtest Network and Local BTCPay Server")]),e._v(" "),a("p",[e._v("First, be sure you have completed the following:")]),e._v(" "),a("ul",[a("li",[e._v("Option 1: Test the latest code - "),a("RouterLink",{attrs:{to:"/Contribute/ContributeDev/ContributeDevCode/#sync-forked-btcpayserver-repository"}},[e._v("Pull master")])],1),e._v(" "),a("li",[e._v("Option 2: Test a new feature - "),a("RouterLink",{attrs:{to:"/Contribute/ContributeDev/ContributeDevCode/#create-a-branch-of-a-pull-request"}},[e._v("Pull request")])],1),e._v(" "),a("li",[e._v("Created a local "),a("RouterLink",{attrs:{to:"/Contribute/ContributeDev/ContributeDevCode/#bitcoin-regtest-network-setup"}},[e._v("Regtest Network")])],1),e._v(" "),a("li",[e._v("Built your solution and started "),a("RouterLink",{attrs:{to:"/Contribute/ContributeDev/ContributeDevCode/#build-local-btcpayserver"}},[e._v("Debug mode")])],1)]),e._v(" "),a("h2",{attrs:{id:"using-docker-images-for-mainnet-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-images-for-mainnet-testing"}},[e._v("#")]),e._v(" Using Docker Images for Mainnet Testing")]),e._v(" "),a("p",[e._v("Some features are not suitable for testing using a localhost development environment. Integration type features often require mainnet or testnet payments in order to be sufficiently tested. This will show you how to deploy a custom docker image containing an unreleased feature for testing on a live server.")]),e._v(" "),a("p",[e._v("Step 1:")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/Contribute/ContributeDev/ContributeDevCode/#git-setup"}},[e._v("Fork, clone and create a branch")]),e._v(" of the "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server repository"),a("OutboundLink")],1),e._v(" and name your branch: "),a("code",[e._v("btcpay-branch")]),e._v(".")],1),e._v(" "),a("p",[e._v("For simplicity, let's say the feature you want to test has already been merged into master, which is not yet released. This way our branch can be based off master. To test a specific unreleased feature, merge it into your branch instead.")]),e._v(" "),a("p",[e._v("Step 2:")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/Contribute/ContributeDev/ContributeDevCode/#git-setup"}},[e._v("Fork, clone and create a branch")]),e._v(" of the "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPay Server Docker repository"),a("OutboundLink")],1),e._v(" and name your branch: "),a("code",[e._v("docker-branch")]),e._v(".")],1),e._v(" "),a("p",[e._v("Step 3:")]),e._v(" "),a("p",[e._v("Create a Docker Hub account, Docker repository, download Docker Desktop and Login to your account by following "),a("a",{attrs:{href:"https://docs.docker.com/docker-hub/",target:"_blank",rel:"noopener noreferrer"}},[e._v("these steps"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Step 4:")]),e._v(" "),a("p",[e._v("Since BTCPay Server requires a blockchain sync, it's easiest to use an already deployed & synced server. This server should be deployed referencing your own "),a("code",[e._v("docker-branch")]),e._v(" created in step 2. See this example using the "),a("a",{attrs:{href:"https://launchbtcpay.lunanode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LunaNode launcher"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(415),alt:"LunaNode Fork"}})]),e._v(" "),a("p",[e._v("Note: If you are testing the altcoin build, deploy your server to use the altcoin "),a("code",[e._v("BTCPAY_BUILD_CONFIGURATION")]),e._v(".")]),e._v(" "),a("p",[e._v("Step 5:")]),e._v(" "),a("p",[e._v("Inside the root directory of your "),a("code",[e._v("btcpay-branch")]),e._v(" there are Dockerfiles prefixed by the following amd64, arm32v7, arm64v8. We need to build and push a custom image using the Dockerfile for the OS being used. Replace "),a("code",[e._v("<yourRepo>")]),e._v(" and tag "),a("code",[e._v("1.0.0.1")]),e._v(" in the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#build image\ndocker build -t <yourRepo>/btcpayserver --file ./amd64.Dockerfile .\n\n#push image\ndocker push <yourRepo>/btcpayserver:1.0.0.1\n")])])]),a("p",[e._v("Step 6:")]),e._v(" "),a("p",[e._v("Check that your image appears in your Docker Hub repository and the version tag matches the one you have supplied in the push command above.")]),e._v(" "),a("p",[e._v("Step 7:")]),e._v(" "),a("p",[e._v("Locate the "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/tree/master/docker-compose-generator/docker-fragments",target:"_blank",rel:"noopener noreferrer"}},[e._v("btcpayserver.yml docker-fragment"),a("OutboundLink")],1),e._v(" in your local "),a("code",[e._v("docker-branch")]),e._v(". Update the btcpayserver image's referenced repository (example: satoshi) and tag version (example: 1.0.0.1) with the one you have supplied in your push command above.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("BTCPAY_IMAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("satoshi/btcpayserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("1.0.0.1$<BTCPAY_BUILD_CONFIGURATION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Step 8:")]),e._v(" "),a("p",[e._v("Push your local "),a("code",[e._v("docker-branch")]),e._v(" changes to your BTCPayServer Docker repository.")]),e._v(" "),a("p",[e._v("Step 9:")]),e._v(" "),a("p",[e._v("SSH into your vps and update your server.")]),e._v(" "),a("p",[e._v("Now you can test your feature as if it was already released!")]),e._v(" "),a("h2",{attrs:{id:"create-invoice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-invoice"}},[e._v("#")]),e._v(" Create Invoice")]),e._v(" "),a("p",[e._v("Creating an invoice and sending payment is an important feature in BTCPay and in order to manually test this, you must first:")]),e._v(" "),a("ul",[a("li",[e._v("Create a Store")]),e._v(" "),a("li",[e._v("Setup a Wallet")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Use the hot wallet for fastest wallet setup during testing. Import from ... > a new/existing seed > check Is hot wallet > Generate")])]),e._v(" "),a("ul",[a("li",[e._v("Create an invoice for your store")])]),e._v(" "),a("h2",{attrs:{id:"pay-invoice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pay-invoice"}},[e._v("#")]),e._v(" Pay Invoice")]),e._v(" "),a("p",[e._v("Open a new Powershell terminal and navigate to your "),a("code",[e._v("BTCPayServer.Tests")]),e._v(" directory where our Docker-Compose commands are run for the project. Copy the amount and address for payment from your invoice. Add them into the following command:")]),e._v(" "),a("p",[a("code",[e._v('.\\docker-bitcoin-cli.ps1 sendtoaddress "bcrt1qym96l8gztggldraywdumgmfw27u8p8h5w7h9kc" 0.00097449')]),e._v(" then press "),a("code",[e._v("Enter")]),e._v(".")]),e._v(" "),a("p",[e._v("Notice that your invoice has now been paid in your local BTCPay Server.")]),e._v(" "),a("figure",[a("img",{attrs:{src:r(416),alt:"Test Paid Invoice"}})]),e._v(" "),a("p",[e._v("To pay other types of payments see "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/blob/master/BTCPayServer.Tests/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"testers-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testers-faq"}},[e._v("#")]),e._v(" Testers FAQ")]),e._v(" "),a("h3",{attrs:{id:"start-debugging-gives-error-no-connection-could-be-made-because-the-target-machine-actively-refused-it-12700139372"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-debugging-gives-error-no-connection-could-be-made-because-the-target-machine-actively-refused-it-12700139372"}},[e._v("#")]),e._v(" Start Debugging gives Error: No connection could be made because the target machine actively refused it. 127.0.0.1:39372")]),e._v(" "),a("p",[e._v("If you see this error, it means you did not set up your Regtest Network using the "),a("code",[e._v("docker-compose up dev")]),e._v(" command in the "),a("code",[e._v("BTCPayServer.Tests")]),e._v(" directory. This command will set up all the dependencies you need for services used by BTCPay in the local development environment. You must run it before you try to start debugging.")]),e._v(" "),a("h3",{attrs:{id:"regtest-payments-are-not-showing-as-confirmed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regtest-payments-are-not-showing-as-confirmed"}},[e._v("#")]),e._v(" Regtest payments are not showing as confirmed?")]),e._v(" "),a("p",[e._v("If you make a "),a("a",{attrs:{href:"#pay-invoice"}},[e._v("test payment")]),e._v(" and it's stuck as unconfirmed, you should mine some blocks to add confirmations to your transaction.")]),e._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\\docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("bitcoin"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("generate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1 3\n")])])]),a("p",[e._v("If you are missing things like test payment notifications or other expected events, this may be the reason.")]),e._v(" "),a("h3",{attrs:{id:"which-branch-should-be-tested-for-major-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#which-branch-should-be-tested-for-major-releases"}},[e._v("#")]),e._v(" Which branch should be tested for major releases?")]),e._v(" "),a("p",[e._v("Testing master branch is acceptable because it will include the release changes. However, other commits which are not yet released may also be in master. It is always good to find issues before the release so master (or a specific PR) is the ideal branch to test.")]),e._v(" "),a("p",[e._v("You can check the "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest release"),a("OutboundLink")],1),e._v(" to see the changes which are available for current deployments as well as the unreleased commits.")])])}),[],!1,null,null,null);t.default=o.exports}}]);