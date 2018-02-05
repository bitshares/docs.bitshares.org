**********************************
Restricciones de acceso a la API 
**********************************

Para acceder al API-0 sin restricciones, llamamos hacer uso de la habitual
llamadas RPC *sin estado*. Para acceder al API-1 restringido, debemos usar
la conexión de websocket con devoluciones de llamada para acceder a API-1:

* API-0: consulta *sin estado*
* API-1: interacción *autenticada*

Esquema de Autorización
#######################

Puedes restringir las APIs a usuarios particulares especificando un archivo ``api-access`` en `` config.ini`` o usando ``--api-access/full/path/to/api-access.json` `comando de nodo de inicio. Aquí hay un archivo de ejemplo ``apiaccess`` que permite al usuario ``bytemaster`` con la contraseña ``supersecret`` para acceder a cuatro API diferentes, mientras
que permite a cualquier otro usuario acceder a las tres API públicas necesarias para usar la billetera:::

    {
       "permission_map" :
       [
          [
             "bytemaster",
             {
                "password_hash_b64" : "9e9GF7ooXVb9k4BoSfNIPTelXeGOZ5DrgOYMj94elaY=",
                "password_salt_b64" : "INDdM6iCi/8=",
                "allowed_apis" : ["database_api", "network_broadcast_api", "history_api", "network_node_api"]
             }
          ],
          [
             "*",
             {
                "password_hash_b64" : "*",
                "password_salt_b64" : "*",
                "allowed_apis" : ["database_api", "network_broadcast_api", "history_api"]
             }
          ]
       ]
    }

Las contraseñas se almacenan en ``base64`` como 'hashes' con 'salt' ``sha256``. Un simple script de Python, ``saltpass.py`` está disponible para obtener valores 'hash' y valores 'salt' de una contraseña. Un solo asterisco ``*`` se puede especificar como hash de nombre de usuario o de contraseña para aceptar cualquier valor.

Con la configuración anterior, aquí hay un ejemplo de como llamar``add_node`` desde la API ``network_node``:::

    {"id":1, "method":"call", "params":[1,"login",["bytemaster", "supersecret"]]}
    {"id":2, "method":"call", "params":[1,"network_node",[]]}
    {"id":3, "method":"call", "params":[2,"add_node",["127.0.0.1:9090"]]}

Ten en cuenta que la llamada a ``network_node`` es necesaria para obtener la API correcta
identificador para la red API. No se garantiza que la red API 
identificador siempre será ``2``.


Como la API ``network_node`` requiere el inicio de sesión, solo se puede acceder a través del
websocket RPC. Nuestra documentación `doxygen`_ contiene la más actualizada
información sobre las APIs.


Login In
#########

.. doxygenclass:: graphene::app::login_api
   :members:

.. _doxygen: http://bitshares.org/doxygen
