*********************************
Llamadas de Procedimiento Remoto
*********************************

Prerequisitos
############

Esta página asume que tienes un nodo completo o un monedero ejecutándose y 
escuchando el puerto``8090``, localmente.

.. note:: El conjunto de comandos disponibles depende de la aplicación a la que te conectes.

Formato de Llamada
##################

En Graphene, las llamadas RPC son sin estado y accesibles a través de llamadas 
RPC-HTTP con formato JSON normales. La estructura correcta de la llamada JSON es


.. code-block:: js

    {
     "jsonrpc": "2.0",
     "id": 1
     "method": "get_accounts",
     "params": [["1.2.0", "1.2.1"]],
    }

La llamada ``get_accounts`` está disponible en la API ``database`` de Nodo Completo y 
toma sólo un argumento que es una matriz de ids de cuenta (aquí ``["1.2.0", "1.2.1"]``).


Ejemplo de Llamada con `curl`
----------------------------

Esas llamadas pueden enviarse a través de ``curl``:

.. code-block:: sh

    curl --data '{"jsonrpc": "2.0", "method": "get_accounts", "params": [["1.2.0", "1.2.1"]], "id": 1}' http://127.0.0.1:8090/rpc

Llamadas completadas
---------------------

La API devolverá una respuesta en un formato JSON adecuado con el mismo ``id`` 
que la solicitud, para distinguir las llamadas siguientes.

.. code-block:: js

    {
     "id":1,
     "result":  ..data..
    }

Errores
--------

En caso de error, la respuesta resultante acarreará un atributo de ``error`` y 
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

Observaciones
#############

Comandos específicos del monedero, como ``transfer`` y realizar órdenes de mercado, 
sólo están disponibles si te conectas a ``cli_wallet`` porque sólo el monedero tiene 
las claves privadas y la capacidad de firma. Algunas llamadas sólo se ejecutarán si 
la cartera está desbloqueada.

El nodo completo ofrece un conjunto de API(s), de las cuales los las llamadas 
``database`` están disponibles a través de RPC. Las llamadas que están restringidas 
por defecto (por ejemplo ``network_node_api``) o que se han restringido por la configuración 
no son accesibles a través de RCP porque requieren un protocolo de estado completo (websocket) 
para iniciar sesión.
