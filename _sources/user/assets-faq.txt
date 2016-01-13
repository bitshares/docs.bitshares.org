**************************
Frequently Asked Questions
**************************

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

Market Fees?
************

If *Market Fees* of a UIA are turned on, fees have to be payed for each
market transaction (buy, sell, bid, fill, etc ...). If the asset's fee
pool is funded, the fees can payed in the native IUA instead of BTS.

The percentage of market fees that are applied can be defined and
changed by the issuer.

If the Market Fee is set to 1%, the issuer will earn 1% of market volume
as profit. These profits are accumulated for each UIA and can be
withdrawn by the issuer. 

What are Asset Flags and Permissions?
*************************************

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
  accounts must be whitelisted in order to hold this asset
* ``override_authority``:
  issuer may transfer asset back to himself
* ``transfer_restricted``:
  require the issuer to be one party to every transfer
* ``disable_force_settle``:
  disable force settling
* ``global_settle``:
  allow the bitasset issuer to force a global settling – this may be set
  in permissions, but not flags
* ``disable_confidential``:
  allow the asset to be used with confidential transactions
* ``witness_fed_asset``:
  allow the asset to be fed by witnesses
* ``committee_fed_asset``:
  allow the asset to be fed by the committee

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
