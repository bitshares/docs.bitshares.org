*********************
Private Testnet Howto
*********************

Some developers may want to deploy their own graphene blockchain locally
for governance, and speed reasons. This page shows how this can be done.

Prerequisites
#############

We assume that you have both ``witness_node`` and ``cli_wallet`` already
compliled (or downloaded from `the offical
respository <https://github.com/bitshares/bitshares-2/releases/latest>`__).

Folder structure
################

Create a new folder (we will refer to it as ``[Testnet-Home]``) in any
location you like and copy ``witness_node`` and ``cli_wallet`` there.
The ``[Testnet-Home]`` folder will contain all files and folders related
to the testnet.

Open a *Command Prompt* window and switch the current directory to
``[Testnet-Home]``.

The genesis file
#####################

The genesis file defines the initial state of the network.

Default genesis
***************

The graphene code base has a default genesis block integrated that has
all witnesses, committee members and funds and a single account called
``nathan`` available from a single private key:

    5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

See below how to use this key, or go ahead to learn about how to define
your own genesis file    

Customization of the genesis file
*********************************

We create a new genesis json file named ``my-genesis.json`` by running
this command:

::

    $ witness_node --create-genesis-json=my-genesis.json

The ``my-genesis.json`` file will be created in the ``[Testnet-Home]``
folder. Once this task is done, the witness node will terminate on its
own.

If you want to customize the network's initial state, edit the newly
created ``my-genesis.json`` file. This allows you to control things such
as: 

* The accounts that exist at genesis, their names and public keys
* Assets and their initial distribution (including core asset) 
* The initial values of chain parameters (including fees) 
* The account signing keys of the init witnesses (or in fact any account at all).

Get the blockchain id
#####################

The blockchain id is a hash of the genesis state. All transaction
signatures are only valid for a single blockchain id. So editing the
genesis file will change your blockchain id, and make you unable to sync
with all existing chains (unless one of them has exactly the same
genesis file you do).

Run this command:

::

    witness_node --data-dir=data   # to use the default genesis, or
    witness_node --data-dir=data --genesis-json=my-genesis.json   # your own genesis block

and when a message like this shows up:

::

    3501235ms th_a main.cpp:165 main] Started witness node on a chain with 0 blocks.
    3501235ms th_a main.cpp:166 main] Chain ID is 8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824

... it means the initialization is complete.  Use ``ctrl-c`` to close
the witness node.

As a result, you should get two items: 

* A directory named ``data`` has been created with a file named ``config.ini`` located in it. 
* Your blockchain id is now known - it's displayed in the message above.

.. note:: Note that your blockchain id will be different than the one
          used in the above example. Copy this id somewhere as you will
          be needing it later on.

Witness configuration
#####################

Open the ``[Testnet-Home]/data/config.ini`` file in your favorite text
editor, and set the following settings, uncommenting them if necessary:

::

    rpc-endpoint = 127.0.0.1:8090
    genesis-json = my-genesis.json  
    enable-stale-production = true 

Also, locate this entry in the ``config.ini`` file:

::

    # ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)

... and add the following entries:

::

    witness-id = "1.6.1"
    witness-id = "1.6.2"
    witness-id = "1.6.3"
    witness-id = "1.6.4"
    witness-id = "1.6.5"
    witness-id = "1.6.6"
    witness-id = "1.6.7"
    witness-id = "1.6.8"
    witness-id = "1.6.9"
    witness-id = "1.6.10"
    witness-id = "1.6.11"

The above list authorizes the witness node to produce blocks on behalf
of the listed witness ids. Normally each witness would be on a different
node, but for the purpose of this private testnet, we will start out
with all witnesses signing blocks on a single node. The private keys
for all those witness ids (needed to sign blocks) are already supplied
in the ``config.ini`` file:

::

    # Tuple of [PublicKey, WIF private key] (may specify multiple times)
    private-key = ["BTS6MRyA...T5GDW5CV","5KQwrPb...tP79zkvFD3"]

Start block production
######################

This is the crucial moment - you are about to produce the very first
blocks of your private blockchain. Just run the witness node with this
command:

::

    witness_node --data-dir=data 

and your block production should start at this stage. You should see
this big message:

::

    ********************************
    *                              *
    *   ------- NEW CHAIN ------   *
    *   - Welcome to Graphene! -   *
    *   ------------------------   *
    *                              *
    ********************************

and subseqently further messages indicating the successfull creation
of blocks:

::

    2322793ms th_a  main.cpp:176     main    ] Started witness node on a chain with 0 blocks.
    2322794ms th_a  main.cpp:177     main    ] Chain ID is 8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824
    2324613ms th_a  witness.cpp:185  block_production_loo ] Generated block #1 with timestamp 2016-01-21T22:38:40 at time 2016-01-21T22:38:40
    2325604ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived
    2342604ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived
    2343609ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived
    2344604ms th_a  witness.cpp:185  block_production_loo ] Generated block #2 with timestamp 2016-01-21T22:39:00 at time 2016-01-21T22:39:00
    2345605ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived
    2349616ms th_a  witness.cpp:185  block_production_loo ] Generated block #3 with timestamp 2016-01-21T22:39:05 at time 2016-01-21T22:39:05
    2350602ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived
    2353612ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived
    2354605ms th_a  witness.cpp:185  block_production_loo ] Generated block #4 with timestamp 2016-01-21T22:39:10 at time 2016-01-21T22:39:10
    2355609ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived
    2356609ms th_a  witness.cpp:194  block_production_loo ] Not producing block because slot has not yet arrived

