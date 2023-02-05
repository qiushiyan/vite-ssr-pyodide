import { loadPyodide } from "pyodide";

loadPyodide().then((pyodide) =>
	console.log(pyodide.runPython("import sys; print(sys.version)")),
);
