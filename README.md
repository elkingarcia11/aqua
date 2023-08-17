# AQUA Puerto Plata

A mobile and desktop-friendly web application that serves as a landing page for a collection of Airbnb properties.

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

To set up and install the project, install the following:

- [GitHub CLI](https://github.com/git-guides/install-git)
- Clone the repository: `git clone [repository_url]`
- [npm](https://docs.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/docs/install/)
- Install dependencies using npm or yarn: `npm install` or `yarn install`

## Configuration

Configure the environment variables for the project by creating a `.env` file and adding your Google Maps API Key:

## Prerequisites

Before running the project, ensure you have the following prerequisites:

- [ ] npm/yarn installed
- [ ] npm/yarn dependencies installed
- [ ] `.env` file created & configured 

## Usage

To use the project:

### Development

1. Run the development server: `npm run dev` or `yarn dev`
2. Open your browser and go to http://localhost:3000 to see the result.

### Production

To deploy this Next.js project on Google Cloud Platform, follow these steps:

1. Install Docker on your machine.
2. Build the Docker image of the application.
3. Tag the image with the name of the Artifact Registry project.
4. Push the project image to the Artifact Registry or Container Registry.
5. Deploy an instance of the image using Cloud Run to listen on port 80.
6. Verify the deployment on your website.

## Features

- Slideshow of images for each apartment
- Internationalization to cater to a multitude of foreign clients
- Filtering based on desired amount of people, views, bathrooms, and bedrooms
- Link to reserve for each apartment
- Directions and location information in case Airbnb information is faulty or difficult to understand


### Production Link

Visit [AQUA Puerto Plata](https://aquapuertoplata.com/) to interact with the project.


## Contact Information

For questions or feedback, feel free to reach out to us at elkingarcia.11@gmail.com.

## Acknowledgments

I would like to acknowledge Hotels.com and Bookings.com which this application was inspired by.
