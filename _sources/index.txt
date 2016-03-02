.. role:: html(raw)
   :format: html

*************************************
Welcome to the Graphene Documentation
*************************************

The developers of BitShares formed Cryptonomex to monetize the technology,
experience, reputation and good will they accumulated during their first two
years of development and operations. Much of that technology is embodied in
Graphene™, an industrial strength software platform for deploying third
generation cryptographically secure decentralized ledgers known as block chains. 

Graphene based systems have orders of magnitude better performance than
first-generation Bitcoin-derived systems or even the second generation "Bitcoin
2.0" systems that constitute our current closest competitors. Graphene based
systems go beyond mere "checkbook" style payments to offer a broad range of
financial services distinguished by their transparency and inherent
incorruptibility.

Graphene technology is already developed and deployed. It will be generating
profits in multiple industries before the end of 2015. The purpose of this
round of capital is to scale and proliferate the technology into many more
applications, industries, partnerships and customer relationships.  We intend
to capture market share and grow network effect while we continue to extend our
substantial technical lead in the industry. 

This page documents the `Graphene`_ technology built by `Cryptonomex`_. You can
see Graphene as a toolkit for real-time blockchains. We separated the
documentation into smaller parts for convenience and for the sake of easy
location of relevant information.

.. _Cryptonomex: http://cryptonomex.com
.. _Graphene: https://github.com/cryptonomex/graphene

Recent Updates
##############

.. r!date +\%y/\%m/\%d

* ``16/03/02`` :doc:`bitshares/user/referal-program`
* ``16/03/01`` :doc:`bitshares/tutorials/cli-wallet-usage`, :doc:`bitshares/tutorials/transfer-funds-cli`, :doc:`bitshares/user/voting`, :doc:`bitshares/tutorials/voting`
* ``16/02/13`` Huge improvements in the :doc:`api/index`
* ``16/02/08`` :doc:`bitshares/user/committee`, :doc:`bitshares/tutorials/committee-approve-proposal`, :doc:`bitshares/user/vesting`
* ``16/02/01`` :doc:`integration/merchants/merchant-protocol`, Added search to the navigation
* ``16/01/19`` :doc:`testnet/index`, :doc:`bitshares/tutorials/pm-create-manual`, :doc:`bitshares/user/eba`
* ``16/01/13`` :doc:`bitshares/tutorials/uia-update-manual`, :doc:`bitshares/tutorials/uia-create-manual`, :doc:`bitshares/tutorials/uia-create-gui`, :doc:`integration/network-setup`, :doc:`integration/tutorials/index`
* ``16/01/12`` :doc:`bitshares/user/assets`, :doc:`bitshares/tutorials/uia-create-manual` :doc:`bitshares/tutorials/mpa-create-manual`, :doc:`bitshares/user/assets-faq`, :doc:`bitshares/user/privbta`, :doc:`bitshares/tutorials/publish-feed`, :doc:`bitshares/user/pm`, :doc:`bitshares/tutorials/pm-create-manual`, :doc:`bitshares/tutorials/pm-close-manual`

..
 * ``16/01/07`` :doc:`bitshares/user/uia`, :doc:`bitshares/tutorials/uia-create-gui`, :doc:`bitshares/tutorials/uia-create-manual`
 * ``16/01/06`` :doc:`bitshares/tutorials/witness-change-key`
 * ``15/12/21`` :doc:`bitshares/user/worker`, :doc:`bitshares/user/fba`, :doc:`bitshares/developers/funding`, :doc:`bitshares/developers/bsips`
 * ``15/12/18`` :doc:`bitshares/papers/index`: Release Candiate for the *BitShares: General Overview* whitepaper
 * ``15/12/04`` :doc:`bitshares/user/account-permissions`, :doc:`bitshares/user/transactions-proposed`
 * ``15/12/03`` :doc:`bitshares/tutorials/construct-transaction`, :doc:`bitshares/tutorials/propose-transaction`
 * ``15/12/03`` :doc:`bitshares/tutorials/index`, :doc:`bitshares/tutorials/confidential-transactions`, :doc:`bitshares/user/committee`, :doc:`bitshares/tutorials/worker-budget`, :doc:`bitshares/user/shareholder`, :doc:`bitshares/user/worker`, :doc:`integration/often-used-calls`, :doc:`integration/merchants/merchant-protocol`, :doc:`integration/merchants/login-protocol`
 * ``15/11/30`` :doc:`bitshares/user/dex-margin-mechanics`
 * ``15/11/26`` :doc:`bitshares/user/first-steps-users`, :doc:`bitshares/user/you-should-know`, :doc:`bitshares/user/assets`
 * ``15/11/23`` User Guide updates: :doc:`bitshares/user/transactions`, :doc:`bitshares/user/dex`, :doc:`bitshares/user/security`
 * ``15/11/13`` Refactoring, updates for: :doc:`integration/index`
 * ``15/11/10`` Added MUSE blockchain: :doc:`muse/index`
 * ``15/11/01`` Release of :html:`<a href="_downloads/bitshares-financial-platform.pdf" onclick="ga('set', 'nonInteraction', false);ga('send', 'event', { eventCategory: 'download', eventAction: 'click', eventLabel: 'BitShares 2.0: Financial Smart Contract Platform'});">BitShares 2.0: Financial Smart Contract Platform</a> whitepaper`

Blockchain Specific Guides
##########################

The Graphene Technology has been applied to several blockchain already.
BitShares 2.0 has been the first application of Graphene technology and you will
be able to find almost everything feature implemented in BitShares 2.0. Further
blockchains will be added independenly.

:html:`<div class="container-fluid"><div class="row"><div class="col-md-6">`

`BitShares 2.0`_ is a Financial Smart Contracts platform that enables trading
of digital assets and has market-pegged assets that track the value of their
underlying asset (e.g. bitUSD tracking the U.S. dollar).

.. _BitShares 2.0: http://BitShares.org

.. toctree::
   :maxdepth: 2

   bitshares/index

:html:`</div><div class="col-md-6">`

`MUSE`_ is a public ledger specifically tailored for the Music Industry that
keeps track of worldwide copyrights. It is an ownerless, automated, globally
distributed, Peer-to-Peer network that is both transparent and open to all.

.. _MUSE: http://museblockchain.com

.. toctree::
   :maxdepth: 2

   muse/index

:html:`</div></div></div>`

Integration Guide
#################

.. toctree::
   :maxdepth: 2

   integration/index

API Guide
#########

.. toctree::
   :maxdepth: 2

   api/index

Development
###########

.. toctree::
   :maxdepth: 1

   development/index
   testnet/index

Contribute
##########

.. toctree::
   :maxdepth: 2

   meta/index

.. comments
   ReStructure Syntax can be found here:
   openalea.gforge.inria.fr/doc/openalea/doc/_build/html/source/sphinx/rest_syntax.html
   http://docutils.sourceforge.net/rst.html
   Sphinx Specific ReStructure:
   http://sphinx-doc.org/rest.html
