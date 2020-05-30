# ripple-lib-server
ripple-lib server

## ripple-lib
- [ripple-lib](https://github.com/ripple/ripple-lib)
- [Applications using ripple-lib (RippleAPI)](https://github.com/ripple/ripple-lib/blob/develop/APPLICATIONS.md)
- [Get Started with RippleAPI for JavaScript](https://xrpl.org/get-started-with-rippleapi-for-javascript.html)
- [RippleAPI Reference](https://xrpl.org/ja/rippleapi-reference.html)

## Setup
- [How to Set Up a TypeScript + Node.js App in 5 Minutes](https://levelup.gitconnected.com/how-to-set-up-a-typescript-node-js-app-in-5-minutes-93ffee3b1768)
- [How to Setup a TypeScript + Node.js Project](https://khalilstemmler.com/blogs/typescript/node-starter-project/)


```
yarn init -y
yarn add -D typescript
# version
yarn tsc --version
# initialize a tsconfig.json
yarn tsc --init --rootDir src --outDir dist

yarn add -D @types/node nodemon ts-node ts-node-dev

yarn add grpc
yarn add google-protobuf
yarn add -D @types/google-protobuf grpc-tools grpc_tools_node_protoc_ts

yarn add dotenv
yarn add -D @types/dotenv
yarn add ripple-lib

# build
yarn tsc

# run
node dist/index.js
# or
yarn ts-node src/index.ts
# or
yarn run dev

# detect source change
yarn run dev:watch
```

### gRPC for Node.js
- [grpc-node](https://github.com/grpc/grpc-node)
- [gRPC in 3 minutes (Node.js)](https://github.com/grpc/grpc/tree/master/examples/node)
- [Node.js Basics Tutorial](https://grpc.io/docs/languages/node/basics/)
- [Building a gRPC service with Node.js](https://codelabs.developers.google.com/codelabs/cloud-grpc/index.html#0)
