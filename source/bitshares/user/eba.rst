**********************
Exchange Backed Assets
**********************

Exchange Backed Assets represent deposit receipts that are issued by a
centralized entity, such as exchanges, banks or other institutes. These
can either be interpreted as *I owe you* (IOUs) or certificates for a
deposit at that institute.

From the blockchain perspective, EBA are equivalent to a :doc:`uia` that
is created and issued by an exchange, bank or financial institute.
Hence, it is their responsibility to credit you with the corresponding
blockchain token (the EBA) on deposits.

Use Case
########

The most common use case would be a centralized exchange that allows
their users to deposit crypto currencies in their wallets. These
deposits are usually stored in their own database and the customers
internal account balance is matched accordingly. These database balances
serve as **deposit receipts** but obviously require some trust that the
database is properly secured against any kind of attacks.

Instead of increasing an internal account balance of a user, new shares
of an EBA can be issued to the user on deposits. Since EBAs are
blockchain tokens, they can be traded on the decentralized exchange
similar to any other exchange.

In order to reclaim his crypto tokens on their native blockchain, the
users sends back the EBAs to the institute who then destroy the EBAs and
transfer the corresponding asset back to its rightful owner.

Frequently Asked Questions
##########################

Since EBAs are implemented as UIA, you can read more about the
underlying technology on the :doc:`corresponding page <uia>`.

.. toctree::
   :maxdepth: 1

   assets-faq

Tutorials
#########

.. toctree::
  :maxdepth: 2

  ../tutorials/uia-create-gui
  ../tutorials/uia-create-manual
