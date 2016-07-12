/* eslint-disable no-unused-expressions, no-underscore-dangle */

const expect = require('chai').expect
const Apartment = require('../../dst/models/Apartment');
const sinon = require('sinon');

describe('Apartment', () => {

  beforeEach(() => {
    sinon.stub(Apartment, 'find').yields(null, []);
  });

  afterEach(() => {
    Apartment.find.restore();
  });

  describe('constructor', () => {
    it('should create an apartment object', (done) => {
      const a = new Apartment({ name: 'a1' });
      a.validate(err => {
        expect(err).to.be.undefined;
        expect(a.name).to.equal('a1');
        done();
      });
    });
    it('should NOT create an apartment - duplicate apartment name', (done) => {
      Apartment.find.yields(null, [{ name: 'a1' }]);
      const a = new Apartment({ name: 'a1' });
      a.validate(err => {
        expect(err).to.be.ok;
        sinon.assert.calledWith(Apartment.find, { name: 'a1' });
        done();
      });
    });
  });
});
