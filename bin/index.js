#!/usr/bin/env node

// import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import addFeature from './addFeature.js'
const log = (...msg) => console.log(...msg)
import createCopy from './createCopy.js'
import fs from 'fs'
import chalk from 'chalk'
import path from 'path'
import { askName, welcome, getConfig, selectProject, sleep, padding } from './interactiveMode.js'
// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

// const argv = yargs(hideBin(process.argv)).argv



fs.readdir(path.resolve('./projects'), (err, projects) => {
  yargs(hideBin(process.argv))
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
    .command("interactive", "full stack configuration", async (yargs) => {
      await welcome(projects)
      await sleep(300)
      await askName()
      await selectProject(projects)
      // console.log(getConfig());
      const answer = getConfig();
      console.log(answer);
    })
    .parse()

  // log(argv)


})

