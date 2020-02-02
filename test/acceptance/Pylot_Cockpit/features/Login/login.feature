Feature: Login Functionality Check
    New User enters the registration page

@Login
    Scenario: Login functionality check and New User is authenticated and then allowed to navigate to home page.
        Given User lands on registration page.
        When User checks the mandatory fields to login.
        Then User see firstname, lastname, email and password as mandatory fields.
        When User checks the login button
        Then By default login button should be disabled
        When User fills the invalid data in login form
        |  Te       |   Te    |    tst@yopmail.com  |   123@adA    |
        Then Login button should be disabled.
        When User fills the firstname, lastname, email and password
        |  Garry       |   Dutt    |    freshdumm509@yopmail.com  |       Garry@123    |
        Then Username and password length should be more than 3 characters
        And Login button should be enabled
        