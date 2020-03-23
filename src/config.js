export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_flTMdcCcJNQuwnP5AXDz3zF1",
  s3: {
    REGION: "us-west-2",
    BUCKET: "jtbdev99-note-app"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://44me9kk7v7.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_n6l89r4lR",
    APP_CLIENT_ID: "4v8t7cbd7ahb9dml2d068l9l55",
    IDENTITY_POOL_ID: "us-east-2:ccc5f09a-c90f-44ba-ab28-709f67aeb251"
  }
};
