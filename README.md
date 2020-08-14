# Follow this instructions to build your first serverless app with Amplify.

This app contains a backend built with AWS SAM and a frontend that is using AWS Amplify.

This simple application comes with frontend and backend that says Hello and remembers everybody that it greets.

## Prerequisites for building this solution

1. You need to have an AWS account
   If you don't know how to do it check this [link](https://youtu.be/9_wo0FHtVmY)

2. Then you need to configure your AWS account in your computer and install AWS SAM. Follow this [link](https://aws.amazon.com/serverless/sam/) for instructions

3. Then you need to have AWS Amplify installed and configured in your computer, for that follow this [link](https://docs.amplify.aws/start/getting-started/installation/q/integration/react) for instructions

## Building the BACKEND

1. Go to the backend directory

```
$ npm init -y
```

2. Copy the file template.yml from base into your directory

```
$ cp base/template.yml template.yml
```

3. Create a hello directory in your project where your code will be.

```
$ mkdir hello
$ cd hello
$ npm init -y
```

4. Copy the handler.js file from base to this directory

```
$ cp ../base/handler.js handler.js
```

5. Deploy backend, do this from the backend directory

```
$ cd ..
$ sam deploy --guided
```

Put the right name to your application and accept all defaults
Wait for it to deploy.

6. Try it in POSTMAN, you will get an URL back

## Building the FRONTEND

1. Go to the client directory and install all dependencies

```
$ npm install
```

2. Run the application

```
$ npm start
```

3. Initialize Amplify

```
$ amplify init
```

4. Copy the index.js

```
$ cp base/index.js src/index.js
```

5. Copy the AWS config file and add the right values in there

```
$ cp base/aws-config.js src/aws-config.js
```

Modify the endpoint with the one you got from deploying the backend.

6. Replace App.js with the one in the base folder

```
$ cp base/App.js src/App.js
```

7. Ready to try :)

## Deploy app to the cloud

1. Open the Amplify console

```
$ amplify console
```

2. Put your project in github.

3. Connect your Amplify project to the github project.
   This is a mono repo, so you need to specify the folder as "client"

4. When that is done, the project will start building and deploying the frontend in the cloud.

5. You are ready :)
