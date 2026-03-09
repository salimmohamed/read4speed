---
tracker:
  kind: github
  owner: salimmohamed
  repo: read4speed
  label: dispatch
  active_states: [open]
  terminal_states: [closed]
polling:
  interval_ms: 30000
workspace:
  root: ~/agent-worktrees
hooks:
  after_create: |
    echo "Worktree created at $(pwd)"
  before_run: |
    git fetch origin main 2>/dev/null || true
agent:
  max_concurrent_agents: 2
  max_turns: 50
  max_reviewer_cycles: 5
  max_retry_backoff_ms: 300000
  retryable_reasons: [context_limit, timeout]
---

You are working on {{issue.title}} for the {{tracker.repo}} repository.

## Project Context
{{claude_md}}

## Task
{{issue.title}}

{{issue.description}}

## Instructions
1. Read the codebase to understand the existing architecture
2. Implement the feature/fix described in the task
3. Run the test suite and ensure all tests pass
4. Run the linter and ensure it passes
5. If tests and lint pass, commit your changes with a descriptive message
6. If tests fail, fix them. If you can't fix them after 3 attempts, stop and output the failure logs.

Do not ask for clarification. Work with the spec as given.
Do not create unnecessary files or add features beyond what's specified.
Follow the conventions in CLAUDE.md exactly.
