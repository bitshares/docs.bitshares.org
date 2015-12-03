*******************************
Howto Become an Active Witness
*******************************

This document serves as an introduction on how to become an actively
block producing witness in in the BitShares2.0 network. We will create,
configure and run a witness node in the following steps:

-  create a wallet for the testnet
-  import an account and funds
-  upgrade our account to a lifetime member
-  register a new witness
-  upvote the witness with our funds
-  sign blocks

Run the witness/full node on the network
########################################

We first run the :doc:`../../integration/apps/node` without block production and
connect it to the P2P network with the following command:

::

    $ programs/witness_node/witness_node --rpc-endpoint 127.0.0.1:8090

The argument ``--rpc-endpoint 127.0.0.1:8090`` opens up a RPC port ``8090`` for
connections from localhost.

Creating a wallet
#################

We now open up the :doc:`../../integration/apps/cliwallet` and connect to our
plain and stupid :doc:`../../integration/apps/node`:

.. code-block:: sh

    programs/cli_wallet/cli_wallet -s ws://127.0.0.1:8090

First thing to do is setting up a password for the newly created wallet
prior to importing any private keys:

::

    >>> set_password <password>
    null
    >>> unlock <password>
    null

Wallet creation is now done.

Basic Account Management
########################

We can import the account name (owner and active keys) to be able to access our
funds in BitShares 2.0:

::

    >>> import_key <accountname> <owner wif key>
    true
    >>> import_key <accountname> <active wif key>
    true
    >>> list_account_balances <accountname>
    XXXXXXX BTS

Since **only lifetime members can become witnesses**, you must first upgrade to
a lifetime member. This step costs the lifetime-upgrade fee which will
eventually cost about $100

::

    >>> upgrade_account <accountname> true
    [a transaction in json format]

Becoming a Witness
##################

To become a witness and be able to produce blocks, you first need to
create a witness object that can be voted in.

Note: If you want to experiment with things that require voting, be
aware that votes are only tallied once per day at the maintenance
interval. ``get_dynamic_global_properties`` tells us when that will be
in ``next_maintenance_time``. Once the next maintenance interval passes,
run ``get_global_properties`` again and you should see that your new
witness has been voted in.

Before we get started, we can see the current list of witnesses voted
in, which will simply be the ten default witnesses:

::

    >>> create_witness <accountname> "url-to-proposal" true
    {
      "ref_block_num": 139,
      "ref_block_prefix": 3692461913,
      "relative_expiration": 3,
      "operations": [[
      21,{
        "fee": {
          "amount": 0,
          "asset_id": "1.3.0"
        },
        "witness_account": "1.2.16",
        "url": "url-to-proposal",
        "block_signing_key": "PUBLIC KEY",
        "initial_secret": "00000000000000000000000000000000000000000000000000000000"
      }
    ]
      ],
      "signatures": [
      "1f2ad5597af2ac4bf7a50f1eef2db49c9c0f7616718776624c2c09a2dd72a0c53a26e8c2bc928f783624c4632924330fc03f08345c8f40b9790efa2e4157184a37"
      ]
    }

Our witness is registered, but it can't produce blocks because nobody
has voted it in. You can see the current list of active witnesses with
``get_global_properties``.

Now, we should vote our witness in. Vote all of the shares in our account
``<accountname>`` in favor of your new witness.

::

    >>> vote_for_witness <accountname> <accountname> true true
    [a transaction in json format]

We need wait until the next maintenance interval until we can see votes casted
for our witness.

Get the witness object using ``get_witness`` and take note of two
things. The ``id`` is displayed in ``get_global_properties`` when the
witness is voted in, and we will need it on the ``witness_node`` command
line to produce blocks. We'll also need the public ``signing_key`` so we
can look up the correspoinding private key.

Once we have that, run ``dump_private_keys`` which lists the public-key
private-key pairs to find the private key.

Warning: ``dump_private_keys`` will display your keys unencrypted on the
terminal, don't do this with someone looking over your shoulder.

::

    >>> get_witness <accountname>
    {
      [...]
      "id": "1.6.10",
      "signing_key": "GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8",
      [...]
    }

The ``id`` and the ``signing_key`` are the two important parameters,
here. Let's get the private key for that signing key with:

::

    >>> dump_private_keys
    [[
      ...
      ],[
    "GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8",
    "5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"
      ]
    ]

Now we need to start the witness, so shut down the wallet (ctrl-d), and
shut down the witness (ctrl-c). Re-launch the witness, now mentioning
the new witness 1.6.10 and its keypair:

::

    ./witness_node  \
           --rpc-endpoint=127.0.0.1:8090 \
           --witness-id '"1.6.10"' \
           --private-key '["GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8", "5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"]'

Alternatively, you can also add this line into yout config.ini:

::

    witness-id = "1.6.10"
    private-key = ["GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8","5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"]

Note: Make sure to use YOUR public/private keys instead of the once
given above!

If you monitor the output of the ``witness_node``, you should see it
generate blocks signed by your witness:

::

    Witness 1.6.10 production slot has arrived; generating a block now...
    Generated block #367 with timestamp 2015-07-05T20:46:30 at time 2015-07-05T20:46:30
