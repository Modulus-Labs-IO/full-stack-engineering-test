FROM kong:3.3.1-alpine

COPY pwa_nginx.template /etc/kong/
COPY pwa_kong.conf /etc/kong/

EXPOSE 8080
	
CMD kong start -c /etc/kong/pwa_kong.conf --nginx-conf /etc/kong/pwa_nginx.template