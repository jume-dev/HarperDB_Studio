'use strict';

const assert = require('assert');
const log_utils = require('../../utility/logUtils');

describe('Test verifyLogLocation', function() {
	it('Test with valid path, expect true', async function() {
		let test_path = './log/';
		try {
			let valid_path = await log_utils.verifyLogLocation(test_path);
			assert.equal(valid_path, true, "expect true result (valid path)");
		} catch(e) {
			throw e;
		}
	});
	it('Test with valid path and file name, expect true', async function() {
		let test_path = './log/test_name.log';
		try {
			let valid_path = await log_utils.verifyLogLocation(test_path);
			assert.equal(valid_path, true, "expect true result (valid path)");
		} catch(e) {
			throw e;
		}
	});
	it('Test with invalid path and file name, expect false', async function() {
		let test_path = './logblahblah/test_name.log';
		try {
			let valid_path = await log_utils.verifyLogLocation(test_path);
			assert.equal(valid_path, false, "expect false result (invalid path)");
		} catch(e) {
			throw e;
		}
	});
	it('Test with undefined path, expect false', async function() {
		let test_path = undefined;
		try {
			let valid_path = await log_utils.verifyLogLocation(test_path);
			assert.equal(valid_path, false, "expect false result (invalid path)");
		} catch(e) {
			throw e;
		}
	});
	it('Test with empty path, expect false', async function() {
		let test_path = '';
		try {
			let valid_path = await log_utils.verifyLogLocation(test_path);
			assert.equal(valid_path, false, "expect false result (invalid path)");
		} catch(e) {
			throw e;
		}
	});
});