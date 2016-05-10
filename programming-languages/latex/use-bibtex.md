# Use BibTeX

BibTeX is a tool which are used to describe and process lists of references. To use BibTeX, we could follow the instructions written on its [official site](http://www.bibtex.org/Using/).

In LaTeX source file (`document.tex`), we should add `cite` as a package dependency. And then in text, we use `\cite{}` to 

  ```latex
\documentclass{article}
\usepackage{cite}

\author{My Name}
\title{The Title}

\begin{document}
\maketitle

Blablabla\cite{DUMMY} embeddeed in text.

\bibliography{document.bib}
\bibliographystyle{plain}
\end{document}
  ```

In BibTeX file (`document.bib`), we describe the references in its syntax:

  ```bibtex
@BOOK{DUMMY,
  AUTHOR="John Doe",
  TITLE="The Book without Title",
  PUBLISHER="Dummy Publisher",
  YEAR="2016",
}
  ```

To compile with BibTeX, one could use following commands:

  ```console
$ pdflatex document.tex
$ bibtex document.bib
$ pdflatex document.tex
$ pdflatex document.tex
  ```
