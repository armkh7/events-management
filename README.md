# Events Management Application

Events management application, implemented with React JS

## Installation

For the installation need to follow the below steps

```bash
git clone https://github.com/armkh7/events-management.git
cd events-management
```

As this project is using AWS tools like Amplify, Cognito, AppSync, DynamoDB, need to make sure that you have amplify client installed on your local machine. So, please run the following command if you don't have it installed already

```bash
npm install -g @aws-amplify/cli
```

After amplify client installation please run the following command in the project directory and follow the steps. 
During the steps there may be need to do a login via AWS Profile.

**Note: The name of the AWS Amplify App is `reactevents`**

```bash
amplify pull
```

After the above steps are done, there is need to do the following

```bash
npm install

npm start
```
