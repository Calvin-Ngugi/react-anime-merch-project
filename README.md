# Process of Build

This app was created using react's npx-create-react-app
The backend was created using Heroku

## React App on Heroku

1) Create a Heroku account.
2) Create your app.
3) Download Heroku CLI from [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
4) Run these codes.
```bash
heroku login
```
```bash
heroku create <app-name>
```
```bash
git init
```
```bash
heroku git:remote -a <app-name>
```
```bash
git add .
```
```bash
git commit -am "my first commit"
```
```bash
git push heroku master
```