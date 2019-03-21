FROM kyma/docker-nginx
COPY server/wwwroot /var/www
CMD 'nginx'
EXPOSE 80