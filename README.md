<p align="center">
  <a href="https://lizweaveologist.gatsbyjs.io/">
    <img alt="Liz Ngote portfolio" src="https://lizweaveologist.gatsbyjs.io/static/46142e7d5768f97cf486c12ca25cd733/27e9d/liz_ngote.webp" width="60" />
  </a>
</p>
<h1 align="center">
Liz Ngote portfolio
</h1>

## 🚀 Getting Started
1.  **Clone the project.**


        https://github.com/Jerome-debug/lizweaveologist

2.  **Dependancies used.**

    Used the Yarn dependancy package 

    *Yarn Work Flow*
    a)Creating a new project
    
    b)Adding/updating/removing dependencies
    
    c)Installing/reinstalling your dependencies
    
    d)Working with version control (e.g. git)
    
    e)Continuous Integration

    **a) Starting a new project.**

    ```shell
    # create a new yarn  projetc using

    yarn init
    ```
    
    This will open up an interactive form for creating a new yarn project with the following questions:
    
            name (your-project):
            version (1.0.0):
            description:
            entry point (index.js):
            git repository:
            author:
            license (MIT):
    
    
    

2.  **Adding a dependency**


    If you want to use another package, you first need to add it as a dependency. In order to do that you should run:

    ```shell
    yarn add [package]
    yarn add [package]@[version]
    yarn add [package]@[tag]
    ```
    
    
    This will automatically add the [package] to your dependencies in your package.json. It will also update your yarn.lock to reflect the change.
    
            {
          "name": "my-package",
          "dependencies": {
          "package-1": "^1.0.0"
          }
        }
        
  You can also add other types of dependencies using flags:

      yarn add --dev to add to devDependencies
      yarn add --peer to add to peerDependencies
      yarn add --optional to add to optionalDependencies
      
      
3.**Adding a dependency to different categories of dependencies.**

Add to devDependencies, peerDependencies, and optionalDependencies respectively:
      ```shell
      yarn add [package] --dev
      yarn add [package] --peer
      yarn add [package] --optional

      ````


3.  **Installing all the dependencies of project**

yarn install is used to install all dependencies for a project. The dependencies are retrieved from your project’s package.json file, and stored in the yarn.lock file.

When developing a package, installing dependencies is most commonly done after:

You have just checked out code for a project that needs these dependencies to function.
Another developer on the project has added a new dependency that you need to pick up.

      ````shell

      yarn

      #or


      ````

   # Your site is now running at http://localhost:8000!

    #Edit `src/pages/index.js` to see your site update in real-time!

4.  **Version Control*

To have people successfully develop or use your package, you need to ensure that all the necessary files are checked into your source control system.

The following files must be checked into source control for anyone to be able to manage your package:

package.json: This has all the current dependencies for your package.
yarn.lock: This stores the exact versions of each dependency for your package.
The actual source code that provides the functionality for your package.

5. **Continuous Integration.**

Yarn can easily be used in various continuous integration systems. To speed up builds, the Yarn cache directory can be saved across builds.

AppVeyor
CircleCI
Codeship
Travis
Semaphore
Solano
GitLab
Codefresh

  
Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):


