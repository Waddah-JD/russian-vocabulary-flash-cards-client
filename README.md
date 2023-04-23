## Run

### Dev Mode: Webpack dev server

```bash
yarn start
```

### Prod Mode: Dockerfile

```bash
# build
docker build --tag 'rvfc_web' .

# run
docker run -it -p 80:80 'rvfc_web'

# stop
docker stop $(docker ps -a -q)
```
