*********************
Setting up the Faucet
*********************

In order to allow people that do not have funds yet to enter the system,
we need to setup a faucet. Here, we will also use `mina` as our
**deployment tool** for a productive installation.

Installation of Dependencies
############################

we first install every other dependency that is needed and not yet
installed

.. code-block:: sh

    sudo apt-get install mysql-server libmysqlclient-dev
    # put a master password for mysql

We also need to install a decently recent version of Ruby:

.. code-block:: sh

    cd
    git clone git://github.com/sstephenson/rbenv.git .rbenv
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc
    exec $SHELL

    git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
    echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
    exec $SHELL

    git clone https://github.com/sstephenson/rbenv-gem-rehash.git ~/.rbenv/plugins/rbenv-gem-rehash

    sudo rbenv install 2.2.3
    sudo rbenv global 2.2.3
    sudo gem install bundler

Get the Source
##############

One implementation of a faucet can be downloaded from Cryptonomex:

.. code-block:: sh

    git clone https://github.com/cryptonomex/faucet
    cd faucet
    sudo bundle   # ignore warnings


Configuration
#############

We need to configure

* the faucet itself,
* rails API secrets,
* database access,
* and the deployment tool, mina.

Faucet
******

All required settings are in `config/faucet.yml` which has an example
file:

.. code-block:: sh

    cp config/faucet-example.yml config/faucet.yml 
    vim config/faucet.yml 

Rails API
*********

Rails needs to know a secret for their internals, we can get a new one
with `rake secret`. Put it into the corresponding lines in the config
file.

.. code-block:: sh

    cp config/secrets-example.yml config/secrets.yml
    rake secret
    vim config/secrets.yml 

Database Access
***************

The default configuration for the database access expects an empty root
password for MySQL. Hence, if you have set a different password, you
need to provide it here.

.. code-block:: sh

    vim config/database.yml 

We generate our databases with:

.. code-block:: sh

    rake db:create; rake db:migrate; rake db:seed
    RAILS_ENV=production bundle exec rake db:create db:schema:load

Mina deployment
***************

Mina is used to deploy the faucet properly and move all the required
files over to the production machine (may be the same machine).

.. code-block:: sh

   cp config/deploy-example.yml config/deploy.yml
   vim config/deploy.yml

Make sure to add your ssh-pub key to your authorized file so that mina
can deploy to the corrseponding machine.

Now, all we need to do is create the public directly that is served and
copy/link the configuration file to the deployment's shared files:

.. code-block:: sh
   
   sudo mkdir /www
   sudo chown -R gph:gph /www

   mina setup
   ln -s $HOME/faucet/config/faucet.yml /www/shared/config/
   ln -s $HOME/faucet/config/secrets.yml /www/shared/config/
   ln -s $HOME/faucet/config/database.yml /www/shared/config/

We deploy mina and the wallet with:

.. code-block:: sh

   ln -s $HOME/graphene-ui/web/dist $HOME/faucet/public/wallet
   mina deploy
   mina wallet

Update wallet
*************

If you have modified something in the wallet, you need to recompile the
Javascript/HTML files and re-deploy the wallet with:

.. code-block:: sh

   # re-compile
   cd ~/graphene-ui/web
   git pull # fetch changes from origin
   npm run build

   # deploy
   cd ~/faucet
   mina wallet
