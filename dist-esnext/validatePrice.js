import * as P from 'ptz-fp';
import R from 'ramda';
import allErrors from './allErrors';
import { addError as addErrorBase } from './error';
import { isValidNumber } from './validateNumber';
/**
 * Validate Price
 */
export const validatePrice = R.curry((opts, propName, obj) => {
    const propValue = R.prop(propName, obj);
    const addError = addErrorBase(obj, propName);
    if (P.isNilOrEmpty(propValue))
        return opts.required
            ? addError(opts.requiredError || allErrors.REQUIRED)
            : obj;
    if (!opts.canBeZero && parseInt(propValue, 10) === 0)
        return addError(opts.cannotBeZeroError || allErrors.CANNOT_BE_ZERO);
    if (!opts.canBeNegative && parseInt(propValue, 10) < 0)
        return addError(opts.cannotBeNegativeError || allErrors.CANNOT_BE_NEGATIVE);
    return isValidNumber(propValue)
        ? obj
        : addError(opts.invalidNumberError || allErrors.INVALID_NUMBER_ERROR);
});
//# sourceMappingURL=validatePrice.js.map