**************************************
Transfering Funds using the cli-wallet
**************************************

Once we have the :doc:`cli-wallet set up <cli-wallet-usage>`, we can
transfer funds easily with the following syntax:

::

   unlocked >> transfer <from> <to> <amount> <asset> <memo> <broadcast>

.. note:: In order to transfer, the wallet must be unlocked. If the
          broadcast flag is ``False``, the wallet will construct and
          sign, but **not** broadcast the transaction. This can be very
          useful for a cold storage setup or to verify transactions.

If `alice` wants to send `10 USD` to `bob`, she could call:::

    unlocked >> transfer alice bob 10 USD "a gift" true

The wallet will return the actual signed transaction.
