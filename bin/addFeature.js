#!/usr/bin/env node

import fs from "fs-extra"
import path from 'path'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export default function addFeature() {
  // fs.mkdir(path.resolve('./src/features/NEW_FEATURE'))
  fs.copy(path.resolve(process.argv[1] + "\\..\\..\\web-react-express\\frontend\\src\\features\\settings"), path.resolve('./src/features/NEW_FEATURE'), (err) => {
    console.log('done')
  })
}