FROM microsoft/dotnet:2.1-sdk
COPY . /app
WORKDIR /app/server

ENV ASPNETCORE_URLS http://*:5000
 
ENTRYPOINT ["dotnet", "run"]
