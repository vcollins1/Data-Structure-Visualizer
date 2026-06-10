# Data Structure Visualizer

Data Structure Visualizer is a work-in-progress full-stack project for exploring
data structures through a C# API and a React/Vite client.

The API currently exposes a native-backed integer linked list. It starts with two
sample values, `100` and `808`, and supports reading, appending, and removing
values through HTTP endpoints.

## Project Structure

```text
.
├── DataStructureVisualizer.Api/      # ASP.NET Core minimal API
│   ├── Endpoints/ListEndpoints.cs    # /list routes
│   ├── IntList.cs                    # P/Invoke wrapper for native list library
│   └── data_structures.http          # Example HTTP requests
└── DataStructureVisualizer.Client/   # React + TypeScript + Vite client
```

## Requirements

- .NET SDK 10.0 or newer
- Node.js and npm
- A native library named `data_structures` available to the API at runtime

The API uses `DllImport("data_structures")` in `IntList.cs`. On macOS, Linux, or
Windows, make sure the compiled native library can be found by the .NET runtime
before starting the API.

## Run the API

From the repository root:

```bash
dotnet run --project DataStructureVisualizer.Api
```

The development profile serves the API at:

```text
http://localhost:5299
```

## Run the Client

From the client directory:

```bash
cd DataStructureVisualizer.Client
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

## API Endpoints

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/list` | Returns all list nodes. |
| `GET` | `/list/{index}` | Returns the node at `index`. |
| `POST` | `/list` | Appends a new integer value. |
| `DELETE` | `/list` | Removes the last value. |

### Example Requests

Get the full list:

```bash
curl http://localhost:5299/list
```

Add a value:

```bash
curl -X POST http://localhost:5299/list \
  -H "Content-Type: application/json" \
  -d '{"data":147}'
```

Remove the last value:

```bash
curl -X DELETE http://localhost:5299/list
```

## Development Notes

- The API stores list state in memory, so values reset when the process restarts.
- The current client is still the Vite starter UI and is ready to be connected to
  the API.
- `DataStructureVisualizer.Api/data_structures.http` contains sample requests for
  quick manual testing from editors that support `.http` files.
