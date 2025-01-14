# Language server and development client support

December 2019 (Alpha 3) :toc-title: DEVELOPMENT CLIENT :toclevels: 1 :proglang: Motoko :IC: Internet Computer :company-id: DFINITY

The [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol)—originally developed by Microsoft—provides a common language to add broadly-useful features like automatic code complete, GoTo definition, and hover-over tool tips to development tools. Using the Language Server Protocol, a language server enables standardized inter-process communication between a programming language and any editor, integrated development environment (IDE), or client endpoint tool.

Because the Language Server Protocol (LSP) standardizes the protocol for how language-specific servers and development tools communicate, a single language server can be re-used in multiple development tools with minimal effort.

## Adding a language server for Motoko

With the SDK, you can add a language server for Motoko to your editor or development environment client by invoking the `dfx _language-service` programmatically when you open Motoko programs in an editor or development environment configured to recognize the language server. You can use any editor or integrated development environment that supports the Language Server Protocol to invoke the `dfx _language-service` programmatically. Once invoked, the language server ensures that your development environment reports Motoko compiler errors and provides code completion and refactoring tools.

For example, if you use Visual Studio Code (VSCode) or Emacs as your development environment, you can install a plugin extension that enables those editors to automatically invoke the Motoko language server.

<div class="note">

Only the Visual Studio Code (VSCode) plugin extension is currently available for Motoko. For information about installing the plugin, see [Install the language editor plug-in](../../tutorials/local-quickstart#install-vscode).

</div>

## Invoking the language service manually

Although it is extremely rare that you would start the Motoko language server directly in a terminal shell. it is possible to do so by running the following command:

``` bash
dfx _language-service --force-tty
```

Note that you can only run this command from within a project directory. For example, if your project name is `hello_world`, your current working directory must be the `hello_world` top-level project directory or one of its subdirectories.

### Basic usage

``` bash
dfx _language-service [canister_name] [flag]
```

### Flags

You can use the following optional flags with the `dfx _language-service` command.

| Flag              | Description                                                             |
|-------------------|-------------------------------------------------------------------------|
| `--force-tty`     | Starts the the Motoko language server directly in a terminal shell. |
| `-h`, `--help`    | Displays usage information.                                             |
| `-V`, `--version` | Displays version information.                                           |

### Arguments

You can specify the following arguments for the `dfx _language-service` command.

| Argument        | Description                                                                                                                                                                                                                                                                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `canister_name` | Specifies the name of the canister that the compiler should monitor. If you specify a canister name, the name should match a canister name you have configured in the `dfx.json` configuration file for your project. If you don’t specify a canister name, the first canister specified in the `dfx.json` configuration file is used as the target. |

### Examples

If you want to use an integrated development environment to develop code for the canister `my-canister` you should have the development environment invoke the language service using the following `dfx _language-service` command:

``` bash
dfx _language-service my-canister
```
