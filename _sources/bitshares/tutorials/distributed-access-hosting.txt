**********************************************************
Distributed Access to the BitShares Decentralised Exchange
**********************************************************

I hope to encourage and promote more access points and backup WebSocket
(wss) gateways for BitShares. This is the logical progression from `Run
your own decentralised
exchange <https://steemit.com/bitshares/@ihashfury/run-your-own-decentralised-exchange>`__
post. |BitShares| ###Distributed Access to the BitShares Network

BitShares node setup
====================

`Run your own decentralised exchange <https://steemit.com/bitshares/@ihashfury/run-your-own-decentralised-exchange>`__

Once you have a full node setup, you can allow BitShares shareholders
secure access to your server to trade and check their accounts by
following these steps. >A DNS Alias (CNAME) is required to point to your
server ip address. >See `dyn.com <http://dyn.com>`__ for DNS Alias
setup. >You may have to wait a few days for the DNS to work through the
internet. >Please change `altcap.io <http://altcap.io>`__ to your DNS
alias in the examples below.

**Table of Contents**

[TOC]

Create a New User
=================

I recommend creating a new user on your server to run the Bitshares gui
and give the user sudo access. >You can use any name - I have used
bitshares in this example

::

    sudo adduser bitshares
    sudo gpasswd -a bitshares sudo
    sudo gpasswd -a bitshares users

Install Nginx
=============

Install Nginx web server

::

    # ssh into your new user bitshares
    ssh bitshares@altcap.io
    sudo apt-get install nginx
    # check version
    nginx -v
    # add user to web server group
    sudo gpasswd -a bitshares www-data
    # start nginx
    sudo service nginx start

This will start Nginx default web server. Check it by typing the ip
address of your server in a web browser or your alias
`altcap.io <http://altcap.io>`__

Configure Nginx
---------------

To configure the web server, edit the default site and save as new DNS
alias name using http port 80 only until you setup
`letsencrypt.org <https://letsencrypt.org/>`__ SSL Certificate.

Create your web folder
----------------------

::

    sudo mkdir -p /var/www/altcap.io/public_html
    sudo chown -R bitshares:bitshares var/www/altcap.io/public_html
    sudo chmod 755 /var/www

Configure Nginx
---------------

::

    # edit default setup and save as altcap.io
    sudo nano /etc/nginx/sites-available/default

Point to your new virtual host

::

    ###### altcap.io ######
    server {
        listen 80;
        server_name altcap.io;
        #rewrite ^ https://$server_name$request_uri? permanent;
        #rewrite ^ https://altcap.io$uri permanent;
        #
        root /var/www/altcap.io/public_html;
        # Add index.php to the list if you are using PHP
        index index.html index.htm;
        #
        location / {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            try_files $uri $uri/ =404;
        }
    }

    CTRL+O to save as altcap.io (^O Write Out)

Update Virtual Host File
------------------------

::

    sudo cp altcap.io /etc/nginx/sites-available/altcap.io

Activate sim link and disable default web server
------------------------------------------------

::

    sudo ln -s /etc/nginx/sites-available/altcap.io /etc/nginx/sites-enabled/altcap.io
    sudo rm /etc/nginx/sites-enabled/default

Link local folder to www root and add a simple index.html
---------------------------------------------------------

::

    ln -s /var/www/altcap.io/public_html ~/public_html
    nano ~/public_html/index.html

Add some text to index.html

::

    <html>
      <head>
        <title>altcap.io</title>
      </head>
      <body>
        <h1>altcap.io - Virtual Host</h1>
      </body>
    </html>

    CTRL+X to save as index.html (^X Exit) ###Restart Nginx

::

    sudo service nginx restart

Now you have setup a simple web server. DigitalOcean has a great
`article <https://www.digitalocean.com/community/articles/how-to-set-up-nginx-virtual-hosts-server-blocks-on-ubuntu-12-04-lts--3>`__
for more information on Virtual Host setup.

Install letsencrypt
===================

::

    sudo apt-get install letsencrypt

Obtain your SSL certificate
---------------------------

::

    sudo letsencrypt certonly --webroot -w /var/www/altcap.io/public_html -d altcap.io

Follow the instructions and add an email address

Check your certificate
----------------------

::

    sudo ls -l /etc/letsencrypt/live/altcap.io
    # and check it will update
    sudo letsencrypt renew --dry-run --agree-tos
    sudo letsencrypt renew

Setup a renew cronjob for your new SSL certificate
--------------------------------------------------

::

    sudo crontab -e

Add this line to run the job every 6 hours on the 16th minute

::

    16 */6 * * *  /usr/bin/letsencrypt renew >> /var/log/letsencrypt-renew.log

    CTRL+X to save (^X Exit)

::

    # check your crontab
    sudo crontab -l

