# sed: Run with Multiple Rules

If there is more than one rules for a single `sed` run, use `-e` for each rule:

  ```console
$ sed -e "s/ /_/g" -e "s/'/\\\\'/g"
  ```
