******************
Prediction Markets
******************

A prediction market is a specialized BitAsset such that total debt and
total collateral are always equal amounts (although asset IDs differ).
No margin calls or force settlements may be performed on a prediction
market asset. A prediction market is globally settled by the issuer
after the event being predicted resolves, thus a prediction market must
always have the `global_settle` permission enabled. The maximum price for
global settlement or short sale of a prediction market asset is 1-to-1.

If the bet resolves to `true` (i.e. a price feed of `1`), then the
PM-asset can be settled release the collateral to the holder of the
asset.

If, instead, the bet resolves to `false` (i.e. a price feed of `0`),
then those that sold the PM-asset on the market and went short, made a
profit since it PM-asset became worthless.

Creation
########

Prediction markets are assets that trade freely and can be borrowed from
the market at a 1:1 ratio with the backing asset (which could be any
other asset, including BTS, USD, GOLD).

The technical details are described in a separate tutorial:

* :doc:`../tutorials/pm-create-manual`

Betting
#######

The bet can be take by borrowing the prediction market asset (here
``PMsymbol``). Since the collateral ratio is 100%, you need to pay the
exact same amount for to borrow the asset:

::

   >>> borrow_asset <account> <amount> <PMsymbol> <1:1-amount> true

Of course, the asset can also be borrowed in the **GUI/web wallet**.

Resolving
#########

A price feed needs to be published for the prediction market by the
issuer or feed producer. It is essentially a global settlement which
will set the parameters of the asset such that the holders of the asset
can settle at the outcome of the bet (0, or 1). The details are shown in
the tutorial:

* :doc:`../tutorials/pm-close-manual`

Claiming Profits
################

After closing the bet, a user claim his win by **settling** his borrow
position and taking out the collateral:

::

    >>> settle_asset <account> <account> <symbol> True

A settlement button is also available in the GUI/web wallet.
