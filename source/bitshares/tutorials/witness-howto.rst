***********************************
Howto Run a Block-producing Witness
***********************************

This document serves as an introduction on how to become an actively block
producing witness in a Graphene-based network (e.g. the BitShares2.0 network).

We will have to register a new account from the and add some initial funds for
the witness registration fee. After that, we will create, configure and run a
witness node.

Requirements
############

* A registered account in the corresponding network (see i.e. :doc:`../user/account`)
* Some funds in the account to pay for the registration fee
* Executable binary (see :doc:`../installation/index`)

Hardware Advice
###############

* Dedicated servers with minimum 16 GB (32 GB advised) Ram, SSD disks advised. 

Active Witness Duties
#####################

* Be a reliable blockproducer
* Maintain a public seednode
* Publish accurate, frequently updated (check 1-2 times per hour), price feeds for the Smart Coins & Market Pegged Assets

Overview
########

We will now perform the following steps:

* run a local (non block producing) full node 
* create a CLI wallet for the network
* import your account (and funds) into CLI wallet
* upgrade our account to a lifetime member
* register a new witness
* upvote the witness with our funds
* sign blocks

Run the witness as a node in the network
########################################

We first run the witness node without block production and connect it to the
P2P network with the following command:::

    $ programs/witness_node/witness_node --rpc-endpoint 127.0.0.1:8090

We open a RPC port for local host so that we can later connect the CLI wallet
with it. After the network was synced and periodically receives new blocks from
other participants, we can go on to the next step.

Creating a wallet
#################

We now open up the cli_wallet and connect to our plain and stupid witness
node:::

    $ programs/cli_wallet/cli_wallet -s ws://127.0.0.1:8090

First thing to do is setting up a password for the newly created wallet prior to
importing any private keys:::

    >>> set_password <password>
    null
    >>> unlock <password>
    null
    >>>

Wallet creation is now done.

Basic Account Management
########################

We can import the account name (owner key) and the balance containing (active)
key into the CLI wallet:::

    >>> import_key <accountname> <owner wif key>
    true
    >>> import_key <accountname> <active wif key>
    true
    >>> list_my_accounts
    [{
    "id": "1.2.15",
    ...
    "name": <accountname>,
    ...
    ]
    >>> list_account_balances <accountname>
    XXXXXXX BTS

Both keys can be exported from the web wallet.

.. FIXME: How???

Since only lifetime members can become witnesses, you must first upgrade to a
lifetime member. This step costs the lifetime-upgrade fee:::

    >>> upgrade_account <accountname> true
    [a transaction in json format]

Registering a Witness Object
############################

To become a witness and be able to produce blocks, you first need to create a
witness object that can be voted in.

We create a new witness object by issuing:::

    >>> create_witness <accountname> "http://<url-to-proposal>" true
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
        "block_signing_key": "<PUBLIC KEY>",
        "initial_secret": "00000000000000000000000000000000000000000000000000000000"
      }
    ]
      ],
      "signatures": [
      "1f2ad5597af2ac4bf7a50f1eef2db49c9c0f7616718776624c2c09a2dd72a0c53a26e8c2bc928f783624c4632924330fc03f08345c8f40b9790efa2e4157184a37"
      ]
    }

