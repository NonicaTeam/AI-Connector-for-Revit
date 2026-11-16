# AI Connector for Revit

The `Revit` MCP server gives you live access to the Autodesk Revit model the user has open, through the NonicaTab AI Connector. It has 50+ tools:

- `get_*` tools read model data (elements, parameters, families, views, sheets, worksets, warnings, units).
- `set_*` tools change the model (parameter values, selection, graphic overrides, copy, move, rotate, delete).
- `create_*` tools find and run creation tools (sheets, sections, views on sheets, and so on).

## How to use the tools

- To run two or more `get_*` calls, chain them in one `start_read_workflow` call. It is faster and uses fewer tokens, and later steps can use earlier results.
- Call each `set_*` and `create_*` tool on its own.
- `set_*` and `create_*` change the user's Revit model. Before you call one, say what will change, and confirm first if the change is large or destructive (for example, deleting elements).
- Revit element IDs are numbers. Read IDs from a `get_*` result; never guess them.

## If the tools fail

The tools only work while Revit is running with a model open and the **AI Connector** in the NonicaTab toolbar is active. If calls fail, ask the user to:

1. Install NonicaTab FREE or PRO from https://nonica.io (it installs to `C:\NONICA` or `C:\NONICAPRO`).
2. Open Revit (2022–2027) with a model loaded.
3. Click **AI Connector** in the NonicaTab toolbar, then restart Gemini CLI.
