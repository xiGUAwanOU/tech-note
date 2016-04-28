# Survival Guide

### Basic Usage

A basic LaTeX code could be like this:

  ```latex
\documentclass{article}

\begin{document}
Hello world! 
\end{document}
  ```

We could build it with command:

  ```console
$ pdflatex document.tex
  ```

Add more information to the document:

  ```latex
\documentclass{article}
\author{My Name}
\title{The Title}
\begin{document}
\maketitle
hello, world % This is comment
\end{document}
  ```

Compile again, now there will be a title part at the beginning of the document.

Now we add structure to the document:

  ```latex
\documentclass{article}
\title{The Title}
\author{My Name}
\begin{document}
\maketitle
\section{Hello World} This is the content of section 1.
\subsection{Hello World Again} This is a sub-section.
\subsubsection{Hello World Again and Again} This is a sub-sub-section.
\paragraph{Aha} There is a paragraph.
\subparagraph{Hohoho} There is a sub-paragraph.
\subsection{Goodbye World} This is another sub-section.
\paragraph{Hum} There is another paragraph.
\end{document}
  ```

### MISC.

  * `\tableofcontents` after `\begin{document}` will add a TOC to the document.
  * `\\` will break the current line.
