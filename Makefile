test:
	./node_modules/.bin/mocha --recursive -R list */test.js

testwatch:
	./node_modules/.bin/chicken -c 'clear; time make test' .
