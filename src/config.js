const dev = {
  STRIPE_KEY: "pk_test_flTMdcCcJNQuwnP5AXDz3zF1",
  s3: {
    REGION: "us-west-2",
    BUCKET: "jtbdev99-note-app"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://9kkr3xq5u0.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_WLfSvmy13",
    APP_CLIENT_ID: "t5d4uu1bl11fggljgc39ns3ru",
    IDENTITY_POOL_ID: "us-east-2:d740626e-c8f9-496b-9fbe-3b8c60e39217"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_flTMdcCcJNQuwnP5AXDz3zF1",
  s3: {
    REGION: "us-west-2",
    BUCKET: "jtbdev99-note-app"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://yp7iywexzf.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_aiJlBMpqZ",
    APP_CLIENT_ID: "1otb3le59mvmb63edlgvbf14aj",
    IDENTITY_POOL_ID: "us-east-2:6c50e4e2-9072-4807-a599-c6835642148b"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};