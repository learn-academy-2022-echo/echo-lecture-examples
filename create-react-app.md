# Create React App 8/11/22

# Yarn - Yet Another Resource Negotiator

Create React process

  1. Figure out where I am / where I want to make the app
    $ pwd 
    $ ls
  2. Navigate where I want to be
  3. Create the App!
    $ yarn create react-app <app-name>
    ex  $ yarn create react-app my-app
    3.a kabob case, lower case a with hyphens or dashes
  $ cd create-react-app-example
  $ yarn start


# React is a SPA
- Single Page Application
  - Allows for quick load times
  - Draw back of poor SEO


# Recap
  - Yarn is a package manager built by Meta
  - React is a SPA that is based on building blocks of code called Components
  - In a React application (generally) we create one component in each file
    - The component and the file share a name and the are PascalCased
  - We create a react application using the yarn command 
    $ yarn create react-app <app-name>
      - The app name is always kebab case
  - React components bring in information to other components using imports
    - requires an export form the component file 
  - React components can be invoked / called using a <Component Call />
  - We can see the changes we are making by running the command
    - cntrl - c to stop server safely
  - We can check for errors and warnings by inspecting the page and opening the chrome console
