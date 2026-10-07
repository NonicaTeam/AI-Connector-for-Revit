---
name: revit-ai-connector
description: Inspect, select, edit and document Autodesk Revit models through the NonicaTab AI Connector (the local "Revit" MCP server). Use when the user asks about their Revit model, such as elements, categories, families, types, parameters, views, sheets, schedules, worksets, warnings or view filters, or wants to select, move, rotate, copy, delete or change elements in Revit.
---

# AI Connector for Revit

The AI Connector exposes 50+ predefined Revit tools through a local MCP server named **Revit**. That server runs on the user's Windows PC, inside the NonicaTab plugin for Autodesk Revit. Use these tools instead of writing Revit API code.

- `get_*` tools read model data.
- `set_*` tools change the model.
- `create_*` tools find and run tools that create or add elements.

## Before you start

The Revit tools only work when all of these are true:

1. Autodesk Revit (2022 to 2027) is open on the same Windows PC, with a model loaded.
2. NonicaTab is installed, and the **A.I. Connector** window in the NonicaTab ribbon is open with the connection enabled.
3. The AI app was restarted after the A.I. Connector ran for the first time.
4. In Claude Code, Node.js is installed, because this plugin starts the server with `node`.

If no Revit tools are available in this session, do not guess model data. Tell the user what is missing from the list above. Then point them to the setup guide at https://tools.nonica.io/AIConnector and the NonicaTab download at https://nonica.io.

## How to read the model

- **Find ids first.** Most tools take element, type, category or view ids.
  - To find a category, use `get_categories_by_keywords`. Fall back to `get_model_categories` if nothing matches.
  - To get elements of a category, use `get_elements_by_category`. Pass a view id to limit it to elements shown in that view.
  - For the selected elements, use `get_user_selection_in_revit`.
  - For the view on screen, use `get_active_view_in_revit`.
- **Chain reads.** When an answer needs two or more `get_*` calls, run them as one chain with `start_read_workflow` instead of calling them one by one. Do not use it for a single call.
- **Parameters.** For one element, call `get_parameters_from_elementid` first to see what exists. Then use `get_parameters_values_for_element_ids` for bulk reads.
- **Reports.** When the user asks for a report, summary, table, chart or dashboard of Revit data, use `show_report`.
- **Linked models.** Graphic override and family size tools do not work with elements in linked documents.

## How to change the model

`set_*` and `create_*` tools change the user's Revit model.

- Before you call one, tell the user what will change and how many elements it affects. Wait for them to confirm, especially for `set_delete_elements`, `set_movement_for_elements`, `set_rotation_for_elements` and bulk `set_parameter_value_for_elements` calls.
- When setting parameter values, include unit acronyms where they apply (for example `2.12 m`).
- To create or add elements, call `create_tool_names_explorer` to find the tool, then `create_tool_arguments_explorer` to get its arguments, then `create_tools_invoker` to run it. Units and coordinates for these tools are in feet.
- After changing the model, read the affected elements again to confirm the result. Use `set_user_selection_in_revit` to show the user which elements changed.
