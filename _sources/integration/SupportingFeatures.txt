*******************
Supporting Features
*******************

BitShares 2.0 offers some features that will make your integration easier and
more secure:

User Issued Assets
##################

Any participant can create and issue new (user-issued) assets. The potential
use cases for so called user-issued assets (UIA) are innumerable. On the one
hand, UIAs can be used as simple event tickets deposited on the customers
mobile phone to pass the entrance of a concert. On the other hand, they can be
used for crowd funding, ownership tracking or even to sell equity of a company
in form of stock.

Obviously, the regulations that apply to each kind of token vary widely and are
often different in every jurisdiction. Hence, BitShares comes with tools that
allow issuers to remain compliant with all applicable regulations when issuing
assets assuming regulators allow such assets in the first place. We will
discuss the tools and optional administrative rights given to the issuers of a
given UIA and provide a subset of possible use-cases in more detail.

Whitelists and Blacklists
#########################

Some 3rd party service providers may want to select which customers are allowed
to hold their assets , e.g. after verified their identity for KYC/AML. Those
services can use so called `whitelists` (or, alternatively, `blacklists`) of
their assets that will prevent unauthorized participants to use this particular
asset.

In BitShares 2.0, account names (life-time members only) and also user-issued
assets have their individual whitelists. Hence, if you issue an IOU on the
blockchain, you can define who can hold and trade your tokens, if you wish.

User whitelists on contrast can be used by independent KYC/AML providers to
state proper verification. An asset issuer may then use those providers to
oursource identity verification completely.

Hierarchical Corporate Accounts
###############################

BitShares designs permissions around people, rather than around cryptography,
making it easy to use. Every account can be controlled by any weighted
combination of other accounts and private keys. This creates a hierarchical
structure that reflects how permissions are organized in real life, and makes
multi-user control over funds easier than ever. Multi-user control is the
single biggest contributor to security, and, when used properly, it can
virtually eliminate the risk of theft due to hacking.

In BitShares 2.0 there is no real need for cold storage solutions. Just
construct your spending authority using a set of people in your company such as
CFO, CTO, and members of accounting and freely chose how much they can do.
