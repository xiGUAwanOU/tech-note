# Generate SSH Key

To generate the key:

```console
$ ssh-keygen -t rsa -b 4096
```

And then copy public key to remote machine. For Ubuntu, simply use this command:

```console
$ ssh-copy-id <username>@<host>
```

Otherwise, do it manually:

```console
$ cat id_rsa.pub >> ~/.ssh/authorized_keys
```

Don't forget to set 600 for those files.
