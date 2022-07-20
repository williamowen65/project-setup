#!/usr/bin/env node

import fs from "fs-extra"
import path from 'path'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export default function createCopy(project = "web-react-express", projectsUrl, name) {
  // console.log(process.argv);
  // console.log(path.resolve(`${projectsUrl}/../../projects/${project}`));
  fs.copy(path.resolve(`${projectsUrl}/../../projects/${project}`), path.resolve(`./${name.toLowerCase()}`), (res) => {
    console.log('done');
  })
}
