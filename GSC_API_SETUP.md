# Google Search Console API Setup

Use this flow to authorize Aniimo.games with read-only Google Search Console API access.

## 1. Create OAuth Credentials

1. Open Google Cloud Console.
2. Create or select a project.
3. Enable **Google Search Console API**.
4. Configure the OAuth consent screen for your Google account.
5. Create an OAuth client:
   - Application type: **Desktop app**
   - Name: `Aniimo GSC local reporting`

## 2. Add Local Credentials

Run once:

```bash
npm run gsc:auth
```

The first run creates `.gsc/oauth-client.json`. Edit that local file with:

```json
{
  "client_id": "YOUR_DESKTOP_CLIENT_ID",
  "client_secret": "YOUR_DESKTOP_CLIENT_SECRET"
}
```

`.gsc/` is ignored by git and must not be committed.

## 3. Authorize

Run again:

```bash
npm run gsc:auth
```

Open the printed Google verification URL, enter the code, and approve read-only Search Console access.

Scope used:

```text
https://www.googleapis.com/auth/webmasters.readonly
```

## 4. Generate API Report

```bash
npm run gsc:api
```

Default property:

```text
sc-domain:aniimo.games
```

Override it when needed:

```bash
GSC_PROPERTY=https://aniimo.games/ npm run gsc:api
```

The report is written to `gsc-api-analysis.md`.
