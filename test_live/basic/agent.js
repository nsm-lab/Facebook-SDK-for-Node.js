'use strict';
import {expect} from '../_supports/chai';
import FB from '../_supports/fb';
import https from 'https';

describe('FB.options({agent})', function() {
	it('should override the https.Agent used with a custom one', async function() {
		const agent = new https.Agent({
			keepAlive: true,
			maxSockets: 0,
		});
		FB.options({agent});

		expect(Object.keys(agent.sockets)).to.be.empty;
		const res = FB.api('/me');
		expect(Object.keys(agent.sockets)).to.not.be.empty;
		await res;

		FB.options({agent: undefined});
	});
});
