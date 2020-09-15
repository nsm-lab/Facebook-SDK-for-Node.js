'use strict';
import chai, {expect} from 'chai';
import cap from 'chai-as-promised';
import sinon from 'sinon-chai';

chai.use(cap);
chai.use(sinon);

export default chai;
export {expect};
