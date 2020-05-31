.PHONY: init
init:
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





.PHONY: add-submodule
add-submodule:
	git submodule add https://github.com/hiromaily/ripple-lib-proto.git proto

.PHONY: update-submodule
update-submodule:
	git submodule update --remote

.PHONY: setup
setup-mac:
	brew install protobuf
	brew tap ktr0731/evans
	brew install evans

.PHONY: gen-proto
gen-proto:
	./scripts/gen-proto.sh


.PHONY: update
update: update-submodule gen-proto

# .PHONY: startjs
# startjs:
# 	node src/server.js
