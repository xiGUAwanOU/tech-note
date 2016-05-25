# Setup Email Notification

First of all we have to configure the Graylog system, so that it can send the notification Email. To do this, edit the `/etc/graylog/server/server.conf` file:

  ```text
# Email transport
transport_email_enabled = true
transport_email_hostname = some.random.host.net
transport_email_port = 587
transport_email_use_auth = true
#transport_email_use_tls = true
transport_email_use_ssl = true
transport_email_auth_username = guess
transport_email_auth_password = nopassword (should be clear text here)
transport_email_subject_prefix = [graylog]
transport_email_from_email = graylog@example.com
  ```

Restart the Graylog server and follow the steps bellow:

  1. go to the web interface and click `Streams` on the navigation bar;
  2. create a new stream;
  3. create rules for stream to filter out the messages that we are interested in;
  4. create alert for stream so that we could get the notification emails.
