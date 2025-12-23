# Pull Request Guidelines

- **Title:** Use `<area>: <imperative summary>` (e.g., `docs: add contributor architecture notes`, `button: fix ripple timing`). Keep it concise and issue-focused.
- **Description:** Include:
  - What changed and why (one to three bullets).
  - Testing performed (`npm test`, manual steps, or `not run`).
  - Issue linkage (`Closes #<issue-number>`).
- **Commits:** Squash before merge; maintainers use squash-merge on GitHub so individual commits are not required to be perfect.
- **Scope:** Keep PRs narrowly scoped; split features/docs/refactors into separate PRs when possible.
- **Reviews:** Request review when tests pass and the description is complete; address comments with follow-up commits before squash.
