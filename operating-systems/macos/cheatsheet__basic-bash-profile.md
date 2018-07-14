# Basic Bash Profile

```bash
# Basic Aliases
alias ls="ls -G"
alias ll="ls -l"
alias la="ls -lA"

# Path
if [ -d ~/Bin ]
then
  export PATH=$PATH:~/Bin
fi

# Prompt Style
export PS1="\w $ "

```
