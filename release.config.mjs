// Skycaptain: VSCode "Open in Gitfox" Extension
//
// See https://semantic-release.gitbook.io for usage.
//
// SPDX-License-Identifier: BSD-3-Clause
//

// RELEASE BUSTER: 1

/** @type {import('semantic-release').GlobalConfig} */
export default {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
  preset: "conventionalcommits",
};