CLI Usage
#########

We are now ready to connect the CLI to your testnet witness node.
Keep your witness node running and in another *Command Prompt* window
run this command:

::

    cli_wallet --wallet-file=my-wallet.json --chain-id=8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824 --server-rpc-endpoint=ws://127.0.0.1:11011

.. note:: Make sure to replace the above blockchain id
          ``8b7bd36a...4294824`` with your own blockchain id. The
          blockchain id passed to the CLI needs to match the id
          generated and used by the witness node.

If you get the ``set_password`` prompt, it means your CLI has
successfully conected to the testnet witness node.

Create a new wallet
*******************

Fist you need to create a new password for your wallet. This password is
used to encrypt all the private keys in the wallet. For this tutorial we
will use the password ``supersecret`` but obviously you are free to come
up with your own combination of letters and numbers.  Use this command
to create the password:

::

    >>> set_password supersecret

Now you can unlock the newly created wallet:

::

    unlock supersecret

Gain access to the genesis stake
********************************

In Graphene, balances are contained in accounts. To import an account
into your wallet, all you need to know its name and its private key.  We
will now import into the wallet an account called ``nathan`` using the
``import_key`` command:

::

    import_key nathan 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

.. note:: Note that ``nathan`` happens to be the account name defined in
          the genesis file. If you had edited your ``my-genesies.json``
          file just after it was created, you could have put a different
          name there.  Also, note that ``5KQwrPbwdL...P79zkvFD3`` is the
          private key defined in the ``config.ini`` file.

Now we have the private key imported into the wallet but still no funds
assocciated with it. Funds are stored in genesis balance objects. These
funds can be claimed, with no fee, using the ``import_balance`` command:

::

    import_balance nathan ["5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"] true

As a result, we have one account (named ``nathan``) imported into the
wallet and this account is well funded with BTS as we have claimed the
funds stored in the genesis file. You can view this account by using
this command:

::

    get_account nathan

and its balance by using this command:

::

    list_account_balances nathan

Create another account
**********************

We will now create another account (named ``alpha``) so that we can
transfer funds back and forth between ``nathan`` and ``alpha``.

Creating a new account is always done by using an existing account - we
need it because someone (i.e. the registrar) has to fund the
registration fee. Also, there is the requirement for the registrar
account to have a lifetime member (LTM) status. Therefore we need to
upgrade the account ``nathan`` to LTM, before we can proceed with
creating other accounts. To upgrade to LTM, use the ``upgrade_account``
command:

::

    upgrade_account nathan true

.. note:: Due to a known `caching
          issue <https://github.com/cryptonomex/graphene/issues/530>`__,
          you need to restart the CLI at this stage as otherwise it will
          not be aware of ``nathan`` having been upgraded. Stop the CLI
          by pressing ``ctrl-c`` and start it again by using exactly the
          same command as before, i.e.

::

    cli_wallet --wallet-file=my-wallet.json --chain-id=8b7bd36a146a03d0e5d0a971e286098f41230b209d96f92465cd62bd64294824 --server-rpc-endpoint=ws://127.0.0.1:11011

Verify that ``nathan`` has now a LTM status:

::

    get_account nathan

In the response, next to ``membership_expiration_date`` you should see
``1969-12-31T23:59:59``. If you get ``1970-01-01T00:00:00`` something is
wrong and ``nathan`` has not been successfully upgraded.

We can now register an account by using ``nathan`` as registrar. But
first we need to get hold of the public key for the new account. We do
it by using the ``suggest_brain_key`` command:

::

    suggest_brain_key

And the resposne should be something similar to this:

::

    suggest_brain_key
    {
      "brain_priv_key": "MYAL SOEVER UNSHARP PHYSIC JOURNEY SHEUGH BEDLAM WLOKA FOOLERY GUAYABA DENTILE RADIATE TIEPIN ARMS FOGYISH COQUET",
      "wif_priv_key": "5JDh3XmHK8CDaQSxQZHh5PUV3zwzG68uVcrTfmg9yQ9idNisYnE",
      "pub_key": "BTS78CuY47Vds2nfw2t88ckjTaggPkw16tLhcmg4ReVx1WPr1zRL5"
    }

The ``create_account_with_brain_key`` command allows you to register an
account using brain key and will automatically import the corresponding
private key.

::

    create_account_with_brain_key "Brain ... key" <accountname> nathan nathan true

Transfer funds between accounts
-------------------------------

As a final step, we will transfer some money from ``nathan`` to
``alpha``. For that we use the ``transfer`` command:

::

    transfer nathan alpha 2000000000 BTS "here is some cash" true

The text ``here is some cash`` is an arbitrary memo you can attatch to a
transfer. If you don't need it, just use ``""`` instead.

And now you can verify that ``alpha`` has indeed received the money:

::

    list_account_balances alpha
