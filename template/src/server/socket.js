export default function() {
  this.nuxt.hook('listen', (server, { host, port }) => {
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
      console.log('socket connected!');
    });
  });
}