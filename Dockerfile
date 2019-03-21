FROM microsoft/dotnet:2.1-sdk
COPY deploy /app
WORKDIR /app

ENV ASPNETCORE_URLS http://*:5000
 
ENTRYPOINT ["dotnet", "server.dll"]