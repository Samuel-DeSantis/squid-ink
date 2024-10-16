# squid-ink

## client
Built with: [Vite](https://vite.dev/)

### Pages
The structure of the website:
```
public
|-home
|-sign_in
|-sign_up

protected
|-dashboard
    |-analytics [FUTURE]
    |-settings [FUTURE]
|-user
    |-profile [FUTURE]
    |-preferences [FUTURE]
```

## server
Built with: [Express](https://expressjs.com/), [Supabase](https://supabase.com/)

Currently using Supbase as SQL db, but may switch to Mongodb in the future...

### models

Attributes and types assigned in 

#### User
|      Attr.      | Type |
|-----------------|------|
| id              | int8 |
| first_name      | text |
| last_name       | text |
| username        | text |
| email           | text |
| password_digest | text |

#### Project [FUTURE]
Focusing on 1-user / project to start.
|      Attr.      | Type |
|-----------------|------|
| id              | int8 |
| name            | text |
| location        | text |
| client          | text |
| user_id         | int8 |

#### Circuit Schedule [FUTURE]
|      Attr.      | Type |
|-----------------|------|
| id              | int8 |
| designation     | text |
| tag             | text |
| suffix          | text |
| length          | int8 |
| conductors      | text |
| size            | text |
| type            | text |
| insulation      | text |
| from            | text |
| to              | text |
| via             | text |
| supplied_by     | text |
| comments        | text |
| rev             | text |
| project_id      | int8 |