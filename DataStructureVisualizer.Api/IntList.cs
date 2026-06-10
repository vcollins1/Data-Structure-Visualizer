using System.Dynamic;
using System.Runtime.InteropServices;
using DataStructureVisualizer.Api.Dtos;

namespace DataStructureVisualizer.Api;

public sealed class IntList : IDisposable
{
    private const string LibraryName = "data_structures";

    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern IntPtr int_list_create();
    
    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern void int_list_destroy(IntPtr list);

    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern int int_list_add_back(IntPtr list, int data);

    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern int int_list_remove_back(IntPtr list);

    [DllImport(LibraryName, EntryPoint = "list_at", CallingConvention = CallingConvention.Cdecl)]
    private static extern int list_at(IntPtr list, int index, out int output);

    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern int int_list_size(IntPtr list);

    [DllImport(LibraryName, CallingConvention = CallingConvention.Cdecl)]
    private static extern void int_list_print(IntPtr list);

    private readonly IntPtr _list = int_list_create();

    public IReadOnlyList<ListNodeDto> ToDto()
    {
        var nodes = new List<ListNodeDto>();
        for (var i = 0; i < Size(); ++i)
        {
            var status = list_at(_list, i, out var output);
            if (status != 0)
                throw new InvalidOperationException($"Native list error: {status}");
            
            nodes.Add(new ListNodeDto(i, output));
        }

        return nodes;
    }

    public void Add(int data)
    {
        var status = int_list_add_back(_list, data);
        if (status != 0)
            throw new InvalidOperationException($"Native list error: {status}");
    }

    public int GetIndex(int index)
    {
        var status = list_at(_list, index, out var output);
        if (status != 0)
            throw new InvalidOperationException($"Native list error: {status}");

        return output;
    }

    public void Remove()
    {
        var status = int_list_remove_back(_list);
        if (status != 0)
            throw new InvalidOperationException($"Native list error: {status}");
    }

    public int Size()
    {
        return int_list_size(_list);
    }

    public void Print()
    {
        int_list_print(_list);
    }

    public void Dispose()
    {
        int_list_destroy(_list);
    }
}
