// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

console.log('HELLO');


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	
	console.log('hello')
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('custom-region-folder.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from custom-region-folder!');
	});
	const documentSelector: vscode.DocumentSelector & { exclusive: true } = { exclusive: true, language: 'csharp' };
	try {
		vscode.languages.registerFoldingRangeProvider(documentSelector, new CustomFoldingRangeProvider());
		console.log('Registered custom folding range provider');
	}
	catch (e) {
		console.error(e)
	}
	finally  {
		context.subscriptions.push(disposable);
	}

}

class CustomFoldingRangeProvider implements vscode.FoldingRangeProvider {
	onDidChangeFoldingRanges?: vscode.Event<void> | undefined;
	provideFoldingRanges(document: vscode.TextDocument, context: vscode.FoldingContext, token: vscode.CancellationToken): vscode.ProviderResult<vscode.FoldingRange[]> {
		vscode.window.showInformationMessage('in provideFoldingRanges');
		return []
	}

}

// This method is called when your extension is deactivated
export function deactivate() {}