Our witness is registered, but it can't produce blocks because nobody has voted
it in. You can see the current list of active witnesses with
`get_global_properties`:::

    >>> get_global_properties
    {
      "active_witnesses": [
    "1.6.0",
    "1.6.1",
    "1.6.2",
    "1.6.3",
    "1.6.4",
    "1.6.5",
    "1.6.7",
    "1.6.8",
    "1.6.9"
      ],
      ...

Now, we should vote our witness in. Vote all of the shares your account
``<accountname>`` in favor of your new witness.::

    >>> vote_for_witness <accountname> <accountname> true true
    [a transaction in json format]

.. note:: If you want to experiment with things that require voting, be aware that
   votes are only tallied once per day at the maintenance interval.
   ``get_dynamic_global_properties`` tells us when that will be in
   ``next_maintenance_time``. Once the next maintenance interval passes, run
   ``get_global_properties`` again and you should see that your new witness has been
   voted in.  

Now we wait until the next maintenance interval.

Configuration of the Witness Node
#################################

Get the witness object using::

    get_witness <witness-account>
    
and take note of two things. The ``id`` is displayed in ``get_global_properties``
when the witness is voted in, and we will need it on the ``witness_node`` command
line to produce blocks. We'll also need the public ``signing_key`` so we can
look up the correspoinding private key.

Once we have that, run ``dump_private_keys`` which lists the public-key 
private-key pairs to find the private key.

.. warning:: ``dump_private_keys`` will display your keys unencrypted on the
             terminal, don't do this with someone looking over your shoulder.

.. code-block:: sh

    >>> get_witness <accountname>
    {
      [...]
      "id": "1.6.10",
      "signing_key": "GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8",
      [...]
    }

The ``id`` and the ``signing_key`` are the two important parameters, here. Let's get
the private key for that signing key with:::

    >>> dump_private_keys
    [[
      ...
      ],[
    "GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8",
    "5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"
      ]
    ]

Now we need to start the witness, so shut down the wallet (ctrl-d),  and shut
down the witness (ctrl-c).  Re-launch the witness, now mentioning the new
witness 1.6.10 and its keypair:::

    ./witness_node --rpc-endpoint=127.0.0.1:8090 \
                   --witness-id '"1.6.10"' \
                   --private-key '["GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8", "5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"]'

Alternatively, you can also add this line into yout config.ini:::

    witness-id = "1.6.10"
    private-key = ["GPH7vQ7GmRSJfDHxKdBmWMeDMFENpmHWKn99J457BNApiX1T5TNM8","5JGi7DM7J8fSTizZ4D9roNgd8dUc5pirUe9taxYCUUsnvQ4zCaQ"]

.. note:: Make sure to use YOUR public/private keys instead of the once given
          above!

Verifying Block Production
##########################

If you monitor the output of the `witness_node` and you have been voted in the top list of block producing witnesses, you should see it generate 
blocks signed by your witness:::

    Witness 1.6.10 production slot has arrived; generating a block now...
    Generated block #367 with timestamp 2015-07-05T20:46:30 at time 2015-07-05T20:46:30

Backup Server
#############

To stay a reliable block producer it is recommend you have a 'hot swappable' backup server with same specs as the live server running an instance of `witness_node`. ***IT IS IMPORTANT THAT THIS BACKUP SHOULD _NOT_ HAVE THE SAME SIGNING KEY PAIR in the config.ini as your main node!*** 

How it works: 

1. Your 'live' witness node is signing blocks with the private key which is stated in the config.ini.
2. Your 'backup' witness node is running a copy of the software with another private key in the config.ini (generate a new public/private keypair with `cli_wallet` command: `suggest_brain_key`).
3. On a third server you monitor your 'live' node on regular intervals with an automated script (e.g.: https://github.com/roelandp/Bitshares-Witness-Monitor).
4. As soon as your 'live' node is starting to fail producing blocks the 'missing blocks' parameter increases and you can issue a command to `update_witness` to your backup's 'Public Key'.
5. Investigate the issue with your 'live' node and stay happy.

Price Feeds
###########

Besides producing new blocks another very important task of the witness is to
feed **ACCURATE** prices into the blockchain. Educational material on how this can be
implemented is available in ``scripts/pricefeed`` at `github`_ together with
the corresponding documentation.

Only active witnesses are allowed to publish pricefeeds for the 'official' currency / smartcoin markets. For any other asset you need to be whitelisted by the creator of the market to be able to publish pricefeeds. 

A couple of price feed scripts in various stages of development and for you to code-inspect and try. (You can always setup a testnet node and test the publishing of pricefeeds).

* Wackou's BTS tools includes a pricefeed publishing script: https://github.com/wackou/bts_tools
* Alt's BTS Price: https://github.com/pch957/btsprice
* Xeroc's Bitshares Pricefeed: https://github.com/xeroc/bitshares-pricefeed


.. _github: https://github.com/xeroc/python-graphenelib/

