*********
Committee
*********

Since Bitcoin struggled to reach a consensus about the size of their blocks,
the people in the cryptocurrency space realized that the governance of a DAC
should not be ignored. Hence, BitShares offers a tools to reach on-chain
consensus about business management decisions.

The BitShares blockchain has a set of parameters available that are subject of
shareholder approval. Shareholders can define their preferred set of parameters
and thereby create a so called *committee member* or alternatively vote for an
existing committee member. The BitShares committee consists of several *active*
committee members.

The BitShares ecosystem has a set of parameters available that are subject of
shareholder approval. Initially, BitShares has the following blockchain
parameters:

* **fee structure**:         *fess that have to be paid by customers for individual transactions*
* **block interval**:        *i.e. block interval, max size of block/transaction*
* **expiration parameters**: *i.e. maximum expiration interval*
* **witness parameters**:    *i.e. maximum amount of witnesses (block producers)*
* **committee parameters**:  *i.e. maximum amount of committee members*
* **witness pay**:           *payment for each witnesses per signed block*
* **worker budget**:         *available budget available for budget items (e.g. development)*

Please note that the given set of parameters serves as an example and that the
network's parameters are subject to change over time.

Additionally to defining the parameters any active witness can propose a
protocol or business upgrade (i.e. hard fork) which can be voted on (or against)
by shareholders. When the total votes for the hard fork are greater than the
median witness weight `w` then the hard fork takes effect.
