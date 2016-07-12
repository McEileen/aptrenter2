/* eslint-disable no-unused-expressions, no-underscore-dangle */

const expect = require('chai').expect
const Renter = require('../../dst/models/Renter');
const sinon = require('sinon');

describe('Renter', () => {
  describe('constructor', () => {
    it('should create a renter object', (done) => {
      const r = new Renter({ name: 'Charlie',
                              money: 1800,
                              complaints: 0 });
      r.validate(err => {
        console.log('r:',r);
        expect(err).to.be.undefined;
        expect(r.name).to.equal('Charlie');
        expect(r.money).to.equal(1800);
        expect(r.complaints).to.equal(0);
        expect(r._id).to.be.ok;
        console.log('r.dateCreated', r.dateCreated);
        expect(r.dateCreated).to.be.ok;
        done();
      });
    });
    it('should NOT create a renter object - name is too short', (done) => {
      const r = new Renter({ name: 'C',
                              money: 1800,
                              complaints: 0 });
      r.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create a renter object - no name', (done) => {
      const r = new Renter({  money: 1800,
                              complaints: 0 });
      r.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create a renter object - money less than 1000', (done) => {
      const r = new Renter({ name: 'Carla',
                              money: 25,
                              complaints: 0 });
      r.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create a renter object - too many apt complaints', (done) => {
      const r = new Renter({ name: 'Sue',
                              money: 2000,
                              complaints: 5 });
      r.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
    it('should NOT create a renter object - negative complaints', (done) => {
      const r = new Renter({ name: 'Sue',
                              money: 2000,
                              complaints: -2 });
      r.validate(err => {
        expect(err).to.be.ok;
        done();
      });
    });
  });
});
