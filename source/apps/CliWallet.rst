CLI Wallet
==========

The following will explain how to use the console wallet (not GUI).

Launching
---------

The `cli_wallet` creates a local `wallet.json` file that contains the encrypted
private keys required to access the funds in your account. It **requires** a
running witness node (not necessarily locally) and connects to it on launch::

    programs/cli_wallet/cli_wallet -s ws://127.0.0.1:8090

Depending on the actual chain that you want to connect to your may need to
specifiy `--chain-id`.

Enabling Remote Procedure Calls (RPC)
-------------------------------------

In order to allow RPC calls for wallet operations (spend, buy, sell, ...) you
can choose between pure RPC or RPC-HTTP requests. In this tutorial, the latter
is prefered since well established libraries make use of the RPC-HTTP protocol.
To enable RPC-HTTP in your wallet you need to run::

    programs/cli_wallet/cli_wallet --rpc-http-endpoint="127.0.0.1:8092"
    # or
    programs/cli_wallet/cli_wallet --rpc-endpoint="127.0.0.1:8092"

depending on the kind of RPC protocol.

This will open the port 8092 for local queries only. It is not recommended to
publicly expose your wallet!
