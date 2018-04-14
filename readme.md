# ZipDir CLI

NodeJS CLI command for zipping directories.

## Description

A simple terminal command built using NodeJS. This was my first attempt to create a terminal command using Node, and one of my first terminal commands in general (it may not be any good). It does work for Mac - I have not tested for other OS.

## Installation

#### NPM (suggested)

```
$ npm install -g @renventura/zipdir
```

#### From GitHub

1. Clone the repository

```
$ git clone https://github.com/renventura/zipdir.git
```

2. `cd` into the repo

3. Run:

```
$ npm install
$ npm i -g
```

## Usage

```
$ zipdir [dir] [location]
```

`[dir]` - path for directory to be zipped - can be relative or absolute (default: current working directory); e.g. `my-directory`

`[location]` - path and filename for zipped directory (default: parent of current working directory); e.g. `~/Desktop/my-directory.zip`

## Bugs

If you find an issue, let me know!

## Changelog

__1.0.0__
* Initial commit