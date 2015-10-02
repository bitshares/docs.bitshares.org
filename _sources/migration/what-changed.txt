*****************
What has Changed?
*****************

* **BitAssets are Contracts-For-Difference**:
  Our research has identified an improved mechanism to achieve a solid *peg* of
  bitAssets to its underlay. BitAssets like the bitUSD in BitShares 2.0 will
  always trade for *at least* the value of its underlying asset, i.e. $1.
  We have summarized the economical analysis and incentives for market
  participants for `bitAssets 2.0`_

* **Faster Blocks**:
  Initially, the BitShares 2.0 blockchain will come with 3 seconds block
  interval with the option to reduce down to 1 second if shareholders agree.

* **Industrial Performance**:
  BitShares 2.0 can support massive load and works well beyond 100k transactions
  per second. Find out how we achieve `industrial performance and scalability`_.

* **New Reactive UI**:
  Since some customers of BitShares 1.0 complained about the slow user
  interface that lacked several milli-seconds between actions, we reimplemented
  the whole wallet in a modern web framework that is as reactive as facebook
  and as user-friendly as humanly possible. The new BitShares UI will be an
  entirely browser-based wallet, with private keys maintained in the browser.
  We expect a flourishing ecosystem about forked and tweaked wallets based of
  our UI.

* **Accounts must be registered**:
  In BitShares 2.0 we have separated *authorities* from transaction partners.
  Hence, if Alice wants to send funds to Bob, it may be required that only
  Celine signs for that transaction. Also, BitShares 2.0 has `a referral program`_.
  Both features combined make it necessary that participants *register* an
  account on the blockchain.

* **Explicit Privacy**:
  The *TITAN* technology in BitShares 2.0 slowed down blockchain processing
  significantly. Because of this and because TITAN did not really offer good
  privacy, we eliminated TITAN as a default transaction feature. 
  Hence: **Account transactions are public now aswell.**
  However, since we recognize the value of financial privacy, we offer
  *blinded* transactions that hide the transfered *amount*, and *stealth*
  transactions to hide the sender and receiver. A combination of both is also
  possible.
 
* **Prices are _Fractions_**:
  To circumvent rounding errors, all prices in BitShares 2.0 are represented as
  fractions.

* **Delegates are now Witnessess and Payed Positions are now Budget Itmes**:
  Since we have separated the business part from the block producing part, we
  now call block producers (formaly known as *delegates*) witnesses, while the
  additional payed position for workers is called budget item.

.. _industrial performance and scalability: https://bitshares.org/technology/industrial-performance-and-scalability/
.. _bitAssets 2.0: https://bitshares.org/technology/price-stable-cryptocurrencies/
.. _a referral program: https://bitshares.org/technology/recurring-and-scheduled-payments/
