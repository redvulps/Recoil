/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 *
 * @flow strict
 * @format
 * @oncall recoil
 */

// React 19 removed unstable_batchedUpdates — all updates are batched by default.
// Fall back to a direct invocation when the API is absent.
const ReactDOM = require('ReactDOMLegacy_DEPRECATED');
const unstable_batchedUpdates =
  ReactDOM.unstable_batchedUpdates || (callback => callback());

module.exports = {unstable_batchedUpdates};
