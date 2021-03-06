'use strict';

var _ptzAssert = require('ptz-assert');

var assert = _interopRequireWildcard(_ptzAssert);

var _index = require('./index');

var V = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('toLowerCase', function () {
    it('should lowercase a string', function () {
        var propName = 'userName';
        var objToValidate = _defineProperty({}, propName, 'ANGELOOCANA');
        var validatedObj = V.toLowerCase(propName, objToValidate);
        assert.equal(validatedObj[propName], 'angeloocana');
    });
    it('should return NULL if propName is NULL', function () {
        var propName = 'userName';
        var objToValidate = _defineProperty({}, propName, null);
        var validatedObj = V.toLowerCase(propName, objToValidate);
        assert.equal(validatedObj[propName], null);
        assert.notOk(validatedObj.errors);
    });
});
//# sourceMappingURL=toLowerCase.test.js.map
//# sourceMappingURL=toLowerCase.test.js.map