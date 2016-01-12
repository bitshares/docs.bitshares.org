*********************
Market Pegged Assets
*********************

A crypto-currency, with the properties and advantages of Bitcoin, that is
capable of maintaining price parity with a globally adopted currency (e.g. U.S.
dollar), has high utility for convenient and censorship resistant commerce. This
can be achieved by BitShares' market pegged assets (MPA), a new type of freely
traded digital asset whose value is meant to track the value of a conventional
underlying asset by means of contracts for difference (CFD). 

In the User Interface, MPAs are easily distinguishable from UIAs in the asset
explorer.

SmartCoins
##########

BitAssets can be created and owned by anyone on the network. However,
those that are owned by the BitShares Committee, are called
*SmartCoins*. Among these are:

* (Bit)USD
* (Bit)CNY
* (Bit)EUR
* (Bit)GOLD
* (Bit)Silver

Balances in these assets are labeled with `USD`, `CNY`, etc., because
represent the same value as their underly.

Collateralized Tokens
#####################

A *SmartCoin* (synonym for MPA) is a crypto-currency that *always* has 100% or
more of its value backed by the BitShares core currency (BTS), to which they can
be converted at any time, as *collateral* in a CFD.

What makes MPAs unique is that they are free from counterparty risk even though
they resemble a CFD backed by collateral. This is achievable by letting the
network itself (implemented as a software protocol) be responsible for securing
the collateral and performing settlements as will be described in more detail
below.

Market Mechanics
################

Each BitAsset has a feed that is provided by the witnesses that indicate
a fair price for that asset. This so called *Settlement Price* or *Feed
Price* is used to margin call positions that borrowed BitAssets and can no
longer maintain the minimum collateral ratio (i.e. maintenance
collateral ratio). The collateral of these positions is used to buy back
the debt from the market automatically and the position will be closed.
By these rules, the network enforces the exchange participants to always
maintain a collateral that is higher than the minimum requirement.
Currently, the minimum required collateral ratio is **175%** and can be
changed by the witnesses.

Read more about the :doc:`margin call mechanics <dex-margin-mechanics>`
before trading.

Frequently Asked Questions
##########################

.. toctree::
   :maxdepth: 2

   assets-faq

Tutorials
#########

.. toctree::
  :maxdepth: 1

  ../tutorials/mpa-create-manual
