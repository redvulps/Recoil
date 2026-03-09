/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall recoil
 */

if (typeof global.Promise !== 'function') {
  // Native Promise integrates correctly with modern fake timers and React act().
  global.Promise = require('promise-polyfill');
}

// React 18+ requires IS_REACT_ACT_ENVIRONMENT = true for act() to work
// correctly in test environments. Without this, async state updates inside
// act() may not be flushed, causing flaky test failures.
global.IS_REACT_ACT_ENVIRONMENT = true;
