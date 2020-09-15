'use strict';

if ( process.env.CI === 'true' && process.env.TRAVIS_EVENT_TYPE === 'pull_request' ) {
	console.warn('Skipping live tests, encrypted environment variables are not available in pull requests'); // eslint-disable-line no-console
	process.exit(0);
}
