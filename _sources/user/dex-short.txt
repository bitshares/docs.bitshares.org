***********************
Short Selling BitAssets
***********************

In order to increase your exposure to BTS and offer liquidity to BitAssets, such
as USD, EUR, GOLD, etc., you can go *borrow* this bitAsset from the network and
*sell it short*. We will here briefly describe the procedure.

Borrowing
#########

The BitShares network is capable of issuing any amount of any BitAsset and lend
it out to participants given enough collateral.

* *settlement price*: The price for 1 BTS as it is traded on external exchanges.
* *maintenance collateral ratio* (MCR): A ratio defined by the witnesses as minimum required collateral ratio
* *maximum short squeeze ratio* (MSQR): A ratio defined by the witnesses as to how far shorts are protected against short squeezes
* *short squeeze protection* (SQP): Defines the most that a margin position will ever be forced to pay to cover 
* *call price* (CP): The price at which short/borrow positions are margin called

Margin Call
###########

The BitShares network is capable of margin calling those positions that do not
have enough collateral to back their borrowed bitAssets. A margin call will
occur any time the highest bid is less than the *call price* and greater than
*SQP*.
The margin position will be forced to sell its collateral anytime the highest
offer to buy the collateral is less than the call price (x/BTS).::

    SQP        = settlement price / MSQR
    call price = DEBT / COLLATERAL * MCR

The margin call will take the collateral, buy shares of borrowed bitAsset at
market rates up to the SQP and close the position. The remaining BTS of the
collateral are returned to the customer.

Read more about the :doc:`margin call mechanics <dex-margin-mechanics>` before
trading.

Settlement
##########

Holders of any bitAsset can request a settlement at a *fair price* at any time.
The settlement closes the borrow/short positions with lowest collateral ratio
and sells the collateral for the settlement.

Note, that there is a maximum daily settlement volume (currently 2%) defined by
the :doc:`committee <committee>` to prevent exploitation via external price
movements.

Selling
#######

After burrowing bitAssets, they can be sold free at any of the corresponding
markets at any price a buyer is willing to pay. With this step, the
short-selling is now complete and you are short that particular bitAsset.

Updating Collateral Ratio
#########################

At any time, the holder of a borrow/short position can modify the collateral
ratio in order to flexibly adjust to market behavior. If the collateral ratio is
increase, an additional amount of BTS is locked as collateral, while reducing
the collateral ratio will require an amount of the corresponding BitAsset to be
payed back to the network.

Covering
########

To close a borrow/short position, one must hold the borrowed amount of that
particular bitAsset to hand it over to the BitShares network. After that, the
BitAssets are reduced from the corresponding supply and the collateral is
released and given back to its owner.

Discussion
##########

Shorts can pick their place in line for settlement. Think of it this way, if you
fall in the bottom 2% of shorters by collateral you have been given notice of
potential margin call since only 2% can be settled, daily. This is like any
other market where they give you 24 hours to add collateral. If someone is short
and doesn't want to meet the new higher collateral limits then they can either
cover on their own terms or add collateral.

By giving 24 hours shorts have an opportunity to cover prior to any price
manipulation by big players.

If there is a 10% premium on BitUSD relative to the feed, then the attacker
would have to increase reported price feed (value of BTS) by 10% just to get the
force-settlement price to equal the previously fair value for BitUSD. They
would have to push beyond 10% before the short starts taking a loss relative to
a voluntary cover. All savvy market participants would be aware of a large
force-settle order and would therefore reset the manipulator making it much
harder to manipulate the price. In effect, price manipulation represents "free
money" to those who know it is going on.

Look at it another way, someone enters a large force-settlement order it becomes
an opportunity for the shorter to do reverse manipulation. It is a tug of war
where both sides (short and long) have equal opportunity to manipulate the
market in their favor. They go to battle and the result is just the fair market
price at that point in time. It is not a guaranteed win for the potential
manipulator.
