import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Repository } from "aws-cdk-lib/aws-ecr";
import { Construct } from "constructs";

export class CdkEcrAutoDeleteImagesTestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Repository(this, "ImageRepository1", {
      repositoryName: "name01new",
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteImages: true,
    });

    new Repository(this, "ImageRepository2", {
      repositoryName: "name02",
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteImages: true,
    });
  }
}
