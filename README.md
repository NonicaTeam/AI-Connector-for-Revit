# AI Connector for Revit

The **AI Connector for Revit** connects AI Desktop Apps (like Claude, Cursor or Copilot) with Revit. Rather than generating new Revit code, the AI uses a set of 36 predefined tools to inspect and select elements based on model feedback.

---

## Features

- **Predefined Tools**  
  - Inspect parameters, family sizes, sheets and views, and more  
  - Examples:  
    - Get the value of a parameter  
    - Determine the file size of a family  
    - List views placed on a sheet  

- **Feedback-Driven Interaction**  
  The AI invokes your tools and adapts to Revit’s responses, reducing errors from hand-crafted code.

- **Read & Select Only (Phase 1)**  
  Model reading, inspection, and element selection  

- **Integration with Nonicatab**  
  The “AI Connector” button appears in the Nonicatab toolbar after installation, and selecting the ready-to-use toolbar or tool.

---

## Prerequisites

- **Autodesk Revit** 2025 or 2026 
- **Nonicatab** Revit plugin. 
- **Claude Desktop App or Cursor for automatic setup** Also compatible with Copilot in VSCode and any other MCP compatible desktop app.

---

## Installation

1. **Get the installer from [Autodesk App Store](https://apps.autodesk.com/RVT/en/Detail/Index?id=2476142006549788030&appLang=en&os=Win64).**

2. **Claude.**  
   Install Claude Desktop App (read the Terms and Conditions, remember you are granting access to AI models to your Revit model). It is free and enough for a few tests, but you may need Claude pro for frequent use and conversation length.

3. **Run Revit.**  
   Start Revit (2025 or 2026), and select a toolbar that includes the AI Connector for Revit.
   
4. **Run the AI Connector for Revit.**  
   Go to Nonicatab toolbar in Revit and run the AI Connector. If Claude was opened, remember to restart Claude (close from corner next to Windows clock) after opening the AI Connector the first time.

5. **Start asking.**  
   While the AI Connector for Revit is open and active, Claude will be able to access your Revit model using a set of tools.

---

## Tools Overview

A selection of the available micro-tools is listed below. Use Search and Tools in Claude to see full list.

| Tool                                                    | Description                                           |
|---------------------------------------------------------|-------------------------------------------------------|
| `get_parameters_from_elementid(list_elementId, name)`   | Returns all parameters for the specified element id.  |
| `extract_size_in_MB_of_families(familyName)`            | Returns the family file sizes in megabytes.           |
| `get_viewports_placed_on_sheets(sheetNumber)`           | Lists all views placed on a list of sheets.           |

---

## Acknowledgements

lisiting01 and Jean Marc Couffin for the first Revit MCP.

Anthropic for Model Context Protocol.

AI service providers for powering the backend and chat interface.

---

## License

Copyright 2025 ©️ All rights reserved Nonica 
