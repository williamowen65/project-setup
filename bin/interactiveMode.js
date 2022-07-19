import chalk from 'chalk'
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import figlet from 'figlet';
export const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
export const padding = (rows) => {
  console.log(
    `
    `
  );
}

let projectConfig = {}

export async function welcome(projects) {
  padding(2)
  figlet("Welcome!!", {
    // font: 'bulbhead',
    // font: 'alphabet',
    font: 'banner3',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true,
  }, function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data)
    padding(3)
  })


}

export async function askName() {
  const answers = await inquirer.prompt({
    name: 'project_name',
    type: 'input',
    message: "What is the name of your project?",
    default() {
      return 'new-project'
    }
  })

  padding(1)

  projectConfig['answers'] = answers
}

export async function selectProject(projects) {
  const answers = await inquirer.prompt({
    name: "selected_project",
    type: 'list',
    message: "Select a project to create",
    choices: [...projects]
  })

  projectConfig.answers = {
    ...projectConfig.answers,
    ...answers
  }

  padding(1)
  return handleAnswer()
}

async function handleAnswer() {
  const spinner = createSpinner("Setting up backend..").start()
  await sleep()
  spinner.success({ text: 'nice work' })
}


export function getConfig() {
  return projectConfig
}