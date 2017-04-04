****************
Permission Model
****************

We distinguish between two kinds of permissions:

* **Owner Permission**: This permission has administrative powers over the whole account and should be considered for 'backup' strategies.
* **Active Permission**: Allows to access funds and some account settings, but cannot change the owner permission and is thus considered the "online" permissions.

Both are implemented using `Elliptic Curve Cryptography`_ (ECC) with *public*
and *private* keys. :doc:`Read more <account-permissions>`.

.. _Elliptic Curve Cryptography: https://en.wikipedia.org/wiki/Elliptic_curve_cryptography

You can find the keys for your permissions in the ``Permissions`` tab:

.. image:: account-permissions.png
        :alt: Account Permissions
        :width: 550px
        :align: center
