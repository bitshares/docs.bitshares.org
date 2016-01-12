**************************************
How Committee Proposes a Change in Fee
**************************************

Create an Proposal
##################

Let's assume we want to propose a new fee for the account creation operation. We
want 5 BTS as basic fee and want premium names to cost 2000 BTS. Additionally,
a price per kbyte for the account creation transaction can be defined. We get

.. code-block:: js

     {
      "account_create_operation" : {
                "basic_fee"      : 500000,
                "premium_fee"    : 200000000,
                "price_per_kbyte": 100000}
     }

We propose the fee change for account ``<committee_member>`` with:::

  >>> propose_fee_change <committee_member> "2015-10-14T15:29:00" {"account_create_operation" : {"basic_fee": 500000, "premium_fee": 200000000, "price_per_kbyte": 100000}} false

Approve Proposal
################

Now we need to convince the other committee members to approve. We can do so on
the blockchain by asking them for approval with ::

  >>> approve_proposal <committee_member> "1.10.1" {"active_approvals_to_add" : ["<MY-COMMITTEE-MEMBER>"]} true

where ``1.10.1`` is the id of the proposal in question.
