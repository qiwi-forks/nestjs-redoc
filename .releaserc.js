module.export = {
  "branch": "master",
  "verifyConditions": [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git"
  ],
  "prepare": [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git"
  ],
  "publish": [
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
}
