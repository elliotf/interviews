test:
	./node_modules/.bin/mocha --recursive -R list */test.js

testwatch:
	./node_modules/.bin/mocha -w --recursive -R list */test.js
