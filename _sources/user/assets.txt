.. role:: html(raw)
   :format: html

*************
Assets/Tokens
*************

The BitShares 2.0 network consist of several *assets*, *tokens* or *currencies*.
All assets are equal from a technological point of view and come with more or
less the same features, namely, they can be traded against each other and can be
transfered within seconds. The differences between them are of economical
nature.

:html:`<div class="container-fluid"><div class="row"><div class="col-md-6">`

**User Issued Assets (UIAs)**

Freely traded tokens created by individuals used for a variety of use-cases.
Often UIAs are used as IOUs issued by a bank, exchange or other financial
institute to represent deposit receipts.

* :doc:`Read more ... <uia>`

:html:`</div><div class="col-md-6">`

**Market-Pegged Assets (MPA)**

These *SmartCoins* track the value of an underlaying asset, such as Gold, or
U.S. Dollar. Smartcoins can be created by anyone contracting with the
BitShares ecosystem and putting sufficient BTS (at least 175%) into the so
called contract for difference as *collateral*.

* :doc:`Read more ... <mpa>`

:html:`</div></div>`
:html:`<div class="row"><div class="col-md-6">`

**Privatized Bit-Assets**

A flexible mixture between UIA and MPA that allows 3rd parties to create their
own customized MPAs.

* :doc:`Read more ... <privbta>`

:html:`</div><div class="col-md-6">`

**Fee Backed Assets**

An FBA is a token that pays you a fraction of the transaction fees generated
by a particular feature that has been funded independent of BitShares.

* :doc:`Read more ... <fba>`

:html:`</div></div>`
:html:`<div class="row"><div class="col-md-6">`

**Prediction Market Asset**

A prediction market is similar to a MPA, that trades between 0 and 1,
only. After an event, a price feed can be used to determine which option
to take and participants can settle at this price.

* :doc:`Read more ... <pm>`

:html:`</div><div class="col-md-6">`
:html:`</div></div></div>`

Frequently Asked Questions
##########################

.. toctree::
  :maxdepth: 2

  assets-faq

Tutorials
#########

.. toctree::
  :maxdepth: 1

  ../tutorials/uia-create-gui
  ../tutorials/uia-create-manual
  ../tutorials/mpa-create-manual
  ../tutorials/pm-create-manual
  ../tutorials/pm-close-manual

:html:`<!-- Adding the toctree`

.. toctree::
   :maxdepth: 1

   uia
   mpa
   fba
   privbta
   pm

:html:`//-->`
