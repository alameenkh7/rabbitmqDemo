const amqp = require('amqplib');
const Promisemessage=require('../utilities/MyPromise');
const Config =require('../config/config')

//console.log("the connection started");
amqp.connect(Config.test.url)
.then((conn)=>{
  //console.log("the connection success");
  var conn=conn;
  return conn.createChannel().then((ch)=>{
    //console.log("the data after creating channel",ch);
    let q ="new queue";
    ch.assertQueue(q,{durable:false});
    ch.sendToQueue(q,new Buffer("hello test"));
    console.log(" [x] Sent 'test message'");
  }).then(()=>{
    Promisemessage.delay(500).then(()=>{
      conn.close();
      process.exit(0);
    })
    .catch(Promisemessage.errorMessage)
  })
  .catch(Promisemessage.errorMessage);
})
.catch(Promisemessage.errorMessage);
