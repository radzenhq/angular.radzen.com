FROM kyma/docker-nginx
COPY ./app/server/wwwroot /var/www
CMD 'nginx'
EXPOSE 80