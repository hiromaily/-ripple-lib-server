
.PHONY: add-submodule
add-submodule:
	git submodule add https://github.com/hiromaily/ripple-lib-proto.git proto

.PHONY: update-submodule
update-submodule:
	git submodule update --remote

.PHONY: setup
setup:
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
