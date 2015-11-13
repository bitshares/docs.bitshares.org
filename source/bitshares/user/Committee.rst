*********
Committee
*********

.. https://bitsharestalk.org/index.php/topic,19444.0/all.html
.. http://bitsharestalk.org/index.php?topic=19444.msg250969.msg#250969
.. http://bitsharestalk.org/index.php?topic=19444.msg250974.msg#250974


(under construction) 


Technical Realization
#####################

Creating a New Committee Member
*******************************

We can create a new committee member with:::

  >>> create_commitee_member account "url" true

Proposing a fee change
*******************************

Let's assume we want to propose a new fee for the account creation operation. We
want 5 BTS as basic fee and want premium names to cost 2000 BTS. Additionally,
a price per kbyte for the account creation transaction can be defined. We get

.. code-block:: json

     {
      "account_create_operation" : {
                "basic_fee"      : 500000,
                "premium_fee"    : 200000000,
                "price_per_kbyte": 100000}
     }

We propose the fee change for account ``<committee_member>`` with:::

  >>> propose_fee_change <committee_member> "2015-10-14T15:29:00" {"account_create_operation" : {"basic_fee": 500000, "premium_fee": 200000000, "price_per_kbyte": 100000}} false

Now we need to convince the other committee members to approve. We can do so on
the blockchain by asking them for approval with ::

  >>> approve_proposal <committee_member> "1.10.1" {"active_approvals_to_add" : ["init1", "init2", "init3", "init4", "init5", "init6", "init7", "init8", "init9", "init10"]} false

where ``1.10.1`` is the id of the proposal in question.
