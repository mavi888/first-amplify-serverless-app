"use strict";

const AWS = require("aws-sdk");
let dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "ExampleTable";

exports.saveHello = async (event) => {
  console.log("hola");
  const name = event.queryStringParameters.name;

  const item = {
    name: name,
    date: Date.now(),
  };

  console.log(item);
  const savedItem = await saveItem(item);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(savedItem),
  };
};

exports.getHello = async (event) => {
  const name = event.queryStringParameters.name;

  try {
    const item = await getItem(name);
    console.log(item);

    if (item.date) {
      const d = new Date(item.date);

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: `Was greeted on ${d.getDate()}/${
          d.getMonth() + 1
        }/${d.getFullYear()}`,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: "Nobody was greeted with that name",
    };
  }
};

async function getItem(name) {
  console.log("getItem");

  const params = {
    Key: {
      name: name,
    },
    TableName: TABLE_NAME,
  };

  console.log(params);

  return dynamo
    .get(params)
    .promise()
    .then((result) => {
      console.log(result);
      return result.Item;
    });
}

async function saveItem(item) {
  const params = {
    TableName: TABLE_NAME,
    Item: item,
  };

  console.log(params);

  return dynamo
    .put(params)
    .promise()
    .then(() => {
      return item;
    });
}
