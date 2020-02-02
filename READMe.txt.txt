1. Download and Install Nodejs, Node package manager, Visual Studio Code from Google.
2. Now in local repository try to clone the shared repository and validate all the files came in system.
3. Open Visual Studio code and import the project.
4. Run npm install command in visual studio code terminal.
5. Run the below command in project repository where bin is located. : 
	npm install selenium-standalone@latest –g
	selenium-standalone install && selenium-standalone start

6. To get HTML report : 
 	npm install wdio-allure-reporter --save-dev
	npm install -g allure-commandline --save-dev
7. Once all the drivers are installed then go and change the test data.
8. As it is BDD approach, so go to login.feature file("./test/acceptance/Pylot_Cockpit/features/Login/login.feature").
9. Now change the test data ie. email-id in 15 line. (pass the value : freshdumm510@yopmail.com)
10. Now save the feature file and run the command : npm run test:acceptance
11. Once Execution completes : check the result in console (as 1 passed)
12. After Every run need to run below commands for generating report.
	allure generate "Your report Path till allure results directory" --clean 
	For Example : 

	allure generate C:/projects/Fresh/reports/allure-results --clean
	allure open



NOTE : Steps 4,5,6 are just one time job that is just one time when you import this project in anybosy's system.	