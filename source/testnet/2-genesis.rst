*********************
Genesis Configuration
*********************

We will create a genesis file named ``my-genesis.json`` that contains
the genesis block:

.. code-block:: sh

   mkdir -p genesis
   programs/witness_node/witness_node --create-genesis-json genesis/my-genesis.json
   vim genesis/my-genesis.json

The ``my-genesis.json`` is the initial state of the network.

Genesis editing
***************

If you want to customize the network's initial state, edit ``my-genesis.json``.
This allows you to control things such as:

- The accounts that exist at genesis, their names and public keys
- Assets and their initial distribution (including core asset)
- The initial values of chain parameters
- The account / signing keys of the ``init`` witnesses (or in fact any account at all).

The chain ID is a hash of the genesis state.  All transaction signatures
are only valid for a single chain ID.  So editing the genesis file will
change your chain ID, and make you unable to sync with all existing
chains (unless one of them has exactly the same genesis file you do).

For testing purposes, the ``--dbg-init-key`` option will allow you to
quickly create a new chain against any genesis file, by replacing the
witnesses' block production keys.


Embedding the Genesis block
***************************

Embedded genesis is a feature designed to make life easier for consumers
of pre-compiled binaries, in exchange for slight, optional complication
of the process for producing binaries.

We recompile to include the genesis block:

.. code-block:: sh

   make clean
   find . -name "CMakeCache.txt" | xargs rm -f
   find . -name "CMakeFiles" | xargs rm -Rf
   cmake -DGRAPHENE_EGENESIS_JSON="$(pwd)/genesis/my-genesis.json" -DCMAKE_BUILD_TYPE=Release .

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

