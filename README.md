## Run

### Development Mode

#### Hot reload with Webpack dev server

```bash
# run
yarn start:dev
```

#### Built version + Nginx proxy

```bash
# build
docker build --tag 'rvfc_web' .

# run
docker run -it -p 80:80 'rvfc_web'

# stop
docker stop $(docker ps -a -q)
```

## Deployment

this repo is a submodule in https://github.com/Waddah-JD/russian-vocabulary-flash-cards, all deployments happen on parent repo (check https://github.com/Waddah-JD/russian-vocabulary-flash-cards#deployment), the only required action on here is pushing to `master`
