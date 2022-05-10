var AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
// Load credentials and set region from JSON file

AWS.config.update({region: process.env.REGION});

var params = {
  name: process.env.CLUSTER_NAME, 
  version: process.env.VERSION
  
};

console.log(params)

//var instancePromise = new AWS.EKS({}).describeCluster(params).promise();
var instancePromise = new AWS.EKS({}).updateClusterVersion(params).promise();

    // Handle promise's fulfilled/rejected states
    instancePromise.then(
        function(data) {
        console.log(data);

        // Add tags to the instance
        }
    ).catch(
        function(err) {
        console.error(err, err.stack);
    });


console.log(process.env.CLUSTER_NAME)