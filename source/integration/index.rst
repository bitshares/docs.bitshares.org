.. role:: html(raw)
   :format: html

*****************
Integration Guide
*****************

Banks, exchanges and merchants are integrating with the Graphene technology
already to power instant cross-border remittance, corporate payments, voting,
and decentralized trading. This page serves as a technical documentation for
integrating **any** Graphene based technology to profiting from

* its real-time blockchain technology,
* existing user base,
* its network effect, and
* existing ecosystem.


.. note:: We offer a *low noise* skype group for important announcements
          for our partners, including exchanges, merchants and integrated
          businesses. If you would like to be added, please send a short mail to
          `Fabian`_ describing your service.

.. _Fabian: mailto:Fabian@cryptonomex.com

Basic Knowledge
###############

We here illustrate the steps necessary to securely operate as a merchant,
trader, exchange, or fiat-gateway. Some basic knowledge should be known to all
of them before starting to integrate.

.. toctree::
   :maxdepth: 1

   what-is-different
   apps/index
   network-setup
   often-used-calls

Use-Cases
#########

:html:`<div class="container-fluid"><div class="row"><div class="col-md-6">`

**Exchange**, **Bridges**, and **Gateways** represent business that trade or
exchange assets that are located **inside** a Graphene network (e.g. BitShares)
against assets that are **located** outside the blockchain network. For
instance, exchanges trade ``BTS:BTC`` while bridges exchange ``bitBTC:BTC``.

.. toctree::
   :maxdepth: 2

   exchanges/index

:html:`</div><div class="col-md-6">`

**Merchants** make use of the currency-denomintated assets of a Graphene network
(e.g. BitShares). Similar to traditional payment solutions they let their
customers pay using bitUSD, bitEUR, or any other *stable* blockchain asset.

.. toctree::
   :maxdepth: 2

   merchants/index

:html:`</div></div>`
:html:`<div class="row"><div class="col-md-6">`

**Traders** make use of the API provided to interact with a Graphene network
(e.g. BitShares) and provide market makers and liqudity. The APIs can be easily
used to implement automated robots for trading algorithms.

.. toctree::
   :maxdepth: 2

   traders/index

:html:`</div><div class="col-md-6">`

For **businesses**, a Graphene network (e.g. BitShares) can be used to issue
their own token and let customers trade their shares either against predefined
assets, or freely against any other asset. This guide serves the purpose to
introduce the possibilities of 

.. toctree::
   :maxdepth: 2

   businesses/index

:html:`</div></div></div>`
