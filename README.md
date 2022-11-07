# REQUIREMENTS: #

You must have install git on your local machine to use ‘git clone’ command:

<a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>

To be able to run test, it is necessary to install few additional programs on your local unit: 

1. nodejs: <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>
2. it may be necessary to install npm by hand to update nodejs <a href="https://docs.npmjs.com/cli/v8/commands/npm-install">https://docs.npmjs.com/cli/v8/commands/npm-install</a>
3. yarn: <a href="https://classic.yarnpkg.com/en/docs/install">https://classic.yarnpkg.com/en/docs/install</a>

You should have to install them in this order.

Depending on operation system, there are different ways to install these programs – when you click on links above, you should be redirect to instructions matched to your OS.

That configuration of your local environment allows you to execute tests from cloned repository.


# TESTING: #

At the first step it is necessary to clone repository on your local machine.  You should have to click the green ‘Code’ button on this github repository and copy link to it. Next open terminal on your local machine and navigate to folder where you want to clone repository. Write command ‘git clone ***repository address***’

When clone operation is finished, there are at least two ways of run tests. First is that: open project folder with IDE, for example Visual Studio Code:

<a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>

then open new terminal inside IDE and run commands in it as it follows: ‘yarn install’ (or just 'yarn') to install dependencies, and when this is ready: ‘yarn test’

Other way is that: open terminal in your operation system, navigate to the root of the project, and just simply write commands in terminal: ’yarn install’ and ‘yarn test’.

In case you are not familiar with terminal, here are guidelines: 
<a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line</a>
