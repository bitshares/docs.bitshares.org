*********
Full Node
*********
We here distringuish between full nodes (a.k.a. *non-block producing* witness
nodes) and *block producing* witness nodes. Both are implemented by the same
executable but the latter requires some additional parameters to be defined and
the corresponding witness voted active by the shareholders.

Both represent nodes in the network that verify all transactions and blocks
against the current state of the overall network. Hence, we recommend all
service providers to run an maintain their own **full nodes** for reliability
and security reasons.

Full Nodes
##########

The full node is launched according to:::

    ./programs/witness_node/witness_node

It takes an optional `--data-dir` parameter to define a working and data
directory to store the configuration, blockchain and local databases (defaults
to ``witness_node_data_dir``. Those will be automatically created with default
settings if they don't exist locally set.

Configuration
#############

The configuration file ``config.ini`` in your data directory is commented and
contains the following essential settings:::

* ``p2p-endpoint``:
    Endpoint for P2P node to listen on
* ``seed-node``:
    P2P nodes to connect to on startup (may specify multiple times)
* ``checkpoint``:
    Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.
* ``rpc-endpoint``:
    Endpoint for websocket RPC to listen on (e.g. ``0.0.0.0:8090``)
* ``rpc-tls-endpoint``:
    Endpoint for TLS websocket RPC to listen on
* ``server-pem``:
    The TLS certificate file for this server
* ``server-pem-password``:
    Password for this certificate
* ``genesis-json``:
    File to read Genesis State from
* ``api-access``:
    JSON file specifying API permissions
* ``enable-stale-production``:
    Enable block production, even if the chain is stale. (unless for private testnets should be ``false``)
* ``required-participation``:
    Percent of witnesses (0-99) that must be participating in order to produce blocks
* ``allow-consecutive``:
    Allow block production, even if the last block was produced by the same witness.
* ``witness-id``:
    ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)
* ``private-key``:
    Tuple of ``[PublicKey, WIF private key]`` (may specify multiple times)
* ``track-account``:
    Account ID to track history for (may specify multiple times)
* ``bucket-size``:
    Track market history by grouping orders into buckets of equal size measured
    in seconds specified as a JSON array of numbers
* ``history-per-size``:
    How far back in time to track history for each bucket size, measured in the number of buckets (default: 1000)

.. note:: Folders and files are considered to be relative to the working
          directory (i.e. the directory from which the executables are launched from)

Enabling Remote Procedure Calls (RPC)
#####################################

In order to allow RPC calls for blockchain operations you need to modify the
following entry in the configuration file:::

    rpc-endpoint = 0.0.0.0:8090

This will open the port 8090 for global queries only. Since the witness node
only maintains the blockchain and (unless you are an actively block producing
witness) no private keys are involved, it is safe to expose your witness to the
internet.

Restarting the witness node
###########################

When restarting the witness node, it may be required to append the
`--replay-blockchain` parameter to regenerate the local (in-memory) blockchain
state.

Enabling Block Production
##########################

For block production, the required parameters to be defined are 

* ``witness-id`` and
* ``private-key`` as a pair of public key and wif private key.

The witness-id and public key can be obtain via:::

    unlocked >>> get_witness <accountname>
    {
      [...]
      "id": "1.6.10",
      "signing_key": "GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8",
      [...]
    }

Assuming we want to maintain the witness with id ``1.6.10``, the corresponding
setting would be:::

    witness-id = "1.6.10"

The required private keys can be exported from most wallets (e.g.
``dump_private_keys``) for configuration according to:::

    private-key = ["BTS7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8","5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"]
