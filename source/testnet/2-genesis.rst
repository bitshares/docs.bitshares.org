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
