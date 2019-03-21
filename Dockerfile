FROM kyma/docker-nginx
COPY /app/server/wwwroot
CMD 'nginx'
EXPOSE 80