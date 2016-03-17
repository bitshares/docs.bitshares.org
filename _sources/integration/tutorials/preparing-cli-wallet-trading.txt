**************************************
Howto prepare a CLI wallet for trading
**************************************

The CLI wallet is used to interact with the blockchain. Everything that
adds new data to the blockchain requires a signature from a private key.
These signed transactions can be produced by the CLI wallet.

Download and Installation
#########################

For most graphene-based blockchain projects, there should be a separated
``cli-tools`` download available for many platforms. If not, the
CLI wallet can be compile manually via

.. code-block:: sh

    make cli_wallet

Executing the cli-wallet
########################

All it takes for the cli-wallet to run is a trusted **public API
server** to interface with the blockchain. These public API servers are
run by businesses and :doc:`individuals <../../bitshares/tutorials/full-node-usage>`:

.. include:: ../public-full-nodes.rst

We can let the wallet know which API server to use by:

.. code-block:: sh

    ./programs/cli_wallet/cli_wallet --server-rpc-endpoint=<URL> -H 127.0.0.1:8092 -r 127.0.0.1:8093

The cli-wallet will open two RPC ports so that you can interface your
application with it. You have the choices of

* websocket RPC via the ``-r`` parameter, and
* HTTP RPC via the ``-H`` parameter:

The command above will open the cli-wallet and, unless you already have
a local wallet, will ask you to provide a passphrase for your local
wallet.  Once a wallet has been created (default wallet file is
``wallet.json``), it will prompt with

::

    locked >>> 


In order for the wallet to be able to sign trading orders, you need to
unlock it by providing the passphrase:

.. note:: The passphrase is given in clear text and is echoed by the
          wallet!

::

    locked >>> unlock "supersecretpassphrase"
    null
    unlocked >>> 

After this point, you can issue :doc:`any command available to the
cli-wallet <../../api/wallet-api>` or construct your :doc:`own
transaction manually <../../bitshares/tutorials/construct-transaction>`.

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
