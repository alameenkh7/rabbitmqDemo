const amqp = require('amqplib');
const Promisemessage=require('../utilities/MyPromise');
const Config =require('../config/config')

amqp.connect(Config.test.url)
  .then((conn)=>{
    conn.createChannel().then((ch)=>{
      let q = "new queue";
      ch.assertQueue(q, {durable: false})
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
      ch.consume(q, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
      }, {noAck: true});
    })
    .catch(Promisemessage.errorMessage)
  })
  .catch(Promisemessage.errorMessage)
