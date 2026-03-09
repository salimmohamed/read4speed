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
1. Read CLAUDE.md to understand the project, stack, and conventions
2. Run the test suite BEFORE writing any code to confirm existing tests pass
3. Implement the feature/fix described in the task
4. Run EVERY command in the CLAUDE.md "## Verify" section — these are non-negotiable build checks that prove the project actually works, not just that the code looks correct to a reader
5. Run the full pre-commit check chain from CLAUDE.md: test, lint, typecheck, verify
6. Only commit if ALL checks pass
7. If verify or tests fail, fix the issue. If you can't fix after 3 attempts, stop and output the failure logs.

Do not ask for clarification. Work with the spec as given.
Do not create unnecessary files or add features beyond what's specified.
Follow the conventions in CLAUDE.md exactly.
