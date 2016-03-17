**********
Assets FAQ
**********

General
#######

What happens to the asset creation fee?
***************************************

50% of the asset creation fee are used to pre-fill the assets fee pool.
From the other 50%, 20% go to the network and 80% go to the referral
program. This means, that if you are a life-time member, you get back
40% of the asset creation fee after the vesting period (currently 90
days).

Can I change `x` after creation of the asset
********************************************

The following parameters can be changed after creation:

* Issuer
* UIA-Options:

 * Max Supply
 * Market Fee
 * Permissions (disable only/nor re-enable)
 * Flags (if permissions allow it)
 * Core exchange rate
 * White/Black Listing
 * Description

* MPG-Options:

 * Feed Life Time
 * Minimum Feeds
 * Force Settlement Offset/Delay/Volume

Things that cannot be changes:

* Symbol
* Precision

A tutorial can be found :doc:`here <../tutorials/uia-update-manual>`.

What about Parent and Child assets?
***********************************

A **parent**/**child** relation ship for assets can be represented by
the name of the symbol, e.g.::

    PARENT.child

can only be created by the issuer of ``PARENT`` and no one else.

Changing the issuer
*******************

The current issue of an asset may transfer ownership of the asset to
someone else by changing the issuer in the asset's settings.

Fee Pool
########

What is the fee pool all about?
*******************************

The fee pool allows participants in the network to deal with assets and
pay for the transaction fees without the need to hold BTS. Any
transaction fee can be paid by paying any asset that has a core exchange
rate (i.e. a price) at which the asset can be exchange implicitly into
BTS to cover the network fee. If the asset's fee pool is funded, the
fees can be payed in the native UIA instead of BTS.

.. note:: The core exchange rate at which a fee can be exchanged into
          BTS may differ from the actual market valuation of the asset.
          A user, thus, may pay a premium or spare funds by paying in
          BTS.

It is the task of the issuer to keep the fee pool funded and the core
exchange rate updated unless he wants the owner of his asset to be
required to hold BTS for the fee.

What to do if the fee pool is empty?
************************************

Open up the issuer's account, click the assets tab and open up the
dialog to change the asset. There will be a fee pool tab that allows you
to fund the fee pool and claim the accumulated fees!

Market Fees
###########

What happens if I enable Market fees?
*************************************

If *Market Fees* of a UIA are turned on, fees have to be payed for each
**market transaction**. This means, that market fees only apply to
**filled orders**!

The percentage of market fees that are applied can be defined and
changed by the issuer and any fee generated that way will be accumulated
for each asset only to be claimed by the issuer.

If the Market Fee is set to 1%, the issuer will earn 1% of market volume
as profit. These profits are accumulated for each UIA and can be
withdrawn by the issuer.

How to claim accumulated fees?
******************************

Open up the issuer's account, click the assets tab and open up the
dialog to change the asset. There will be a fee pool tab that allows you
to fund the fee pool and claim the accumulated fees!

What if two different market fees are involved in a trade?
**********************************************************

Suppose, I set the market fee for MyUIA market at 0.1%.
and the market fee for YourUIA market at 0.3%.

In BitShares, You pay the fee upon **receiving an asset**. Hence, one
side will pay 0.3% the other will pay 0.1%.

What are Asset Flags and Permissions?
#####################################

When an asset is creatd, the issuer can set any combination of
flags/permissions. **Flags** are set in stone unless there is
**permission** to edit. Once a permission to edit is revoked, flags are
permanent, and can never be modified again.

What are the Permissions:
*************************

* Enable market fee
* Require holders to be white-listed
* Issuer may transfer asset back to himself
* Issuer must approve all transfers
* Disable confidential transactions

What are the Flags?
*******************

* ``charge_market_fee``:
  an issuer-specified percentage of all market trades in this asset is
  paid to the issuer
* ``white_list``:
  accounts must be white-listed in order to hold this asset
* ``override_authority``:
  issuer may transfer asset back to himself
* ``transfer_restricted``:
  require the issuer to be one party to every transfer
* ``disable_force_settle``:
  disable force settling
* ``global_settle``: (only for bitassets)
  allows bitasset issuer to force a global settling - this may be set
  in permissions, but should not be set as flag unless, for instance, a
  prediction market has to be resolved. If this flag has been enabled,
  no further shares can be borrowed!
* ``disable_confidential``:
  allow the asset to be used with confidential transactions
* ``witness_fed_asset``:
  allow the asset to be fed by witnesses
* ``committee_fed_asset``:
  allow the asset to be fed by the committee

Market Pegged Assets
####################

Can I use the same flags/permissions as for UIAs?
*************************************************

Yes!

What are market-pegged-asset-specific parameters
************************************************

* ``feed_lifetime_sec``:
  The lifetime of a feed. After this time (in seconds) a feed is no
  longer considered *valid*.
* ``minimum_feeds``:
  The number of feeds required for a market to become (and stay) active.
* ``force_settlement_delay_sec``:
  The delay between requesting a settlement and actual execution of
  settlement (in seconds)
* ``force_settlement_offset_percent``:
  A percentage offset from the price feed for settlement (`100% = 10000`)
* ``maximum_force_settlement_volume``:
  Maximum percentage of the supply that can be settled per day (`100% = 10000`)
* ``short_backing_asset``:
  The asset that has to be used to *back* this asset (when borrowing)
