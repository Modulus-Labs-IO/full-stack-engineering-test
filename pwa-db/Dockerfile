FROM postgres:11.6-alpine

WORKDIR /pwa-scripts

COPY pwa-scripts .

COPY copy_pg_hba.sh /docker-entrypoint-initdb.d/

# We copy our entry point (which contains some custom hooks)
COPY pwa-entrypoint/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh