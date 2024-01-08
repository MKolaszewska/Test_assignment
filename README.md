Test assignment
To fulfill the test task - it is enough to complete the tasks of the basic level. Completion of the
next level tasks will be a plus.
Upload the results to github.
Prepare a demonstration of the first and second part of the task for the interview.
Deadline for test assignment submission - 1 week.
Part 1 - Tests
Toolkit tips: appium, appium inspector, bash/sh, adb, python
Basic level:
Write UI tests for android application "Calculator". 2 positive and 2 negative tests are
enough. You can use any OOP language for implementation.
The description of test cases should be formalized in readme.md file.
Run tests via command line. (sh/bash script)
Requirements to the script to run tests:
- the script allows you to print out the names of all tests
- it allows to specify the name of the test(s) to be run
- it allows to specify the android device on which the tests will be run.
Next level:
In addition to the basic level - for report use allure. For negative tests use adb commands for
input/click methods. Enter the results of running the tests into the search bar of android
browser and take a screenshot.
The format of the string for test execution results is: {passed: N, failed: K, total: M}
Part 2 - CICD
Basic level:
Create a jenkins job to run scheduled tests. Save the test execution logs to a file and add
them to the jenkins job artifacts.
Schedule to run the jenkins job: weekdays at 15:45.
Next level:
In addition to the basic level - describe the job configuration in groovy pipeline script.
Bring common pipeline methods into vars.
Add test execution screenshots to jenkins job artifacts
