---
title: "Buddy vs. Travis CI: A Detailed Comparison"
date: 2021-02-11T11:57:52.397Z
published: true
tags:
  - guest-post
  - CI-CD
canonical_url: true
description: I wrote an article for The Devops Corner comparing features of
  BuddyCI and TravisCI.
---
> [Continuous Integration(CI)](https://en.wikipedia.org/wiki/Continuous_integration) and [Continuous Deployment(CD](https://en.wikipedia.org/wiki/Continuous_deployment)) are both software development techniques mainly used in modern development practices. The concept of CI is a process that involves the practice of merging all developers' working branches on a shared repository several times a day. Each branch goes through an automated build check which in turn runs tests to ensure no errors are found before merging. The main goal of CI is to prevent integration problems, referred to as "integration hell" in its early adoption. On the other hand,  Continuous Deployment is closely related to Continuous Integration and refers to a software engineering approach in which software functionalities are delivered frequently through automated deployments.
> In this post, we’ll take a look at two of the most popular CI/CD tools and outline the features of both, and also get to know each of them better. Let’s get right into it, shall we?

## What is Buddy?

[Buddy](https://buddy.works/) is a smart CI/CD tool for development designed to provide a suite of automation tools that modern development teams can use to accelerate their development lifecycle from coding, to testing and delivering the products to their customers. It uses delivery pipelines to build, test and deploy software from [GitHub](https://en.wikipedia.org/wiki/GitHub), [BitBucket](https://en.wikipedia.org/wiki/Bitbucket), and [GitLab](https://en.wikipedia.org/wiki/GitLab). The pipelines are created with over 100 ready-to-use actions that can be set up in different ways.

![](https://paper-attachments.dropbox.com/s_E2A5020A16692F11AD6D6D1650A197ED486465DEE7728C5E82E095B4FBB8B03E_1565680135825_Screen+Shot+2019-08-13+at+8.08.38+AM.png)

Buddy is configured to perform predefined actions in a sequence which are called Pipelines. These pipelines can be triggered automatically on push, manually, or recurrently. Let’s take a look at some features Buddy comes bundled with.

## Key Features

Buddy offers the following benefits:

* Native Docker support.
* Flexible Build Configuration - Allows both UI and YAML configuration for creating Pipelines.
* Over 100+ ready-to-use actions.
* Support Instant Deployments to FTP/SFTP, AWS, Google Cloud, Digital Ocean, Heroku, Kubernetes, etc.
* Integration with GitHub, GitLab, and BitBucket out of the box.
* Builds are run in isolated containers with cached dependencies.
* 5-minute setup of the complete environment.


  ![Demo of Buddy Workflow](https://paper-attachments.dropbox.com/s_E2A5020A16692F11AD6D6D1650A197ED486465DEE7728C5E82E095B4FBB8B03E_1566143344179_3w9Yy6a00q.gif)

## What is Travis CI?

Travis CI is a hosted continuous integration service that is free for open-source projects and used to build and test software projects. Travis CI is focused on enabling users to quickly test their code as it’s being deployed. It has support for both small and large code changes, and it watches when a change is detected, It can provide feedback if the change was successful or not.  Travis CI is configured by adding a file named `.travis.yml`, which is a [YAML](https://en.wikipedia.org/wiki/YAML) format text file, to the root directory of the repository.

![](https://paper-attachments.dropbox.com/s_E2A5020A16692F11AD6D6D1650A197ED486465DEE7728C5E82E095B4FBB8B03E_1565680945160_Screen+Shot+2019-08-13+at+8.22.09+AM.png)

Travis CI has support for container builds, and also supports Linux Ubuntu and Mac OS platforms as well as have support for other different programming languages, such as JavaScript, Ruby, PHP, Java, C#, and a lot more.

## Key Features

* Setup in seconds- Getting up and running with Travis CI is as easy as enabling a project, adding basic build instructions to your project, and committing code.
* Pull Request Support - Test every pull request in your project before it gets merged.
* Bundled with support for 20 different languages out of the box, including Javascript and Node.js, Ruby, PHP, Python, Mac/iOS, as well as Docker.
* Different Platform support- Pre-installed database services and can simply be enabled in your build configuration, MySQL, PostgreSQL, ElasticSearch, Redis, Memcached, etc.
* Supports automatic deployment for passing builds.

  ![Demo of Travis CI Workflow](https://paper-attachments.dropbox.com/s_E2A5020A16692F11AD6D6D1650A197ED486465DEE7728C5E82E095B4FBB8B03E_1566143106882_J0bzM1uvQ8.gif)

## Detailed Comparison Between Buddy vs Travis CI

|                                   | Buddy                                                                                                                       | Travis CI                                                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Build Configuration**           | All configurations are driven by the web platform and as well as a YAML file depending on the option you decide to go with. | All configurations are driven by YAML files within the code.                                                          |
| **Web UI**                        | Intuitive UI as well as ability to get up and running in 5 minutes and setup configuration on the UI or with YAML files.    | Decent UI that outlines all the benefits of the platform but one will have to set up configuration using a YAML file. |
| **Continuous Delivery Pipelines** | With Buddy, you can define multiple actions for a pipeline. I.e upload files to a server and update assets on every push.   | Travis has a similar workflow which is called Build Stages. It allows you to group and build jobs in parallel.        |
| **Docker Support**                | Buddy comes bundled with Docker support.                                                                                    | Travis CI support Docker only in a specific environment. It doesn’t have support for Docker on macOS at the moment.   |
| **Version Control**               | Buddy is available on both GitHub, GitLab, and BitBucket.                                                                   | Travis CI only offers limited support for projects hosted on GitHub.                                                  |
| **Platforms**                     | Buddy is compatible with all platforms including Mac and Linux.                                                             | Travis has support for only Mac, Linux, and iOS platforms.                                                            |

## Wrapping Up

In this article, We have seen a comparison between Buddy and Travis CI automation tools and we looked at both of them extensively. Now that we have a good understanding of what Buddy and Travis CI can do and also have an idea of the best use case for each of the tools. With this, we can then go ahead and decide which tool to use for our projects going forward.