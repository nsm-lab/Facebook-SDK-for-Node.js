'use strict';
var FBmodule = require('../..'),
	FacebookApiException = require('../../lib/FacebookApiException').default,
	{version} = require('../../package.json'),
	expect = require('chai').expect;

describe('exports.FacebookApiException', function() {
	it('should be a function', function() {
		expect(FBmodule.FacebookApiException)
			.to.exist
			.and.to.be.a('function');
	});

	it('should create a FacebookApiException instance that derives from Error', function() {
		var obj = {};
		expect(new FBmodule.FacebookApiException(obj))
			.to.be.an.instanceof(FacebookApiException)
			.and.to.be.an.instanceof(Error)
			.and.to.include({
				name: 'FacebookApiException',
				message: '{}',
				response: obj
			});
	});
});

describe('exports.version', function() {
	it("should be a string with this package's current version", function() {
		expect(FBmodule.version)
			.to.be.a('string')
			.and.to.equal(version);
	});
});
