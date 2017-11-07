const amqp = require('amqplib');
const Promisemessage = require('../utilities/MyPromise');
const Config = require('../config/config')


amqp.connect(Config.test.url)
  .then((conn) => {
    var conn=conn;
    conn.createChannel().then((ch) => {
      let q = "test_queue";
      let msg = process.argv.slice(2).join('') || "Testing!";
      ch.assertQueue(q, {
        durable: true
      });
      ch.sendToQueue(q, new Buffer(msg), {
        persistent: true
      });
      console.log(" [x] Sent '%s'", msg);
    })
    .then(()=>{
      Promisemessage.delay(500).then(()=>{
        conn.close();
        process.exit(0)
      }).catch(Promisemessage.errorMessage);
    })
    .catch(Promisemessage.errorMessage);
  })
  .catch(Promisemessage.errorMessage);
