# kiminno.github.io

To access sleep data from Fitbit: 
1. Clone the project into a folder on your computer. 
2. In the command prompt, navigate into the folder. 
3. Copy and paste the following code and press enter.

curl -i -H "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkRCSkIiLCJzdWIiOiI3OVk5V0siLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTQ5NzcwMjAyLCJpYXQiOjE1NDkxNjU4MjV9._1MyYkPfAHckklIBTnh6UAt1IQO3HrO4CsVPyLN9yZE" https://api.fitbit.com/1.2/user/-/sleep/date/2019-02-02.json
