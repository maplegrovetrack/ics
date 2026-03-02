# Maple Grove Track & Field ICS Calendar File

This repository generates the [Maple Grove Track & Field Calendar](https://maplegrovetrack.github.io/ics/calendar.ics).

<br>

## ICS Calendar File

```bash
npm install
npm run build
```

<br>

## Production

### Automation

All merged pull requests to `main` branch will automatically be deployed to github pages.

### Manual

Build the application for production:

```bash
npm run build
npm run generate
```

Deploy the application to production:

```bash
npm run deploy
```
