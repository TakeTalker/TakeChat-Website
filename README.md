# TakeChat public pages

The public web pages of TakeChat, served by GitHub Pages at <https://www.takechat.app>:

| Page | Address | Used by |
|---|---|---|
| Home | `/` | Store listings, people who type the domain |
| Privacy policy (with the interim terms note) | `/privacy/` | Both apps, Settings > Help and feedback > Terms & Privacy Policy (TakeChat-Apps `shared/.../release/PublicPages.kt`); App Store and Play "privacy policy URL" |
| Support | `/support/` | App Store and Play "support URL"; the published contact of App Store guideline 1.2 |

The source of the privacy text is TakeChat-Contracts `docs/privacy/PRIVACY_NOTICES.md` §3. A change
there that changes what people are told changes `site/privacy/index.html` in the same week, and the
app texts that point here stay as they are.

## Languages

Every page holds the same text in English, German and French, each in a
`<section lang="en|de|fr">`. `site/lang.js` shows the reader's browser language, or the one in the
address (`#en`, `#de`, `#fr`); without JavaScript all three show one after the other. German uses
"du" and never the sharp s ("ss"); French uses "vous" (owner rules of 2026-11-20 and 2026-11-21).
A change to one language changes the other two in the same pull request.

## Checks

```sh
python3 scripts/check            # three languages, no sharp s, no broken relative links
python3 scripts/check --publish  # the same, and no TO-FILL marker left
```

A fact that is not known yet (such as the controller's address) is written as `TO-FILL: ...`, so
the publish check refuses the page until it is filled in.

## Publishing

`.github/workflows/pages.yml` runs the checks on every pull request. A push to `main` runs
`--publish` and deploys `site/` to Pages. Nothing else is needed: no build step, no server.

One-time setup (done by the owner): this repository is public; Settings > Pages > Source is
"GitHub Actions"; the custom domain `www.takechat.app` (`site/CNAME`) has a DNS CNAME record
`www` -> `taketalker.github.io` at the registrar, and "Enforce HTTPS" is on.

Rollback: revert the commit on `main`; the workflow publishes the previous pages within minutes.
