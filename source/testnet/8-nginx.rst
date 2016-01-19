***************
Nginx Webserver
***************

We here use Nginx to deal with Ruby and provide access to the wallet
files and the faucet. We use `passenger` to do so which unfortunatelly
requires to compile nginx "manually". Passenger fortunatelly provides a
script that handles all the installation.

Setup
#####

.. code-block:: sh

   sudo apt-get install curl libcurl4-gnutls-dev 
   cd ~/faucet
   gem install passenger
   sudo passenger-install-nginx-module

After using the recommended settings and waiting for the script to
complete, we integrate nginx into our distribution via

.. code-block:: sh

   sudo ln -s /opt/nginx/ /usr/local/nginx
   sudo ln -s /opt/nginx/conf/ /etc/nginx

Configuration
##############

Nginx is configured using the freshly installed `nginx.conf` file:

.. code-block:: sh

   vi /opt/nginx/conf/nginx.conf 

We have set it to be:

::

    user gph;
    worker_processes  4;

    events {
        worker_connections  1024;
    }

    http {
        passenger_root /home/gph/.rbenv/versions/2.2.3/lib/ruby/gems/2.2.0/gems/passenger-5.0.23;
        passenger_ruby /home/gph/.rbenv/versions/2.2.3/bin/ruby;
        passenger_max_request_queue_size 1000;

        include       mime.types;
        default_type  application/octet-stream;

        access_log  /www/logs/access.log;
        error_log  /www/logs/error.log;
        log_not_found off;

        sendfile        on;
        #tcp_nopush     on;

        keepalive_timeout  65;

        gzip  on;

        server {
            listen 80;
            server_name localhost;

            location ~ ^/[\w\d\.-]+\.(js|css|dat)$ {
                root /www/current/public/;
                try_files $uri /wallet$uri =404;
            }

            location / {
                passenger_enabled on;
                root /www/current/public/;
            }

        }

    }

.. note:: The parameters `passenger_root` and `passenger_ruby` may be
          different in your setup. Please compare with the default
          `nginx.conf` file to identify the proper directories.

Running nginx as serice
#######################

We use a nginx serice script and can install it according to: 

.. code-block:: sh

   sudo wget https://raw.github.com/JasonGiedymin/nginx-init-ubuntu/master/nginx -O /etc/init.d/nginx
   sudo chmod +x /etc/init.d/nginx
   sudo update-rc.d -f nginx defaults

After that, nginx can be launched with

.. code-block:: sh

   sudo service nginx start
