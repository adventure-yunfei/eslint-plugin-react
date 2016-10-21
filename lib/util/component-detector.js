/**
 * @fileoverview Utility functions for React component-detector configuration
 *
 * Used as regexp to additionally match ES6 super class name of react component, thus enhance Component detecting.
 * Note it's an enhancement upon existing behavior.
 *
 * (e.g. set "component-detector" as "MyCustomReactBaseComponent", so any class inheriting from this component will be treated as React Comppnent.)
 * @author adventure-yunfei
 */
'use strict';

module.exports = {
  getFromContext: function getFromContext(context) {
    var detectorSetting = context.settings.react && context.settings.react['component-detector'];
    if (!detectorSetting) {
      return null;
    } else {
      detectorSetting = '^' + detectorSetting + '$';
      return new RegExp(detectorSetting);
    }
  }
};
