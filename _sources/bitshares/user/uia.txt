******************
User Issued Assets
******************

In addition to the aforementioned *market pegged* assets, BitShares allows
individuals and companies to create and issue their own tokens for anything
they can imagine. The potential use cases for so called user-issued assets
(UIA) are innumerable. On the one hand, UIAs can be used as simple event
tickets deposited on the customers mobile phone to pass the entrance of a
concert. On the other hand, they can be used for crowd funding, ownership
tracking or even to sell equity of a company in form of stock.

Obviously, the regulations that apply to each kind of token vary widely and are
often different in every jurisdiction. Hence, BitShares comes with tools that
allow issuers to remain compliant with all applicable regulations when issuing
assets assuming regulators allow such assets in the first place.

Use Cases
#########

* Reward Points
* Fan Credits
* Flight Miles
* Event Tickets
* Digital Property
* Crowd-Funding
* Company Shares

Frequently Asked Questions
##########################

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

Tutorials
#########

.. toctree::
  :maxdepth: 1

  ../tutorials/uia-create-gui
  ../tutorials/uia-create-manual
