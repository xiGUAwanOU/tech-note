# Generate SSH Key

To generate the key:

```console
$ ssh-keygen
```

And then copy public key to remote machine:

```console
$ cat id_rsa.pub >> ~/.ssh/authorized_keys
```

Don't forget to set 600 for those files.
