/**
 * @author Robin Duda
 *
 * Parses command line parameters.
 *
 * Never run on ports < 1024, rewrite the ports.
 *
 * examples:
 * node bin/startup master <port> - runs the backend connector.
 * node bin/startup client "node.server.1" "Public Room" <listenport> <connector-host> <connector-port>
 * node bin/startup webserver <port> - serves the web interface on specified port.
 *
 * You may also run all the parts in the same instance, not recommended..
 */

client = process.argv[2] == 'client';

module.exports = {
    chatserver: {
        is: client,
        serverName: (client) ? process.argv[3] : process.argv[2],
        defaultRoomName: (client) ? process.argv[4] : process.argv[3],
        websockPort: (client) ? process.argv[5] : process.argv[4],
        backendHost: (client) ? process.argv[6] : process.argv[5],
        backendPort: (client) ? process.argv[7] : process.argv[6]
    }


};