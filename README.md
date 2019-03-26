# Tech Note
The conten in this tech note is:
1. either cheatsheet-like, which will be referenced later;
2. interesting understandings, which are worth to be read again later.

For a source code highlighting language list, see [linguist project](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

## Subfolders
There are only two first-level sub-directories:
1. cheatsheets
2. notes

Within the two first-level sub-directories, the articles are seperated by its applied domain:
1. general
2. frontend
3. backend
4. devops
5. game
6. compiler
7. embedded
8. art
9. ...

## Filename
Filename must be kebab-cased. The first word in the filename is the main technology that the tech note is talking about.

## Keywords
Keywords are one of the searching criteria. They should be specified like:
```text
keywords responsive, head, viewport, meta, media, query, breakpoint, html, css
```

## Labels
Label can be added according to the:
1. programming language
2. framework/library
3. technology

Tech notes are categorized by their labels. They should be specified like:
```text
labels web, html, css, responsive
```

The first label must match the first word in the filename.

## Title
Title is a summary of the content of the tech note, and also one of the searching criteria. Just use markdown first-level title:
```markdown
# Web: Responsive Design Basics
```

The first part of the title must match the first word in the filename.
