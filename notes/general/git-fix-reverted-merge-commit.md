labels git

# Git: Fix Reverted Merge Commit

I've reverted the previous merge request because I've accidentally merged it. However, this has created a new commit in the master branch, which will stop me merge the branch once again.

```
master       ---M--R--(x)
               /      /
EDEV-89      c1-----c2
```

* `M`: the 1st MR accidentally merged
* `R`: the revert commit
* `c1`: previously merged changes
* `c2`: code fixes that I'd like to added to branch EDEV-89

If I try merge EDEV-89 to master at `(x)`, that won't work, because change `c1` will be reverted by `R` once again.

After did some homework, I've figured out my own way to solve the problem:

```console
$ git checkout master
$ git rebase --onto master c1^ EDEV-89
```

The history now looks like this:

```
master       ---M1--R
               /     \
EDEV-89      c1       c1--c2
```

Then it can be merged correctly.

Another way of fixing this can be found [here](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/howto/revert-a-faulty-merge.txt). But to follow this way, I have to create a new commit reverting the revert, which will trigger the pipeline.
