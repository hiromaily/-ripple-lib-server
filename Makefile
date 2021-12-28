# .PHONY: init
# init:
# 	yarn init -y
# 	yarn add -D typescript tslint
# 	# version
# 	yarn tsc --version
# 	# initialize a tsconfig.json
# 	yarn tsc --init --rootDir src --outDir dist

# 	yarn add -D @types/node nodemon ts-node ts-node-dev
# 	yarn add -D prettier tslint-plugin-prettier tslint-config-prettier tslint-eslint-rules

# 	yarn add grpc
# 	yarn add google-protobuf
# 	yarn add -D @types/google-protobuf grpc-tools grpc_tools_node_protoc_ts

# 	yarn add dotenv
# 	yarn add -D @types/dotenv
# 	yarn add ripple-lib

# .PHONY: add-submodule
# add-submodule:
# 	git submodule add https://github.com/hiromaily/ripple-lib-proto.git proto

.PHONY: setup
setup-mac:
	brew install protobuf
	brew tap ktr0731/evans
	brew install evans

# run after ripple-lib-server repository cloned
.PHONY: init-submodule
init-submodule:
	git submodule update --init

.PHONY: update-submodule
update-submodule:
	git submodule update --remote

.PHONY: gen-proto
gen-proto:
	./scripts/gen-proto.sh

.PHONY: update
update: update-submodule gen-proto

.PHONY: update-dependencies
update-dependencies:
	yarn yarn-upgrade-all

.PHONY: run
run:
	yarn run dev
