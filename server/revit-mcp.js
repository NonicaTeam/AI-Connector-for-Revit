#!/usr/bin/env node
// Starts the local NonicaTab Revit MCP server (RevitMCPConnection.exe) from the
// NonicaTab PRO or FREE install folder and hands it this process's stdio.
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const SERVER = path.win32.join("OtherFiles", "System", "Core", "net8.0-windows", "RevitMCPConnection.exe");
const INSTALL_DIRS = ["C:\\NONICAPRO", "C:\\NONICA"];

const exe = INSTALL_DIRS.map((dir) => path.win32.join(dir, SERVER)).find((p) => fs.existsSync(p));
if (!exe) {
  console.error(
    `RevitMCPConnection.exe was not found under ${INSTALL_DIRS.join(" or ")}. ` +
      "Install NonicaTab from https://nonica.io, then run the A.I. Connector in Revit."
  );
  process.exit(1);
}

const child = spawn(exe, process.argv.slice(2), { stdio: "inherit", windowsHide: true });
child.on("error", (err) => {
  console.error(`Could not start ${exe}: ${err.message}`);
  process.exit(1);
});
child.on("exit", (code, signal) => process.exit(code ?? (signal ? 1 : 0)));
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => child.kill(sig));
