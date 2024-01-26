# AQUA Puerto Plata (Web)

AQUA Puerto Plata is a user-friendly web application designed for both mobile and desktop devices. It serves as a landing page for a collection of Airbnb properties.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Prerequisites](#prerequisites)
4. [Usage](#usage)
5. [Features](#features)
6. [Production Link](#production-link)
7. [Contact Information](#contact-information)
8. [Acknowledgments](#acknowledgments)

## Installation

To set up and install the project, follow these steps:

- [GitHub CLI](https://github.com/git-guides/install-git)
- Clone the repository: `git clone https://github.com/elkingarcia11/aqua_v2.git`
- [npm](https://docs.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/docs/install/)
- Install dependencies using npm or yarn: `npm install` or `yarn install`

- Install the [GitHub CLI](https://github.com/git-guides/install-git)
- Clone the repository: `git clone https://github.com/elkingarcia11/aqua_v2.git`
- Install [npm](https://docs.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/docs/install/)
- Install project dependencies using npm or yarn: `npm install` or `yarn install`

## Configuration

Configure the project's environment variables by creating a `.env` file and adding your Google Maps API Key.

## Prerequisites

Before running the project, ensure you have the following prerequisites:

- [ ] npm/yarn installed
- [ ] Project dependencies installed using npm/yarn
- [ ] `.env` file created and configured

## Usage

To use the project:

### Deploying Next.js Project on localhost

1. Run the development server: `npm run dev` or `yarn dev`
2. Open your browser and navigate to http://localhost:3000 to see the result.

## Deploying Next.js Project on Google Cloud Platform with CI/CD

Follow these steps to deploy your Next.js project on Google Cloud Platform (GCP):

### 1. Enable Secret Manager API
Enable the Secret Manager API on your GCP project.

### 2. Create a Secret for API Key
Create a secret in Secret Manager to securely store your API key.

### 3. Cloud Build Setup
- Navigate to Cloud Build and create a connection between your source code repository and Cloud Build.
- Configure access to your repository to allow Cloud Build to fetch the source code.
- Grant the Secret Manager Secret Accessor (roles/secretmanager.secretAccessor) IAM role for the secret to the Cloud Build service account.

### 4. Cloud Run Service
- Create a Cloud Run service for hosting your Next.js application.

### 5. Continuous Deployment
- Set up continuous deployment for your project by configuring Cloud Build to deploy new revisions from your source code repository.

### 6. Cloud Build and Cloud Run Integration
- Link your source code repository with the Cloud Run service to streamline the deployment process.

### 7. Update Cloud Build Configuration
- Generate or update the `cloudbuild.yaml` file in your project.
- Include the necessary steps to retrieve the API key secret from Secret Manager and add it to your project's `.env` file during the build process.

### 8. Re-run Build Trigger
Rerun the Cloud Build trigger to initiate the build process. This will include the new configuration for handling API keys.

By following these steps, you'll deploy your Next.js project on Google Cloud Platform, ensuring secure management of sensitive information like API keys. Continuous deployment through Cloud Build and Cloud Run integration simplifies the deployment workflow and keeps your application up-to-date with the latest revisions.

## Features

- Engaging slideshow of images for each apartment
- Multilingual support catering to diverse international clients
- Smart filtering based on desired guest capacity, views, bathrooms, and bedrooms
- Direct reservation links for each apartment
- Clear directions and location information to address Airbnb-related uncertainties

### Production Link

Explore the [AQUA Puerto Plata](https://aquapuertoplata.com/) project.

## Contact Information

For questions, feedback, or inquiries, please don't hesitate to contact me via email at elkingarcia.11@gmail.com or connect with me on [LinkedIn](https://www.linkedin.com/in/elkingarcia11/).

## Acknowledgments

I would like to acknowledge Hotels.com and Bookings.com, which inspired this application.
