FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# will fail if supabase args are not provided
ARG SUPABASE_URL
ARG SUPABASE_KEY
RUN test -n "$SUPABASE_URL" && test -n "$SUPABASE_KEY" \
    || (echo "ERROR: missing --build-arg SUPABASE_URL and/or SUPABASE_KEY" && exit 1)
RUN sed -e "s|supabaseUrl: ''|supabaseUrl: '${SUPABASE_URL}'|" \
    -e "s|supabaseKey: ''|supabaseKey: '${SUPABASE_KEY}'|" \
    src/environments/environment.example.ts > src/environments/environment.ts

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/tekkendb/browser /usr/share/nginx/html
EXPOSE 80