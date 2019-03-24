const fs = require('fs')
const path = require('path')

const main = () => withValue(undefined)
  .thenDo(() => forEachFileInPath(
    'cheatsheets',
    fileHasMarkdownExtension,
    checkProblemsForCheatsheets
  ))
  .thenDo(() => forEachFileInPath(
    'notes',
    fileHasMarkdownExtension,
    checkProblemsForNotes
  ))
  .value()

const forEachFileInPath = (basePath, filter, callback) => 
  listFilesInPath(basePath)
    .filter((dirEntry) => dirEntry.isDirectory() || filter(dirEntry))
    .map((dirEntry) =>
      dirEntry.isDirectory()
        ? forEachFileInPath(path.join(basePath, dirEntry.name), filter, callback)
        : callback(path.join(basePath, dirEntry.name))
    )

const listFilesInPath = (basePath) => fs.readdirSync(basePath, { encoding: 'utf8', withFileTypes: true })

const fileHasMarkdownExtension = (dirEntry) => dirEntry.isFile() && dirEntry.name.endsWith('.md')

const checkProblemsForCheatsheets = (filePath) =>
  withValue(filePath)
    .thenDo(readFile)
    .thenDo(enrichFileWithLines)
    .thenDo((file) => checkKeywordsAtLine(1, file))
    .thenDo((file) => checkLabelsAtLine(2, file))
    .thenDo((file) => checkEmptyAtLine(3, file))
    .thenDo((file) => checkTitleAtLine(4, file))
    .value()

const checkProblemsForNotes = (filePath) =>
  withValue(filePath)
    .thenDo(readFile)
    .thenDo(enrichFileWithLines)
    .thenDo((file) => checkLabelsAtLine(1, file))
    .thenDo((file) => checkEmptyAtLine(2, file))
    .thenDo((file) => checkTitleAtLine(3, file))
    .value()

const checkEmptyAtLine = (line, file) =>
  printMessageIfDoesNotMatch(
    line,
    /^$/,
    `File: ${file.path} (line: ${line})\n  Line must be empty`,
    file
  )

const checkKeywordsAtLine = (line, file) =>
  printMessageIfDoesNotMatch(
    line,
    /^keywords (?:[^,]+, )*(?:[^,]+)$/,
    `File: ${file.path} (line: ${line})\n  Line must be a keywords expression`,
    file
  )

const checkLabelsAtLine = (line, file) => 
  printMessageIfDoesNotMatch(
    line,
    /^labels (?:[^,]+, )*(?:[^,]+)$/,
    `File: ${file.path} (line: ${line})\n  Line must be a labels expression`,
    file
  )

const checkTitleAtLine = (line, file) =>
  printMessageIfDoesNotMatch(
    line,
    /^# .+$/,
    `File: ${file.path} (line: ${line})\n  Line must be the title of the article`,
    file
  )


const readFile = (filePath) => ({
  path: filePath,
  content: fs.readFileSync(filePath, 'utf8')
})

const enrichFileWithLines = (file) => ({
  ...file,
  lines: file.content.split('\n')
})

const printMessageIfDoesNotMatch = (line, regex, message, file) => {
  if (!extractLineContent(line, file).match(regex)) {
    return print(message, file)
  } else {
    return file
  }
}

const extractLineContent = (line, file) => {
  if (file.lines && file.lines.length >= line) {
    return file.lines[line - 1]
  } else {
    return ''
  }
}

const withValue = (initialValue) => {
  const makeFluentObject = (value) => ({
    thenDo: (callback) => makeFluentObject(callback(value)),
    value: () => value
  })
  return {
    thenDo: (callback) => makeFluentObject(callback(initialValue))
  }
}

const print = (text, value) => {
  console.log(text)
  return value
}

main()
