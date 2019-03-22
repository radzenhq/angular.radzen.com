FROM microsoft/dotnet:2.1-sdk
COPY deploy /app
WORKDIR /app

ENTRYPOINT ["dotnet", "server.dll"]
