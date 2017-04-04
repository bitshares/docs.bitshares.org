****************
Create MPAs/UIAs
****************

We now create some Market Pegged assets and construct the price feed.

* Create Market Pegged Assets:
  https://github.com/BitSharesEurope/testnet-pythonscripts/blob/master/create_mpa.py
* Fund `init*` witnessses:
  https://github.com/BitSharesEurope/testnet-pythonscripts/blob/master/fund-inits.py
* Price feed scripts:

  * https://github.com/BitSharesEurope/testnet-pythonscripts/blob/master/feed.last.py
  * https://github.com/BitSharesEurope/testnet-pythonscripts/blob/master/feed.parity.py
  * https://github.com/BitSharesEurope/testnet-pythonscripts/blob/master/feed.random.py

We can use `cron` to runt he price feed script on a regular basis:

::

    */15 * * * * /usr/bin/python3 /home/gph/testnet-pythonscripts/feed.last.py
    */15 * * * * /usr/bin/python3 /home/gph/testnet-pythonscripts/feed.random.py
    0    * * * * /usr/bin/python3 /home/gph/testnet-pythonscripts/feed.parity.py