Generate Strong Diffie-Hellman Group cert
-----------------------------------------

::

    sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048

Add SSL to Nginx settings
=========================

Make a copy of altcap.io just in case.

::

    cp altcap.io alcap.io.no.ssl

Edit altcap.io
--------------

::

    nano altcap.io

::

    ###### altcap.io ######
    server {
        listen 80;
        server_name altcap.io;
        #rewrite ^ https://$server_name$request_uri? permanent;
        rewrite ^ https://altcap.io$uri permanent;
        #
        root /var/www/altcap.io/public_html;
        # Add index.php to the list if you are using PHP
        index index.html index.htm;
        #
        location / {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            try_files $uri $uri/ =404;
        }
    }


    ###### altcap.io websockets


    upstream websockets {
        server localhost:8090;
    }


    ###### altcap.io ssl
    server {
        listen 443 ssl;
        #
        server_name altcap.io;
        #
        root /var/www/altcap.io/public_html;
        # Add index.php to the list if you are using PHP
        index index.html index.htm;
        #
        ssl_certificate /etc/letsencrypt/live/altcap.io/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/altcap.io/privkey.pem;
        #
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        ssl_dhparam /etc/ssl/certs/dhparam.pem;
        ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';
        ssl_session_timeout 1d;
        ssl_session_cache shared:SSL:50m;
        ssl_stapling on;
        ssl_stapling_verify on;
        add_header Strict-Transport-Security max-age=15768000;
        #
        # Note: You should disable gzip for SSL traffic.
        # See: https://bugs.debian.org/773332
        #
        # Read up on ssl_ciphers to ensure a secure configuration.
        # See: https://bugs.debian.org/765782
        #
        # Self signed certs generated by the ssl-cert package
        # Don't use them in a production server!
        #
        # include snippets/snakeoil.conf;
        #
        location / {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            try_files $uri $uri/ =404;
        }
        location ~ /ws/? {
            access_log off;
            proxy_pass http://websockets;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
    ###### altcap.io ######

    CTRL+X to save (^X Exit)

You have now setup an SSL secured web server with a WebSocket connected
to your local BitShares witness\_node (listening on port 8090 - see
`this
post <https://steemit.com/bitshares/@ihashfury/run-your-own-decentralised-exchange>`__
for more information) ###Update altcap.io www virtual host

::

    sudo cp altcap.io /etc/nginx/sites-available/altcap.io

Restart Nginx
-------------

::

    sudo service nginx restart

Now you have setup an SSL web server. More information on SSL setup can
be found here. `DigitalOcean letsencrypt
SSL <https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-14-04>`__
`LetsEncrypt <https://letsencrypt.org/>`__
`CertBot <https://certbot.eff.org/>`__

Install BitShares web gui
=========================

Install NVM (Node Version Manager)
----------------------------------

::

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash

exit bash (terminal) and reconnect

::

    ssh bitshares@altcap.io
    nvm install v5
    nvm use v5

Download BitShares gui
----------------------

::

    git clone https://github.com/bitshares/bitshares-2-ui.git

Setup light wallet
------------------

::

    cd /bitshares-2-ui/

Before building the light wallet, you need to edit **SettingsStore.js**
line 19 and 99 wss WebSocket.

::

    nano /bitshares-2-ui/dl/src/stores/SettingsStore.js

Change line 19

::

                connection: "wss://altcap.io/ws",

Add your new wss WebSocket to line 99

::

                connection: [
                    "wss://altcap.io/ws",
                    "wss://bitshares.openledger.info/ws",
                    "wss://bitshares.dacplay.org:8089/ws",
                    "wss://dele-puppy.com/ws",
                    "wss://valen-tin.fr:8090/ws"

    CTRL+X to save (^X Exit)

::

    ###Setup install
    cd dl; npm install
    cd ../web; npm install

Link web root to gui build folder
---------------------------------

::

    ln -s ~/public_html/ dist

Build light wallet
------------------

::

    npm run build

You have now created another Access point to the BitShares Decentralised
Exchange. **The more the merrier.** Please remember to check your
firewall and SSH is up-to-date and configured correctly. DigitalOcean
has
`firewall <https://www.digitalocean.com/community/tags/firewall?type=tutorials>`__
and `Secure
SSH <https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2>`__
tutorials for more help.

SSL test
========

You can also check how secure your new web server is compared to your
bank. Add this link to a web browser and wait for the results.

::

    https://www.ssllabs.com/ssltest/analyze.html?d=altcap.io

Now change altcap.io to your local bank's domain name in the link and
post the results below. >\ **Thank you
`svk <https://steemit.com/@svk>`__ for your advice and guidance.**

.. |BitShares| image:: https://i.imgsafe.org/7596ada.jpg
