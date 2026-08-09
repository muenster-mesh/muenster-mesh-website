FROM ruby:3.3-slim

# Build tools needed to compile native gems (e.g. jekyll dependencies)
RUN apt-get update \
  && apt-get install -y --no-install-recommends build-essential \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /site

# Install gems first so this layer is cached unless the Gemfile changes.
# Gemfile.lock is optional (gitignored) — the wildcard copies it when present
# so the image matches the lockfile the source mount will overlay at runtime.
COPY Gemfile Gemfile.lock* ./
RUN bundle install

# Source is mounted at runtime (see docker-compose.yml) for live editing
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]
