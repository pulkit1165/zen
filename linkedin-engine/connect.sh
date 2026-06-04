#!/bin/zsh
# connect.sh — one-time LinkedIn connect. Reads creds from auth/.env (gitignored),
# never from the command line, so your secret stays off-screen.
cd "$(dirname "$0")"
if [ ! -f auth/.env ]; then
  echo "Create auth/.env first with:"
  echo "  LINKEDIN_CLIENT_ID=xxxx"
  echo "  LINKEDIN_CLIENT_SECRET=yyyy"
  exit 1
fi
set -a; source auth/.env; set +a
if [ -z "$LINKEDIN_CLIENT_ID" ] || [ -z "$LINKEDIN_CLIENT_SECRET" ]; then
  echo "auth/.env is missing LINKEDIN_CLIENT_ID or LINKEDIN_CLIENT_SECRET"; exit 1
fi
echo "Using client id: ${LINKEDIN_CLIENT_ID:0:6}…  (secret hidden)"
node auth/oauth.mjs
