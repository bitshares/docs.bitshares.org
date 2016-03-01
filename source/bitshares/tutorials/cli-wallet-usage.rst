*********************************
How to Run and Use the Cli-Wallet
*********************************

The Cli-Wallet is used to interact with the blockchain. Everything that
adds new data to the blockchain requires a signature from a private key.
These signed transactions can be produced by the cli-wallet.

Download and Install the Witness Node
#####################################

We first need to download, (compile) and install the cli-wallet. All
that is needed is described here:

.. toctree::
   :maxdepth: 2
 
   ../installation/index

To reduce compilation time, you can tell the compile infrastructure to
only compile the witness node by running.

.. code-block:: sh

   $ make cli-wallet

instead of

.. code-block:: sh

   $ make

Executing the cli-wallet
########################

All it takes for the cli-wallet to run is a trusted **public API
server** to interface with the blockchain. These public API servers are
run by businesses and :doc:`individuals <full-node-usage>`. In this
example, we use the public API node of OpenLedger and connect via
secured websocket connection:

::

    wss://bitshares.openledger.info/ws

.. code-block:: sh

    ./programs/cli_wallet/cli_wallet -s wss://bitshares.openledger.info/ws

This will open the cli-wallet and unless you already have a local
wallet, will ask you to provide a passphrase for your local wallet.
Once a wallet has been created (default wallet file is ``wallet.json``),
it will prompt with

::

    locked >>> 

The wallet can be unlocked by providing the passphrase:

.. note:: The passphrase is given in clear text and is echoed by the
          wallet!

::

    locked >>> unlock "supersecretpassphrase"
    null
    unlocked >>> 

After this point, you can issue :doc:`any command available to the
cli-wallet <../../api/wallet-api>` or construct your :doc:`own
transaction manually <construct-transaction>`.

You can get more detailed information either by pressing `Tab`, twice,
or by issuing ``help``.
Detailed explanations for most calls are available via

::

    unlocked >> gethelp <command>

.. note:: Many calls have a obligatory ``broadcast``-flag as last
          argument. If this flag is ``False``, the wallet will construct
          and sign, but **not** broadcast the transaction. This can be
          very useful for a cold storage setup or to verify
          transactions.

Opening RPC port
################

The cli-wallet can open a RPC port so that you can interface your
application with it. You have the choices of

* websocket RPC via the ``-r`` parameter, and
* HTTP RPC via the ``-H`` parameter:

.. code-block:: sh

    ./programs/cli_wallet/cli_wallet -s wss://bitshares.openledger.info/ws -H 127.0.0.1:8092 -r 127.0.0.1:8093
