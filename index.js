#! /usr/local/bin/node

var chalk = require('chalk'),
	program = require('commander'),
	path = require('path'),
	fs = require('fs'),
	cwd = process.cwd(),
	execSync = require('child_process').execSync,
	directory = cwd, // Default: current working directory (zip current directory in terminal)
	saveTo = path.dirname(cwd), // Default: parent directory of current working directory (save zipped current directory in same directory as itself)
	dirExists = true,
	saveToExists = true,
	commandArgs;


function convertToPath(somePath) {
	var fullPath;
	if ( path.isAbsolute(somePath) ) {
		fullPath = somePath;
	} else {
		fullPath = path.resolve(somePath);
	}
	return fullPath;
}

function errorExit(msg) {
	console.log(chalk.red(msg));
	process.exit(1);
}

program
	.version('1.0.0')
	.arguments('[dir] [location]')
	.action((dir, location, command) => { // This only runs when > 0 argument is provided. If no args are provided, must fall back elsewhere.
		if ( dir ) {
			directory = convertToPath(dir);
		}
		if ( location ) {
			saveTo = convertToPath(location);
		}
		dirExists = fs.existsSync(directory);
		saveToExists = fs.existsSync(saveTo);
		commandArgs = command.args;
	})
	.parse(process.argv);


if ( ! dirExists ) {
	errorExit('The directory you provided does not exist.');
}
if ( ! saveToExists ) {
	errorExit('The save location you provided does not exist.');
}


var dirName = path.basename(directory);
var savedFile = `${saveTo}/${dirName}.zip`;


var cmd = `cd ${directory} && cd .. && zip -r ${savedFile} ${dirName} -x "*/\.*" && cd ${cwd}`;
execSync(cmd, {encoding: 'utf8'});


if ( fs.existsSync(savedFile) ) {
	console.log(chalk.green(`Zipped: ${directory}`));
	console.log(chalk.green(`Location: ${savedFile}`));
	process.exit(0);
} else {
	errorExit('The directory could not be zipped.');
}