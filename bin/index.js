#!/usr/bin/env node

// import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import addFeature from './addFeature.js'
const log = (...msg) => console.log(...msg)
import createCopy from './createCopy.js'

// const argv = yargs(hideBin(process.argv)).argv

export default yargs(hideBin(process.argv))
  .command('fresh-project', 'Create advanced file structure', (yargs) => {
    return yargs
  }, (argv) => {
    if (argv.verbose) console.info(`Creating a new folder ${argv.localUrl}`)
    createCopy(argv.localUrl)
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .command("add-feature", "adds new feature folder", (yargs) => {
    addFeature()
  })
  // .option('localUrl', {
  //   alias: 'u',
  //   type: 'string',
  //   describe: "Where to put new folder"
  // })
  .demandCommand(2, 'You need at least one command before moving on')
  // .demandOption(["local-url"], 'Please provide a url to use this tool').help()
  .parse()

// log(argv)



