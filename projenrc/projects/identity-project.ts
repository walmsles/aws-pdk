/*! Copyright [Amazon.com](http://amazon.com/), Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0 */
import { Project } from "projen";
import { Stability } from "projen/lib/cdk";
import { PDKProject, PDK_NAMESPACE } from "../abstract/pdk-project";

/**
 * Contains configuration for the IdentityProject.
 */
export class IdentityProject extends PDKProject {
  constructor(parent: Project) {
    super({
      parent,
      author: "AWS APJ COPE",
      authorAddress: "apj-cope@amazon.com",
      defaultReleaseBranch: "mainline",
      name: "identity",
      keywords: ["aws", "pdk", "jsii", "projen"],
      repositoryUrl: "https://github.com/aws/aws-pdk",
      devDeps: [
        "projen",
        "aws-cdk-lib",
        "constructs",
        "cdk-nag",
        "@aws-cdk/aws-cognito-identitypool-alpha",
      ],
      peerDeps: [
        "projen",
        "aws-cdk-lib",
        "constructs",
        "cdk-nag",
        "@aws-cdk/aws-cognito-identitypool-alpha",
      ],
      deps: [`${PDK_NAMESPACE}pdk-nag@^0.x`],
      stability: Stability.STABLE,
    });
  }
}
