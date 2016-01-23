***********************
Initializing Blockchain
***********************

Initializing the genesis block
##############################

We initialize teh blockchain an generate our first blocks.

The ``--enable-stale-production`` flag tells the ``witness_node`` to
produce on a chain with zero blocks or very old blocks.  We specify the
``--enable-stale-production`` parameter on the command line as we will
not normally need it (although it can also be specified in the config
file).

.. code-block:: sh

   programs/witness_node/witness_node --genesis-json genesis.json \
                                      --enable-stale-production \
                                      --data-dir data/testnet

We will already see our chain id:::

    Started witness node on a chain with 0 blocks.
    Chain ID is cf307110d029cb882d126bf0488dc4864772f68d9888d86b458d16e6c36aa74b

.. note:: If other witness produces blocks and witness participation is
          high enough, subsequent runs which connect to an existing
          witness node over the p2p network, or which get blockchain
          state from an existing data directory, need not have the
          ``--enable-stale-production`` flag.

Setting up block production
###########################

Let's create a very basic configuration file in `data/testnet/config.ini`:

::

    $ mkdir -p data/testnet
    $ cim data/testnet/config.ini

All we put into the configuration file is the ids and the keys for the
witnesses so that we can start producing blocks 

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
   # For each witness, add pubkey and private key:
   private-key = ["GPH6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]
   private-key = [<pubkey>,<privkey>]

This authorizes the ``witness_node`` to produce blocks on behalf of the
listed ``witness-id``'s, and specifies the private key needed to sign
those blocks.  Normally each witness would be on a different node, but
for the purposes of this testnet, we will start out with all witnesses
signing blocks on a single node.

.. note:: The setting ``rpc-endpoint = 0.0.0.0:11011`` will open up
          the RPC-port `11011` to connect a cli-wallet or web wallet to
          it. With the ``p2p-endpoint = 0.0.0.0:11010`` being accessible
          from the internet, this node can be used as seed node.

Embedding the Genesis block (optional)
**************************************

Now that we have the blockchain established and the used correct genesis
block, we can have it embedded into the binaries directly. For that
reasons we have moved it into the root directory and called it
``genesis.json`` for the default compile toolchain to catch it
automatically. We recompile to include the genesis block with:

.. code-block:: sh

   make clean
   find . -name "CMakeCache.txt" | xargs rm -f
   find . -name "CMakeFiles" | xargs rm -Rf
   cmake -DCMAKE_BUILD_TYPE=Release .

Deleting caches will reset all ``cmake`` variables, so if you have used
instructions like :doc:`../installation/Build` which tells you to
set other ``cmake`` variables, you will have to add those variables
to the ``cmake`` line above.

Embedding the genesis copies the entire content of genesis block
into the ``witness_node`` binary, and additionally copies the chain ID
into the ``cli_wallet`` binary.  Embedded genesis allows the following
simplifications to the subsequent instructions:

* You need **not** specify the genesis file on the witness node command
  line, or in the witness node configuration file.
* You need **not** specify the chain ID on the ``cli_wallet`` command line
  when starting a new wallet.
