****************
Permission Model
****************

We distinguish between two kinds of permissions:

* **Owner Permission**: Owns and controls an account but not its funds
* **Active Permission**: Owns an account's funds but cannot control the account settings.

Both are implemented using `Elliptic Curve Cryptography`_ (ECC) with *public*
and *private* keys. :doc:`Read more <account-permissions>`.

.. _Elliptic Curve Cryptography: https://en.wikipedia.org/wiki/Elliptic_curve_cryptography

You can find the keys for your permissions in the ``Permissions`` tab:

.. image:: account-permissions.png
        :alt: Account Permissions
        :width: 550px
        :align: center
