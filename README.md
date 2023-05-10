<p align="center">
    <a href="https://www.hive.fi/" target="_blank">
        <img src="https://github.com/hivehelsinki/.github/blob/main/assets/logo.png?raw=true" width="128" alt="Hive logo" />
    </a>
</p>

<p align="center">
  <sub>Created by <a href="https://github.com/amedeomajer">Amedeo Majer (ame)</a></sub>
</p>

## About tech-report

The `Tech-report` app provides Hive students with a platform to report technical issues related to the school's IT equipment. This tool enables staff members to efficiently address and follow up on these reported issues.

The primary objective of this app is to guide students in correctly reporting technical problems and to maintain a record of these issues. In the near future, by tracking and documenting the reported incidents, the app will help identify any recurring problematic equipment. This information can be valuable for improving the school's IT infrastructure and ensuring a smoother experience for all students.

## Getting Started

... TBC

### SET UP 42 APP

1. Create a new API application on the [42 intranet](https://profile.intra.42.fr/oauth/applications/new)
2. In the field Redirect URI add: http://localhost:3000/api/auth/callback/42-school
3. In the scopes select "Access the user public data" and submit.

Now that the app is registered you can fill in `FT_UID` and `FT_SECRET` into the `.env` file that you can find at the root directory of the project.

## Deploy

... TBC
