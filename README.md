# rabbitmqDemo
This is demo to learn rabbitmq

## how to run

1. `git clone git@github.com:alameenkh7/rabbitmqDemo.git`
2. `npm install`

## how to test rabbitmq

here I have included default my rabbitmq url in config/config.js if you want to test with your rabbitmq server 
Install RabbitMQ https://www.rabbitmq.com/download.html

## for getting management plugin 

type this command 
`rabbitmq-plugins enable rabbitmq_management` more details https://www.rabbitmq.com/management.html

The Web UI is located at: http://server-name:15672/


change the config url to dev instead of test. 

I created 3 input and 3 output file which are 

input file 
1. sender.js
2. newtask.js
3. fanoutinput.js

output file
1. reciever.js
2. worker.js
3. fanoutput.js

type cd server to go to server directory.

Testing first set of input and out put file

run 
`node sender.js`          

`node reciever.js` 

run both in different terminal . you can see that message send in sender file recieved in reciever file. 
If you go to rabbitmq management web ui you can see message in respective queue name.

testing second set of input and out put file

run 
`node newtask.js <yourmessage>.....`
  
`node worker.js`

here you can see that message will wait for the no of '.' after your message and 
if you open multiple terminal and send multiple message it follows a round robin architecture.

testing third set of input and out put file

run 
`node fanoutinput.js`

`node fanoutput.js`

here it is following a fanout exchange in rabbitmq for more information about fanout exchanges and exhanges go here https://www.rabbitmq.com/tutorials/amqp-concepts.html




