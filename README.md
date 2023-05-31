<p align="center">
    <a href="https://www.hive.fi/" target="_blank">
        <img src="https://github.com/hivehelsinki/.github/blob/main/assets/logo.png?raw=true" width="128" alt="Hive logo" />
    </a>
</p>

<p align="center">
  <sub>Created by <a href="https://github.com/amedeomajer">Amedeo Majer (ame)</a></sub>
</p>

## About tech-report

The `tech-report` app provides Hive students with a platform to report technical issues related to the school's IT equipment. This tool enables staff members to efficiently address and follow up on these reported issues.

The primary objective of this app is to guide students in correctly reporting technical problems and to maintain a record of these issues. In the near future, by tracking and documenting the reported incidents, the app will help identify any recurring problematic equipment. This information can be valuable for improving the school's IT infrastructure and ensuring a smoother experience for all students.

**Screenshots:**

<div align='center'>
  <img src='https://github.com/hivehelsinki/tech-report/blob/main/.github/docs/screen00.png' width="800px" alt='login' />
  <img src='https://github.com/hivehelsinki/tech-report/blob/main/.github/docs/screen01.png' width="800px" alt='form' />
  <img src='https://github.com/hivehelsinki/tech-report/blob/main/.github/docs/screen02.png' width="800px" alt='reports' />
</div>

## Requirements

This app is developed to run with the 42 OAuth.
You will first need to create a 42 API app in the intranet.

**Instructions**

1. Create a new API application on the [42 intranet](https://profile.intra.42.fr/oauth/applications/new)
2. In the field Redirect URI add: http://localhost:3000/api/auth/callback/42-school
3. In the scopes select "Access the user public data" and submit.
4. Save the credentials you will need them later.

<br/><br/>

## Getting Started

Clone the repository locally

```sh
git clone git@github.com:hivehelsinki/tech-report.git
cd tech-report
```

Install all the necessary dependencies run the following

```sh
npm install
```

Migrate the database

```sh
npx prisma migrate dev
```

Create the .env file

```sh
cp .env.sample .env
```

| key          | desc                                            |
| :----------- | :---------------------------------------------- |
| CAMPUS_ID    | Your campus ID on the intranet                  |
| FT_UID       | Your 42API UID starting with `u-s4t2af`         |
| FT_SECRET    | Your 42API Secret starting with `s-s4t2af`      |
| SECRET       | Fill with random string                         |
| NEXTAUTH_URL | URL of your app (e.g: https://report.domain.nl) |
| SLACK_URL    | Slack incoming webhook URI (remove if disable)  |

Run the application

```sh
npm run dev
```

Now you can access you application on [localhost:3000](http://localhost:3000)

<br/><br/>

## Customization

If you want to change the logo by the ones of your school, you change the following files:

- `./public/landingPageLogo.svg`: The logo of your school that will be shown in the signIn page
- `./src/components/Logo.jsx`: The logo in the navbar

You can edit the `config.yml` file to change:

- the app title
- faulty devices list
- hosts list

<br /><br />

## Docker

Build docker image

```sh
docker build -t tech-report .
```

Run the container

```sh
docker run -v `pwd`/.env:/app/.env -p 3000:3000 --name tech-report --rm tech-report
```

Access the container's logs

```sh
docker logs -f tech-report
```

<br/><br/>

## GDPR

The application stores the following information:

- Student intra id
- Student login
