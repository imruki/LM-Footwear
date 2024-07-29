# LM-Footwear

An E-Commerce shoes store built with ReactJS and Bootstrap for the frontend and Strapi for the backend.

## Features

- User authentication and authorization
- Product listing and details
- Shopping cart functionality
- Responsive design
- Admin panel for adding products (managing orders and users will be available in the future)

## Installation

### Prerequisites

I created this project in 2020 and therefore it uses an older version of Strapi and React, which requires specific versions of Node.js and npm to run correctly. Please ensure you are using the following versions before setting up the project:

- **Node.js**: >=10.16.0 and <=14.x.x
- **npm**: v6.x

### Installing Specific Versions

If you don't already have these versions installed, you can use a version manager like [nvm](https://github.com/nvm-sh/nvm) to install and manage different versions of Node.js and npm.

#### Using nvm to Install Node.js and npm

1. **Install nvm**:
   Follow the instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating) to install nvm.

2. **Install Node.js v14.x**:
    ```bash  
    nvm install 14

3. **Use Node.js v14.x**:
    ```bash
    nvm use 14
    ```

4. **Install npm v6.x**:
    ```bash
    npm install -g npm@6
    ```
After ensuring the correct versions of Node.js and npm are installed, you can proceed with the project setup:

### Step-by-Step Setup

#### 1. Clone the Repository

First, clone the repository from GitHub:
    ```bash
    git clone https://github.com/imruki/LM-Footwear.git
    cd LM-Footwear
    ```

#### 2. Backend Setup (Strapi)

1. Navigate to the strapi directory:
    ```bash
    cd strapi
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the Strapi server:
    ```bash
    npm run develop
    # or
    yarn develop
    ```

#### 3. Frontend Setup (ReactJS)

1. Navigate to the app directory:
    ```bash
    cd app
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the React development server:
    ```bash
    npm start
    # or
    yarn start
    ```

## Usage

1. Open your browser and navigate to http://localhost:3000 to view the frontend.
2. The Strapi admin panel can be accessed at http://localhost:1337/admin.

## License
This project is open source under the MIT License. See the [LICENSE](https://github.com/imruki/LM-Footwear/tree/main?tab=MIT-1-ov-file) file for more information.
