**********************
Remote Procedure Calls
**********************

We here assume that you have a full/cli wallet running at ``127.0.0.1:8090``.
Please note that the set of available commands depends on application you
connect to.

Unrestricted Calls
##################

Since API 0 is state-less it is accessible via regular JSON-RPC calls like:::

    $ curl --data '{"jsonrpc": "2.0", "method": "get_accounts", "params": [["1.2.0"]], "id": 1}' http://127.0.0.1:8090/rpc

We can do the same thing using an HTTP client such as curl for API's which do
not require login or other session state:::

    $ curl --data '{"jsonrpc": "2.0", "method": "call", "params": [0, "get_accounts", [["1.2.0"]]], "id": 1}' http://127.0.0.1:8090/rpc
    {"id":1,"result":[{"id":"1.2.0","annotations":[],"membership_expiration_date":"1969-12-31T23:59:59","registrar":"1.2.0","referrer":"1.2.0","lifetime_referrer":"1.2.0","network_fee_percentage":2000,"lifetime_referrer_fee_percentage":8000,"referrer_rewards_percentage":0,"name":"committee-account","owner":{"weight_threshold":1,"account_auths":[],"key_auths":[],"address_auths":[]},"active":{"weight_threshold":6,"account_auths":[["1.2.5",1],["1.2.6",1],["1.2.7",1],["1.2.8",1],["1.2.9",1],["1.2.10",1],["1.2.11",1],["1.2.12",1],["1.2.13",1],["1.2.14",1]],"key_auths":[],"address_auths":[]},"options":{"memo_key":"GPH1111111111111111111111111111111114T1Anm","voting_account":"1.2.0","num_witness":0,"num_committee":0,"votes":[],"extensions":[]},"statistics":"2.7.0","whitelisting_accounts":[],"blacklisting_accounts":[]}]}

.. note:: Wallet specific commands, such as ``transfer`` and market orders, are
          only available if connecting to ``cli_wallet`` or ``cli_full_wallet``
          and will only execute of the wallet is unlocked.

Restricted Calls
################

Calls that are restricted by default (``network_node_api``) or have been
restricted by configuration are not accessible via RPC because a statefull
protocol (websocket) is required.
