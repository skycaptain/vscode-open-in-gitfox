// Skycaptain: VSCode "Open in Gitfox" Extension
//
// See https://commitlint.js.org/ for usage.
//
// SPDX-License-Identifier: BSD-3-Clause
//

/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    // Skip CI commits
    (message) => message.toLowerCase().includes("[skip ci]"),
    (message) => message.toLowerCase().includes("[ci skip]"),
  ],
};
