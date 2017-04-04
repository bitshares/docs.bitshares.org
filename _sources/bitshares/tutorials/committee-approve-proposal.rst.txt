**********************************************
How to Approve/Disapprove a Committee Proposal
**********************************************

Approve Proposal
################

Now we need to convince the other committee members to approve. We can do so on
the blockchain by asking them for approval with ::

  >>> approve_proposal <fee-paying-account> <proposal-id> {"active_approvals_to_add" : ["<MY-COMMITTEE-MEMBER>"]} true

where ``<proposal-id>`` takes the form ``1.10.xxx`` and identifies the
actual proposal to approve.

Removeing Approval
##################

A previous approval can also be removed if the proposal is not yet
expired, executed or within the preview period. This is done by:::

  >>> approve_proposal <fee-paying-account> <proposal-id> {"active_approvals_to_remove" : ["<MY-COMMITTEE-MEMBER>"]} true

Note that we now use ``active_approvals_to_remove`` instead of ``active_approvals_to_add``.
