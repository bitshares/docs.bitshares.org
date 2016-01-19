***********************
Connecting a CLI wallet
***********************

We will now show how to connect a cli-wallet to the new blockchain and
generate our first transaction on the new blockchain.

Creating a wallet
#################

In order to create a wallet, you must specify the previsouly setup
server. With the witness node's default access control settings, a blank
username and password will suffice:

.. code-block:: sh

    programs/cli_wallet/cli_wallet --wallet-file my-wallet.json -s ws://127.0.0.1:11011 -H 127.0.0.1:8090 -r 127.0.0.1:8099

.. note:: The parameter `-H` is required so that we can interface with
          the cli wallet via RPC-HTTP-JSON, later while `-r` will open a
          port for the Ruby-based faucet.

Before continuing, we should set a password.  This password is used
to encrypt the private keys in the wallet.  We will use the word
``supersecret`` in this example.::

    >>> set_password supersecret

Gaining access to stake
#######################

In Graphene, balances are contained in accounts.  To claim an account
that exists in the Graphene genesis, use the ``import_key`` command:::

    >>> unlock supersecret
    >>> import_key <name> "<wifkey>"

Funds are stored in genesis balance objects.  These funds can be
claimed, with no fee, using the ``import_balance`` command.::

    >>> import_balance <name> ["*"] true

Creating accounts
#################

Creating an account requires lifetime member (LTM) status.  To upgrade
to LTM, use the ``upgrade_account`` command:::

    >>> upgrade_account faucet true

We can now register an account.  The ``register_account`` command
allows you to register an account using only a public key:::

    >>> register_account alpha GPH4zSJHx7D84T1j6HQ7keXWdtabBBWJxvfJw72XmEyqmgdoo1njF GPH4zSJHx7D84T1j6HQ7keXWdtabBBWJxvfJw72XmEyqmgdoo1njF faucet faucet 0 true
    >>> transfer faucet alpha 100000 CORE "here is the cash" true

We can now open a new wallet for ``alpha`` user:::

    >>> import_key alpha 5HuCDiMeESd86xrRvTbexLjkVg2BEoKrb7BAA5RLgXizkgV3shs
    >>> upgrade_account alpha true
    >>> create_witness alpha "http://www.alpha" true

The ``get_private_key`` command allows us to obtain the public key corresponding
to the block signing key:::

    >>> get_private_key GPH6viEhYCQr8xKP3Vj8wfHh6WfZeJK7H9uhLPDYWLGCRSj5kHQZM

