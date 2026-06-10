using DataStructureVisualizer.Api.Dtos;

namespace DataStructureVisualizer.Api.Endpoints;

public static class ListEndpoints
{
    private const string GetListNode = "GetListNode";
    public static void MapListEndpoints(this WebApplication app)
    {
        var listGroup = app.MapGroup("/list");
        var list = new IntList();
        list.Add(100);
        list.Add(808);

        listGroup.MapGet("/", () => 
            Results.Ok(list.ToDto()));

        listGroup.MapGet("/{index}", (int index) =>
        {
            var data = list.GetIndex(index);
            return Results.Ok(new ListNodeDto(index, data));
        }).WithName(GetListNode);

        listGroup.MapPost("/", (CreateListNodeDto newUser) =>
        {
            list.Add(newUser.Data);
            var curIndex = list.Size() - 1;
            return Results.CreatedAtRoute(GetListNode, 
                new { index = curIndex }, new ListNodeDto(curIndex, newUser.Data));
        });

        listGroup.MapDelete("/", () =>
        {
            list.Remove();
            return Results.Ok();
        });
    }
}
