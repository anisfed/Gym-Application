FROM python:3.12.1-slim-bullseye


# Packages for using Taskfile
RUN        apt-get update && apt-get -y install openssh-client && apt-get -y  install build-essential curl file git \
           && apt-get -y install libpq-dev python3-dev

# Install requirements
COPY       requirements/ /tmp/requirements/
RUN        pip install --upgrade pip
RUN        pip install -r /tmp/requirements/base.txt

# Project files
COPY       app/ app/

ENV        PYTHONPATH=/app/