const fs = require('fs')
const path = require('path')

function main() {
  forEachFileInPath('cheatsheets', checkForProblems([
    checkKeywordsAtLine(1),
    checkLabelsAtLine(2),
    checkEmptyAtLine(3),
    checkTitleAtLine(4)
  ]))

  forEachFileInPath('notes', checkForProblems([
    checkLabelsAtLine(1),
    checkEmptyAtLine(2),
    checkTitleAtLine(3)
  ]))
}

function forEachFileInPath(basePath, callback) {
  const dirEntries = fs.readdirSync(basePath, { encoding: 'utf8', withFileTypes: true })
  for (const dirEntry of dirEntries) {
    if (dirEntry.isDirectory()) {
      forEachFileInPath(path.join(basePath, dirEntry.name), callback)
    } else if (dirEntry.isFile()) {
      callback(path.join(basePath, dirEntry.name))
    }
  }
}

function checkForProblems(callbacks) {
  return function(filePath) {
    if (path.extname(filePath) !== '.md') {
      return
    }

    const name = path.basename(filePath, '.md')
    const content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')

    const file = {
      path: filePath,
      name,
      content,
      lines
    }

    for (const callback of callbacks) {
      if (!callback(file)) {
        break
      }
    }
  }
}

function checkKeywordsAtLine(line) {
  return function (file) {
    const content = extractLine(line, file)
    const pattern = /^keywords ((?:[^,]+, )*(?:[^,]+))$/
    const matches = content.match(pattern)
    if (!matches) {
      printErrorMessage(file.path, line, 'Line must be a valid keywords expression')
      return false
    }

    return true
  }
}

function checkLabelsAtLine(line) {
  return function (file) {
    const content = extractLine(line, file)
    const pattern = /^labels ((?:[^,]+, )*(?:[^,]+))$/
    const matches = content.match(pattern)
    if (!matches) {
      printErrorMessage(file.path, line, 'Line must be a valid labels expression')
      return false
    }
    
    const labels = matches[1].split(', ')
    const firstWordInFilename = file.name.split('-')[0].toLowerCase()
    const firstLabel = labels[0].toLowerCase()
    if (firstWordInFilename !== firstLabel) {
      printErrorMessage(file.path, line, 'The first label must be the same with the first word in the filename')
      return false
    }

    return true
  }
}

function checkTitleAtLine(line) {
  return function (file) {
    const content = extractLine(line, file)
    const pattern = /^# (.+: .+)$/
    const matches = content.match(pattern)
    if (!matches) {
      printErrorMessage(file.path, line, 'Line must be a valid title')
      return false
    }
    
    const title = matches[1]
    
    const firstWordInFilename = file.name.split('-')[0].toLowerCase()
    const firstWordInTitle = title.split(':')[0].toLowerCase()
    if (firstWordInFilename !== firstWordInTitle) {
      printErrorMessage(file.path, line, 'The first word in the title must be the same with the first word in the filename')
      return false
    }

    return true
  }
}

function checkEmptyAtLine(line) {
  return function (file) {
    const content = extractLine(line, file)
    const pattern = /^$/
    const matches = content.match(pattern)
    const errorMessage = 'Line must be empty'
    if (!matches) {
      printErrorMessage(file.path, line, errorMessage)
      return false
    } else {
      return true
    }
  }
}

function extractLine(line, file) {
  if (file.lines && file.lines.length >= line) {
    return file.lines[line - 1]
  } else {
    return ''
  }
}

function printErrorMessage(filePath, line, message) {
  console.log(`In file: ${filePath}, line: ${line}`)
  console.log(`  ${message}`)
}

main()
