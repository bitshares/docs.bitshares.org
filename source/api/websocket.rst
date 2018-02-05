*******************************
Llamadas y Notificaciones de Websocket
*******************************

Prerequisitos
############

Esta página asume que tienes un nodo completo ejecutándose y escuchando el 
puerto ``8090``, localmente.


.. note:: Si también deseas ejecutar un monedero, elige puertos diferentes y 
          asegúrate de no intentar llamar a métodos en el monedero que sólo están 
          disponibles para la API blockchain.

Formato de Llamada
##################

En Graphene, las llamadas de Websocket son estables y accesibles a través de una conexión 
de websocket con formato JSON. La estructura correcta de la llamada JSON es


.. code-block:: js

     {
      "id":1,
      "method":"call",
      "params":[
                0,
                "get_accounts",
                [["1.2.0"]]
               ]
     }

Los parámetros ``params`` tienen la siguiente estructura:

.. code-block:: js

     [API-identifier, Method-to-Call, Call-Parameters]

En el ejemplo anterior, consultamos la API ``database`` que lleva el 
identificador ``0`` en nuestro ejemplo (ver más detalles a continuación).


Llamada Ejemplo con `wscat`
-------------------------

Lo siguiente mostrará el uso de las conexiones websocket. Hacemos uso de la 
aplicación ``wscat`` disponible a través de ``npm``:


.. code-block:: sh

    npm install -g wscat

Una llamada no-restringida contra un nodo-completo toma la forma:

.. code-block:: sh
    
    wscat -c ws://127.0.0.1:8090
    > {"id":1, "method":"call", "params":[0,"get_accounts",[["1.2.0"]]]}

Llamadas Completadas
---------------------

La API devolverá una respuesta formateada JSON adecuada con el mismo ``id``
como la solicitud para distinguir las llamadas siguientes.


.. code-block:: js

    {
     "id":1,
     "result":  ..data..
    }

Errores
-------

En caso de error, la respuesta resultante tendrá un atributo ``error`` y
una descripción detallada:

.. code-block:: js

    {
      "id": 0
      "error": {
        "data": {
          "code": error-code,
          "name": " .. name of exception .."
          "message": " .. message of exception ..",
          "stack": [ .. stack trace .. ],
        },
        "code": 1,
      },
    }

.. _requestingAPIaccess:

Solicitar acceso a la API
#########################

El nodo completo de Graphene ofrece una amplia gama de APIs a las que se puede 
acceder mediante websockets. El procedimiento funciona de la siguiente manera:


1. Login al Nodo Completo
2. Solicita acceso a una API
3. Obtener el identificador API
4. Métodos de llamada de una API específica proporcionando el identificador

Encuentra a continuación una lista de API disponibles:

.. toctree::
   :maxdepth: 1

   database
   history
   network_broadcast
   network_node

1. Login
--------

Lo primero que debemos hacer es *login*::

    > {"id":2,"method":"call","params":[1,"login",["",""]]}
    < {"id":2,"result":true}

Si tienes :doc:`acceso restringido <./access>`se te puede solicitar que pongas 
un ``username``y``pasword``, según corresponda. Además, deberias verificar que 
el ``result`` da una confirmación positiva a tu inicio de sesión.


2. Solicitar acceso a una API 
------------------------------

La mayoría de los datos se pueden consultar desde la :doc:`database`-API a 
la que *registrarse* con la siguiente llamada:::

    > {"id":2,"method":"call","params":[1,"database",[]]}

3. Obtenga el identificador de API 
-----------------------------------

Después de solicitar el acceso, el nodo completo negará el acceso o devolverá 
un identificador para ser utilizado en futuras llamadas::

    < {"id":2,"result":2}

¡El ``result``será nuestro identificador para la base de datos de la API, en la 
posterior y llamada`` DATABASE_API_ID``!


4. Métodos de llamada de una especifica API, proporcionando el identificador
-----------------------------------------------------------------------------

Ahora podremos llamar cualquier método disponible en el ``database`` API via:::

    > {"id":1, "method":"call", "params":[DATABASE_API_ID,"get_accounts",[["1.2.0"]]]}

Notificaciones Database
######################

En Graphene, a conexión del websocket es usada para las notificaciones cuando los 
objetos de la base de datos cambian o se produce algún evento en particular (como pedidos completos).


Tenemos las siguientes suscripciones disponibles:

* ``set_subscribe_callback( int identifier, bool clear_filter )``:
     Para simplificar el avance, se puede registrar una devolución de la llamada de suscripción global.
     Cada notificación iniciada por el nodo completo llevará un particular
     `` id`` como lo define el usuario con el parámetro ``identifier``.
* ``set_pending_transaction_callback(int identifier)``:
     Notificaciones para transacciones entrantes *no confirmadas*.
* ``set_block_applied_callback(blockid)``:
     Da una notificación cada vez que se aplica el `` blockid`` de bloque es aplicado 
     a la blockchain
* ``subscribe_to_market(int identifier, asset_id a, asset_id b))``:
    Se suscribe a los cambios del mercado en el mercado ``a:b`` y envía notificaciones con
    id ``identificador``.
* ``get_full_accounts(array account_ids, bool subscribe)``:
    Devuelve el objeto de cuenta completo para las cuentas en la matriz ``account_ids`
     y se suscribe a cambiado a esa cuenta si ``subscribe`` está configurado para
     ``True``.
   
Primero obtengamos una devolución de llamada de suscripción global para distinguir su
notificaciones de llamadas RPC regulares:::

    > {"id":4,"method":"call","params":[DATABASE_API_ID,"set_subscribe_callback",[SUBSCRIPTION_ID, true]]}

Esta llamada anterior registrará ``SUBSCRIPTION_ID`` como id para las notificaciones.

Ahora, cada vez que obtienes un objeto del testigo (por ejemplo, a través de ``get_objects``)
se suscribirá automáticamente a cualquier cambio futuro de ese objeto.

Después de llamar a ``set_subscribe_callback`` el testigo comenzará a enviar avisos
cada vez que el objeto cambia:::

    < {
        "method": "notice"
        "params": [
            SUBSCRIPTION_ID, 
            [[
                { "id": "2.1.0", ...  },
                { "id": ...  },
                { "id": ...  },
                { "id": ...  }
            ]]
        ], 
    }

Sesión de ejemplo
#################

Aquí hay un ejemplo de una sesión completa:::

  > {"method": "call", "params": [1, "login", ["", ""]], "id": 2}
  < {"id":2,"result":true}
  > {"method": "call", "params": [1, "database", []], "id": 3}
  < {"id":3,"result":2}
  > {"method": "call", "params": [1, "history", []], "id": 4}
  < {"id":4,"result":3}
  > {"method": "call", "params": [2, "set_subscribe_callback", [5, false]], "id": 6}
  < {"id":6,"result":null}
  > {"method": "call", "params": [2, "get_objects", [["2.1.0"]]], "id": 7}
  (muchos datos vienen a partir de este momento)
