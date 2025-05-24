# AI Connector for Revit (Beta)

The **AI Connector for Revit** connects AI Desktop Apps (like Claude or Cursor) with Revit. Rather than generating new Revit code, the AI uses a set of 36 predefined commands to inspect and select elements based on model feedback.

---

## Features

- **36 Predefined Tools**  
  - Inspect parameters, family sizes, sheets and views, and more  
  - Examples:  
    - Get the value of a parameter  
    - Determine the file size of a family  
    - List views placed on a sheet  

- **Feedback-Driven Interaction**  
  The AI invokes your tools and adapts to Revit’s responses, reducing errors from hand-crafted code.

- **Read & Select Only (Phase 1)**  
  Model reading, inspection, and element selection  
  (Write operations will be added in a later release.)

- **Integration with Nonicatab**  
  A new “AI Connector” button appears in the Nonicatab ribbon after installation, and selecting the ready-to-use toolbar or tool.

---

## Prerequisites

- **Autodesk Revit** 2025 or 2026 
- **Nonicatab** Revit plugin (Pro or Free). 
- **Claude Desktop App or Cursor**  

---

## Installation

1. **Join the list to receive the installer.**  
   [AI Connector for Revit](https://nonica.io/#AIConnector)

2. **Download and install.**  
   Follow the instructions and read the Terms and Conditions, remember you are granting access to AI models to your Revit model. Install Claude Desktop App. It is free and enough for a few tests, but you may need Claude pro for frequent use.

3. **Run Revit.**  
   Start Revit (2025 or 2026), and select a toolbar that includes the AI Connector for Revit.
   
4. **Run the AI Connector for Revit.**  
   Go to Nonicatab toolbar in Revit and run the AI Connector. If Claude was opened, remember to restart Claude after opening the AI Connector the first time.

5. **Start asking.**  
   While the AI Connector for Revit is open and active, Claude will be able to access your Revit model using a set of tools.

---

## Tools Overview

A selection of the available micro-tools is listed below. Use Search and Tools in Claude to see full list.

| Tool                                       | Description                                          |
|--------------------------------------------|------------------------------------------------------|
| `GetParameterValue(elementId, name)`       | Returns the specified parameter’s value              |
| `GetFamilySizeInMB(familyName)`            | Returns the family file size in megabytes            |
| `GetViewsOnSheet(sheetNumber)`             | Lists all views placed on a given sheet              |

---

## Acknowledgements

lisiting01 and Jean Marc Couffin for the first Revit MCP.

AI service providers for powering the backend chat interface

---

## License

Copyright 2025 ©️ All rights reserved Nonica 
