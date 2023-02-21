import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CdkStarterStack } from '../lib/cdk-starter-stack';

const app = new App();

new CdkStarterStack(app, 'CdkStarterStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});