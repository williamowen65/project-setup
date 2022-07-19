#!/usr/bin/env node

import fs from "fs-extra"
import path from 'path'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export default function createCopy() {
  fs.copy(path.resolve(process.argv[1] + "/../../web-react-express"), path.resolve('./new-project'), (res) => {
    console.log('done');
  })
}

// export function addFeature() {
//   fs.copy(path.resolve(process.argv[1] + "/../dist/src/features/newFeature"), path.resolve('./src/features'), () => {
//     console.log('done');
//   })
// }


// yargs(process.argv).command('fresh-project [localUrl]', 'Create advanced file structure', (yargs) => {
//   return yargs
// }, (argv) => {
//   if (argv.verbose) console.info(`Creating a new folder ${argv.localUrl}`)
//   createCopy(argv.localUrl)
// })
//   .option('verbose', {
//     alias: 'v',
//     type: 'boolean',
//     description: 'Run with verbose logging'
//   })
//   // .option('localUrl', {
//   //   alias: 'u',
//   //   type: 'string',
//   //   describe: "Where to put new folder"
//   // })
//   .demandCommand(2, 'You need at least one command before moving on')
//   // .demandOption(["local-url"], 'Please provide a url to use this tool').help()
//   .parse()

// // createCopy()

// console.log(process.argv);
// console.log(path.resolve('./src/features'));
// console.log(yargs.toString());