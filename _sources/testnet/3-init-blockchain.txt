***********************
Initializing Blockchain
***********************

Let the witness generate a new data directly `data/testnet`:

.. code-block:: sh

   programs/witness_node/witness_node --data-dir data/testnet
   CTRL+C

Several messages will go to the console.  When you see messages like these:::

    3501235ms th_a main.cpp:165 main ] Started witness node on a chain with 0 blocks.
    3501235ms th_a main.cpp:166 main ] Chain ID is cf307110d029cb882d126bf0488dc4864772f68d9888d86b458d16e6c36aa74b

the initialization is complete, and you can press Ctrl+C to quit the witness node.

.. note:: Initialization will complete nearly instantaneously with the
          tiny example genesis, unless you added a ton of balances.

The reason for running the witness node:  It tells us the chain ID,
and it initializes the ``data/testnet`` directory.

Starting block production
#########################

Let's edit `data/testnet/config.ini`:

::

   p2p-endpoint = 0.0.0.0:11010
   rpc-endpoint = 0.0.0.0:11011

   # private-key = [<pubkey>,<privke>]
   # For each witness, add pubkey and private key:
   private-key = ["GPH6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"]

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

This authorizes the ``witness_node`` to produce blocks on behalf of the
listed ``witness-id``'s, and specifies the private key needed to sign
those blocks.  Normally each witness would be on a different node, but
for the purposes of this testnet, we will start out with all witnesses
signing blocks on a single node.

.. code-block:: sh

   programs/witness_node/witness_node --data-dir data/testnet --enable-stale-production

Note that we need not specify ``genesis.json`` on the command line, since
we now specify it in the config file. The ``--enable-stale-production``
flag tells the ``witness_node`` to produce on a chain with zero blocks or
very old blocks.  We specify the ``--enable-stale-production`` parameter
on the command line as we will not normally need it (although it can
also be specified in the config file).

Subsequent runs which connect to an existing witness node over the p2p
network, or which get blockchain state from an existing data directory,
need not have the ``--enable-stale-production`` flag.

.. note:: The setting ``rpc-endpoint = 0.0.0.0:11011`` will open up
          the RPC-port `11011` to connect a cli-wallet or web wallet to
          it. With the ``p2p-endpoint = 0.0.0.0:11010`` being accessible
          from the internet, this node can be used as seed node.
