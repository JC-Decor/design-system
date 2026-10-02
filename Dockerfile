# Docs do Design System JC Decor — build estático servido pelo Caddy (Railway)
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY packages/ui/package.json packages/ui/
COPY apps/docs/package.json apps/docs/
RUN npm ci --no-audit --no-fund
COPY tsconfig.base.json ./
COPY packages/ui packages/ui
COPY apps/docs apps/docs
RUN npm run build -w docs

FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/apps/docs/dist /srv
ENV PORT=8080
EXPOSE 8080
