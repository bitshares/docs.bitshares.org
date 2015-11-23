****************
Simple Transfers
****************

A simple transfer operation moves funds from user ``A`` to user ``B``.
In contrast to most other blockchain-based financial networks, we do **not** use
*addresses* or *public keys* for transfers.

.. image:: transfer.png
        :alt: Simple transfer of $50c
        :width: 550px
        :align: center

Instead, all that is needed for transfers is:

* source account name
* destination account name
* funds (amount and asset)
* memo (optional)

A transfer may contain a memo with arbitrary text.

.. note:: The ``memo`` is **encrypted** by default can only be decrypted by the
   participants of the transfer! The transfer fee depends on the length of the
   memo!
