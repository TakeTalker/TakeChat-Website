# TakeChat public pages — agent instructions

This repository holds the public web pages at legal.takechat.app (README.md). The rulebook and
decisions live in TakeChat-Contracts (`docs/handover/v1.5/`, `docs/adr/`).

- The pages are public: never commit secrets, personal data, child data or internal hostnames.
- Three languages (ADR-008): every text change updates English, German and French in the same pull
  request; German "du" and no ß, French "vous".
- The privacy text follows TakeChat-Contracts `docs/privacy/PRIVACY_NOTICES.md`; a change here that
  is not in that document first is rejected. Legal wording needs owner approval.
- Impersonal writing: pull requests, commits and pages never name the owner personally.
- Run `python3 scripts/check` before every pull request and record the result in it.
- One topic per commit, Conventional Commit subject, body says why and how it was verified.
