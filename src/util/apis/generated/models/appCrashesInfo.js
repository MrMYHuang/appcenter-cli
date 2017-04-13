/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AppCrashesInfo class.
 * @constructor
 * @member {boolean} hasCrashes
 * 
 */
function AppCrashesInfo() {
}

/**
 * Defines the metadata of AppCrashesInfo
 *
 * @returns {object} metadata of AppCrashesInfo
 *
 */
AppCrashesInfo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppCrashesInfo',
    type: {
      name: 'Composite',
      className: 'AppCrashesInfo',
      modelProperties: {
        hasCrashes: {
          required: true,
          serializedName: 'has_crashes',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = AppCrashesInfo;