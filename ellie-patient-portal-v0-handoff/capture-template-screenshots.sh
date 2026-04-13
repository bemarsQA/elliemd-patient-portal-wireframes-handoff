#!/usr/bin/env bash
# Captures the v0 template site for attachment to v0. Requires network.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p screenshots/template

echo "Installing Playwright Chromium (one-time, ~120MB)..."
npx --yes playwright@1.49.1 install chromium

OUT="screenshots/template"
URL="https://v0-checkout-subscription-cadence-an.vercel.app/"

echo "Full-page desktop capture..."
npx playwright@1.49.1 screenshot --full-page "$URL" "$OUT/01-home-desktop-full.png"

echo "Mobile viewport full-page..."
npx playwright@1.49.1 screenshot --viewport-size=390,844 --full-page "$URL" "$OUT/02-home-mobile-full.png"

echo "Done. Attach PNGs from: $OUT/"
