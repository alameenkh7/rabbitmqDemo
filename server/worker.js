const amqp = require('amqplib');
const Promisemessage = require('../utilities/MyPromise');
const Config = require('../config/config')

amqp.connect(Config.test.url)
  .then((conn) => {
    conn.createChannel().then((ch) => {
      let q = "test_queue";
      ch.assertQueue(q, {
        durable: true
      });
      console.log("waiting for message in %s press CTRL + x to exit", q);
      ch.consume(q, function(msg) {
        var sec = msg.content.toString().split('.').length - 1;
        console.log("the message recieve is ", msg.content.toString());
        setTimeout(function() {
          console.log(" [x] Done");
          console.log("this one waited for %d seconds",sec*3000);
        }, sec* 3000);
      },{noAck :true})
    }).catch(Promisemessage.errorMessage)
  })
  .catch(Promisemessage.errorMessage);
