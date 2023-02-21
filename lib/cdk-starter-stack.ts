import { RemovalPolicy, Stack, StackProps }  from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class CdkStarterStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Bucket(this, 'starter-bucket', {
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
