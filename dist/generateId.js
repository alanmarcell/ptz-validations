'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateId = exports.generateIdWith = undefined;

var _ptzFp = require('ptz-fp');

var P = _interopRequireWildcard(_ptzFp);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Generate Id with custom function.
 */
var generateIdWith = exports.generateIdWith = _ramda2.default.curry(function (genId, propName, o) {
    if (!o) return _defineProperty({}, propName, genId());
    if (P.isNotNilOrEmpty(o[propName])) return o;
    var _id = o['_' + propName]; // tslint:disable-line:variable-name
    var id = P.isNotNilOrEmpty(_id) ? _id : genId();
    return _ramda2.default.assoc(propName, id, o);
});
/**
 * Generate Id if .id and ._id are null or undefined.
 */
var generateId = exports.generateId = generateIdWith(_shortid2.default.generate);
//# sourceMappingURL=generateId.js.map
//# sourceMappingURL=generateId.js.map