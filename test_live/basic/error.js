'use strict';
import {expect} from '../_supports/chai';
import FB, {FacebookApiException} from '../_supports/fb';
import sinon from 'sinon';

describe('error', function() {
	describe("FB.api('/404')", function() {
		it('should throw a FacebookApiException', async function() {
			const res = FB.api('/404');
			await expect(res).to.eventually.be.rejectedWith(FacebookApiException);
			await expect(res).to.eventually.be.rejected
				.and.have.a.property('response')
					.that.is.a('object')
					.with.property('error')
						.that.has.keys(['message', 'type', 'code', 'error_subcode', 'fbtrace_id']);
		});
	});

	describe("FB.api('/me', {fields: ['id', 'name']})", function() {
		beforeEach(function() {
			sinon.spy(console, 'warn');
		});

		afterEach(function() {
			console.warn.restore(); // eslint-disable-line no-console
		});

		it('should emit a warning when fields is an array', async function() {
			await FB.api('/me', {fields: ['id', 'name']});
			expect(console.warn).to.have.been.calledWith( // eslint-disable-line no-console
				`The fields param should be a comma separated list, not an array, try changing it to: ["id","name"].join(',')`
			);
		});
	});
});
