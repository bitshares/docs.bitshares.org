*********************
Market Pegged Assets
*********************

A crypto-currency, with the properties and advantages of Bitcoin, that
is capable of maintaining price parity with a globally adopted currency
(e.g. U.S.  dollar), has high utility for convenient and censorship
resistant commerce. This can be achieved by BitShares' market pegged
assets (MPA), a new type of freely traded digital asset whose value is
meant to track the value of a conventional underlying asset by means of
an over-collateralized, counterpartyrisk-free, smart-contract secured
blockchain loan.

Instead of creating a UIA where the full control over supply is in the
hands of the issuer, we can also create a **Market Pegged Asset** (MPA)
and let the market deal with demand and supply. All we need is a *fair
price* and another asset that can be used as collateral.

Why would we need *collateral* for? Since the issuer of a MPA has no
control over the supply, the blockchain protocol deals with increasing
and decreasing supply. In order for a user to get some of the new coins,
he will need to put collateral into a **smart contract** (technically,
this contract is a *collateralized loan*).

 |   A simple example would be a MPA that is backed by USD (a stable crypto
     token within BitShares) that requires a collateral ratio of 200%. Then,
     in order to get new coin, we can borrow 100 USD worth of new coins by paying
     200 USD.

By this, the supply of your coin is increased by 100. But how would it
be decreased? The USD are locked in the smart contract and can only be
reclaimed if the debt (here, 100 coins) are returned. Returning them
will result in the coins being removed from the supply because the are
no longer backed by any collateral.

So what for do we need a *fair price*? Remember that we chose a
collateral ratio of 200%? That number tells us how well *backed* your
coins are by the collateral. But what would happen if the value of your
coin goes to the moon?  Then your collateral ratio will reduce to say
150%. At a certain percentage, the blockchain will automatically trigger
so called *Margin Calls* which will

1. Take your collateral (here, USD)
2. Sell it in the market to buy back the coin you owe
3. Close the contract
4. Pay your the residual USD

A *fair price* thus tells the market what your coin is worth (e.g.
traded for on external exchanges) and triggers margin calls if
necessary.

But there is more! Everyone that holds your (MPA) coin in BitShares can
convert the coin into the backing asset at a fair price. This procedure
is called "settlement" and ensures that your MPA is always worth **at
least** the *fair price*.

In the User Interface, MPAs are easily distinguishable from UIAs in the
asset explorer.

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
be converted at any time, as *collateral* in a collateralized loan.

What makes MPAs unique is that they are free from counterparty risk even though
they resemble a collateralized loan. This is achievable by letting the
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
