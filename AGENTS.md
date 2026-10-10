## Project overview

Bill Bee is a service that lets users create and track their quotes, invoices, expenses, and related business records. It uses Next.js for both the frontend and backend.

## Agent boundaries

- Do not add, remove, or modify application code unless the user's prompt explicitly requests that exact code change.
- Requests to inspect, explain, review, diagnose, or report on the project are read-only and do not authorize code changes.
- Never create, switch, rename, delete, or otherwise change Git branches.
- Never run `git add`, `git stash`, or `git commit`, even when code changes are explicitly requested.

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.
