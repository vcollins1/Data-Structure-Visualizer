using DataStructureVisualizer.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapListEndpoints();

app.Run();