# semantic-git-commit-cli

[![Build Status](https://travis-ci.org/JPeer264/node-semantic-git-commit-cli.svg?branch=master)](https://travis-ci.org/JPeer264/node-semantic-git-commit-cli)
[![Build status](https://ci.appveyor.com/api/projects/status/t9xwo0r3n2oe5ywf/branch/master?svg=true)](https://ci.appveyor.com/project/JPeer264/node-semantic-git-commit-cli/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/JPeer264/node-semantic-git-commit-cli/badge.svg?branch=master)](https://coveralls.io/github/JPeer264/node-semantic-git-commit-cli?branch=master)


> A CLI to keep semantic git commits. With emoji support 😄 👍

<img src="https://raw.githubusercontent.com/JPeer264/node-semantic-git-commit-cli/master/media/screenshot.gif">

## Why?

Many projects got different git commit rules. It is hard to remember them all. Usually you start with `git commit -m "`, and then? You have to think about the projects commit guidelines.

`sgc` will take care of the commit guidelines, so you can focus on the more important stuff: **code**

## Installation

```sh
$ npm i -g semantic-git-commit-cli
```
or
```sh
$ yarn global add semantic-git-commit-cli
```

## Usage

Forget the times when you used `git commit -m "..."`, now just type:
```sh
$ sgc
```
or if you already have an alias for sgc, use following instead:
```sh
$ semantic-git-commit
```

### usage with semantic-release

> Configure sgc for the following semantic-release options: `analyzeCommits` and `generateNotes`

First step, install the following plugins with 
```sh
$ npm install --save-dev sr-commit-analyzer sr-release-notes-generator conventional-changelog-eslint
```
or
```sh
$ yarn add -D sr-commit-analyzer sr-release-notes-generator conventional-changelog-eslint
```

Then, add this in your `package.json` :
```json
{
  "release": {
    "analyzeCommits": {
      "path": "sr-commit-analyzer",
      "preset": "eslint"
    },
   "generateNotes": {
      "path": "sr-release-notes-generator",
      "preset": "eslint"
    }
  }
}
```

## Config

> Just create a `.sgcrc` in your project root or you can add everything in your `package.json` with the value `sgc`

You can even create a global config. Just go to your users home and create a `.sgcrc`. The global config will be triggered if no project configurations are present.

**Options:**
- [body](#body)
- [scope](#scope)
- [emoji](#emoji)
- [lowercaseTypes](#lowercaseTypes)
- [initial-commit](#initial-commit)
- [types](#types)
- [rules](#rules)

### body

**Type:** `boolean`

**Default**: `true`

Asks if more info (body) should be added. This will open your default editor.

Example:
```json
{
  "body": false
}
```

### scope

**Type:** `boolean`

**Default:** `false`

Asks for the scope in parentheses of the commit.

Example:
```json
{
  "scope": true
}
```

### emoji

**Type:** `boolean`

**Default:** `false`

A boolean to enable emoji at the beginning of a commit message

Example:
```json
{
  "emoji": true
}
```

### lowercaseTypes

**Type:** `boolean`

**Default:** `false`

A boolean to lowercase types.

Example:
```json
{
  "lowercaseTypes": true
}
```

### initial-commit

**Type:** `object`

**Default:**

```json
{
  "initial-commit": {
    "isEnabled": true,
    "emoji": ":tada:",
    "message": "Initial commit"
  }
}
```

**Keys:**

- `isEnabled` - Whether an explicit initial commit should be used for the very first commit
- `emoji` - An emoji which will be appended at the beginning of the commit ([Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/))
- `message` - The commit message for the very first commit

### types

> Types will define your git commits. If `types` is not set in your own `.sgcrc`, the `types` of the global [.sgcrc](.sgcrc)


**Keys**

- `type` - This will be your commit convention and will be your start of your commit - e.g.: `Feat:`
- `description` (optional) - The description to explain what your type is about
- `emoji` (optional) - An emoji which will be appended at the beginning of the commit ([Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/))

The `.sgcrc`:

```json
{
    "types": [
      {
        "emoji": ":sparkles:",
        "type": "Feat:",
        "description": "Any description to describe the type"
      }
    ]
}
```

or the `package.json`:

```json
{
    "name": "Your application name",
    "version": "1.0.0",
    "sgc": {
        "types": [
            {
              "emoji": ":sparkles:",
              "type": "Feat:",
              "description": "Any description to describe the type"
            }
        ]
    }
}
```

### rules

Available rules:

- [max-char](#max-char)
- [min-char](#min-char)
- [end-with-dot](#end-with-dot)

#### max-char

**Type:** `number`

**Default:** `72`

If a number is set, it will not allow to commit messages **more than** the given number. If it is set to `-1` the rule is deactivated

Example:
```json
{
  "rules": {
    "max-char": -1
  }
}
```

#### min-char

**Type:** `number`

**Default:** `10`

If a number is set, it will not allow to commit messages **less than** the given number. If it is set to `-1` the rule is deactivated

Example:
```json
{
  "rules": {
    "min-char": -1
  }
}
```

#### end-with-dot

**Type:** `boolean`

**Default:** `true`

If it is set to false, it will not allow to commit messages with a dot at the

Example:
```json
{
  "rules": {
    "end-with-dot": false
  }
}
```
