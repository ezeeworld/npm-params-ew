'use strict';

var assert = require('assert');
var params = require('../params').new();

describe('module params', function() {
    describe('asObjectId', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asObjectId, 'function');
        });
    });
    describe('asIntegerList', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asIntegerList, 'function');
        });
    });
    describe('asBoolean', function() {
        it('should convert tolerated values to a boolean or return the default value', function() {
            assert.equal(params.asBoolean(true, 'default_value'), true);
            assert.equal(params.asBoolean('true', 'default_value'), true);
            assert.equal(params.asBoolean(1, 'default_value'), true);
            assert.equal(params.asBoolean('1', 'default_value'), true);
            assert.equal(params.asBoolean(false, 'default_value'), false);
            assert.equal(params.asBoolean('false', 'default_value'), false);
            assert.equal(params.asBoolean(0, 'default_value'), false);
            assert.equal(params.asBoolean('0', 'default_value'), false);
            assert.equal(params.asBoolean('', 'default_value'), false);
            assert.equal(params.asBoolean('non-empty string', 'default_value'), 'default_value');
            assert.equal(params.asBoolean(undefined, 'default_value'), 'default_value');
            assert.equal(params.asBoolean(null, 'default_value'), 'default_value');
            assert.equal(params.asBoolean(2, 'default_value'), 'default_value');
        });
        it('has a default_value that defaults to false', function() {
            assert.equal(params.asBoolean(2), false);
            assert.equal(params.asBoolean(2, undefined), false);
        });
    });
    describe('asNumber', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asNumber, 'function');
        });
    });
    describe('asStringNumber', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asStringNumber, 'function');
        });
    });
    describe('asTimestamp', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asTimestamp, 'function');
        });
    });
    describe('asDate', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asDate, 'function');
        });
    });
    describe('asB4sId', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asB4sId, 'function');
        });
    });
    describe('asInteger', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asInteger, 'function');
        });
    });
    describe('asString', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asString, 'function');
        });
    });
    describe('asObject', function() {
        it('should be a function', function() {
            assert.equal(typeof params.asObject, 'function');
        });
    });
    describe('withoutWhitespace', function() {
        it('should be a function', function() {
            assert.equal(typeof params.withoutWhitespace, 'function');
        });
    });
    describe('strip', function() {
        it('should be a function', function() {
            assert.equal(typeof params.strip, 'function');
        });
    });
    describe('empty', function() {
        it('should be a function', function() {
            assert.equal(typeof params.empty, 'function');
        });
    });
    describe('ensureType', function() {
        it('should be a function', function() {
            assert.equal(typeof params.ensureType, 'function');
        });
    });
});