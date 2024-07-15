install-deps:
	docker-compose run --rm app yarn install

start:
	docker-compose run --rm --service-ports app yarn dev
