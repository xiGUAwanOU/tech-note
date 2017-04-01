# Setup Email Notification

First of all we have to configure the Graylog system, so that it can send the notification Email. To do this, edit the `/etc/graylog/server/server.conf` file:

```text
# Email transport
transport_email_enabled = true
transport_email_hostname = 127.0.0.1
transport_email_port = 25
transport_email_use_auth = false
transport_email_use_tls = false
transport_email_use_ssl = false
transport_email_auth_username = you_guess
transport_email_auth_password = no_password (should be clear text here)
transport_email_subject_prefix = [graylog]
transport_email_from_email = email.address@host.net
```

Restart the Graylog server and follow the steps bellow:

  1. go to the web interface and click `Streams` on the navigation bar;
  2. create a new stream;
  3. create rules for stream to filter out the messages that we are interested in;
  4. create alert for stream so that we could get the notification emails.
