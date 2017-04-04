***************************************
Step-By-Step Instructions for Exchanges
***************************************

We here describe how to interface your exchange with BitShares step-by-step. We
will link to a more detailed description where appropriate.

Installation
############

In this step-by-step instruction we assume you have successfully built from the
sources according to:

* :doc:`/bitshares/installation/Build`

Running Daemons and Wallet
##########################

For security reasons we will run two daemons and a wallet according to these
diagram:

.. graphviz::

   digraph foo {
    rankdir=LR;
    ranksep=0.5;
    nodesep=0.1;
    overlap=false;
    splines=ortho;

    node [shape=box];
    node [fontname=Verdana,fontsize=12]
    node [style=filled]
    node [fillcolor="#EEEEEE"]
    node [color="#EEEEEE"]
    edge [color="#31CEF0", dir=back, fontsize=9, fontname=Verdana]

    "P2P network" -> "Trusted Full Node" [dir="both"]
    "Trusted Full Node" -> "Delayed Full Node" -> "Deposit API"
    "Trusted Full Node" -> "Wallet" -> "Withdraw API"
   }

In this tutorial we will run all deamons and the wallet on the same machine and
use different ports to distinguish them:

* port ``8090``: trusted full node
* port ``8091``: delayed node
* port ``8092``: wallet

:doc:`Read more details <../network-setup>`

Trusted Full Node
*****************

The trusted full node is your entry point to the BitShares P2P network. It will
hold the blockchain, connect to other peers, and will receive new blocks in
*real-time*.

.. code-block:: sh

    ./programs/witness_node/witness_node --data-dir=trusted_node/ --rpc-endpoint="127.0.0.1:8090"

.. note:: Until the genesis block is integrated into the binary/souces, you may
   additionally need to download the genesis block from github and add the
   parameter ``--genesis-json <genesis.json>``. (See `Release Page`_)

.. note:: Unless the seed nodes are encoded into the binary, you may need to add
   a known seed node with ``-s xxx.xxx.xxx.xxx:yyy`` in order to initially
   connect to the P2P network. (See `Release Page`_)

.. _Release Page: https://github.com/cryptonomex/graphene/releases/

Delayed Node
*****************

The delayed full node node will provide us with a delayed and several times
confirmed and verified blockchain. All transactions that are confirmed by the
delayed node are **irreversible**.

.. code-block:: sh

    ./programs/delayed_node/delayed_node --trusted-node="127.0.0.1:8090" \
                                         --rpc-endpoint="127.0.0.1:8091"
                                         -d delayed_node \
                                         -s "0.0.0.0:0" \
                                         --p2p-endpoint="0.0.0.0:0" \
                                         --seed-nodes "[]"

We will use this node for notifications of customer deposits.

Wallet
*****************

The wallet will be used to transfer assets to the customers. It connects to the
trusted full node and has spending privileges for the hot wallet.

.. code-block:: sh

    ./programs/cli_wallet/cli_wallet --server-rpc-endpoint="ws://127.0.0.1:8090" \
                                     --rpc-http-endpoint="127.0.0.1:8092"

Query blockchain for required data
###################################

We now use the open ``cli_wallet`` to issue transfers and query the blockchain
for more information. First of all, we create a new wallet and set a pass phrase:::

    >>> set_password <password>

.. New account
.. ***********
.. In order to create a new account for your exchange, you need a registrar with
.. an online wallet. Once you created your account with the help of the registrar
.. you can export your *brainkey* from the Wallet Management Console
.. (`Settings->Wallets->Backup Brainkey`)
.. 
.. In the BitShares 2.0 cli_wallet, you can recreate your wallet with that brainkey
.. by issuing:

Existing BitShares 1 Account
****************************
*We assume that you already have an account on the BitShares blockchain and show
how to export it from the BitShares 1 client.*

We first get the account statistics ID (``2.6.*``) of the deposit account to
monitor deposits, the memo key for later decoding of memos and the active key
for being able to spend funds of that accounts:::

    >>> get_account <account-name>
    {
     [...]
     "active": {
        "key_auths": [[
            "<active_key>",
            1
     ] ], },
     [...]
     "memo_key": "<memo_key>",
     [...]
     "statistics": "<statistics>",
     [...]
    }

We now need to export the corresponding private keys from BitShares 1.0 and
import the keys into the ``cli_wallet``:::

    BitShares 1: >>> wallet_dump_private_key <memo_key>
                 "<memo_private_key>"
    BitShares 1: >>> wallet_dump_private_key <active_key>
                 "<active_private_key>"

Import the active key into BitShares 2 wallet:::

    BitShares 2: >>> import_key <account-name> <active_private_key>

This gives access to the funds stored in ``<account-name>``. We will need the
memo private key later when watching deposits.

Claiming BitShares 1.0 funds
****************************
We now describe how to claim your funds from the Bitshares 1 blockchain so you
can use them in BitShares 2.

For **Coldstorage** and plain private keys, we recommend to use::

    >>> import_balance <accountname> <private_key> false

to import all balances that are locked in the private key into the account named
``<accountname``. As long as the last argument is ``false`` the transaction will
only be printed for audit and not be broadcasted or executed. **Only** after
changing ``false`` to ``true`` will the balances be claimed!

For your hot wallet (or any other active wallet running in the BitShares 1
client) we recommend to use the GUI to claim your funds from hot wallet as
described :doc:`here </bitshares/migration/howto-importing-wallet>`.

Watching Deposits with Python
#############################

For watching deposits, we recommend pybitshares' *Notify* module. The
full documentation is available on `pybitshares.com
<http://pybitshares.com>`_.

Executing Transfers for Withdrawals
###################################

For transfering funds, we recommend pybitshares. This python module
enables all features required to operated on/with BitShares. The full
documentation is available on `pybitshares.com
<http://pybitshares.com>`_.
