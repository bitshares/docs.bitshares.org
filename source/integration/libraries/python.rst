**********************
General Python Library
**********************

This python library assists interfacing with a graphene-based network such as
BitShares 2.0.

Installation
############

A graphene Python 3.0 library can be installed by issuing

.. code-block:: sh

    git clone http://github.com/xeroc/python-graphenelib
    cd python-graphenelib
    easy_install-3.4 install autobahn
    python3 setup.py install --user

As you can see, this library requires Python3 and will **not** work properly
with Python2.

Usage
#####

* `Technical documentation: <http://python-graphenelib.readthedocs.org/en/latest>`_
* `Youtube - Live Coding Sessions <https://bitsharestalk.org/index.php/topic,21816.new.html#new>`_

Examples
########

.. code-block:: python 

     from grapheneapi.grapheneclient import GrapheneClient
     from grapheneapi.graphenewsprotocol import GrapheneWebsocketProtocol
     from pprint import pprint
     from datetime import datetime
     import time

     class Config():
         wallet_host = "localhost"
         wallet_port = 8092
         witness_url = "wss://bitshares.openledger.info/ws"

     pprint(client.getObject("1.3.0"))

     pprint(client.rpc.transfer2("xeroc", "fabian", 10, "BTS", "memo", True))
     pprint(client.rpc.get_account_history("xeroc", 2))
     asset = client.rpc.get_asset("USD")
     satoshis = 10000000
     usd = satoshis / 10 ** asset["precision"]
     pprint(asset)
     print(usd)
     pprint(client.getObject('2.3.121'))

     client = GrapheneClient(Config)
     pprint(client.rpc.get_account_by_name("committee-account"))

     quote = client.rpc.get_asset("MKR")
     base  = client.rpc.get_asset("OPEN.BTC")
     
     def formatTimeFromNow(secs=0):
         return datetime.utcfromtimestamp(time.time() + int(secs)).strftime('%Y-%m-%dT%H:%M:%S')
     
     pprint(client.ws.get_market_history(quote["id"],
                                         base["id"],
                                         24 * 60 * 60,
                                         formatTimeFromNow(-24 * 60 * 60),
                                         formatTimeFromNow(),
                                         api="history"
                                         ))


     get_account_history(account, operation_history_id_type stop, unsigned limit, operation_history_id_type start) const
     account = client.rpc.get_account("xeroc")
     
     pprint(client.ws.get_account_history(account["id"],
                                          "1.11.0",
                                          1,
                                          "1.11.0",
                                          api="history"))
