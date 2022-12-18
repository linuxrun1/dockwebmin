FROM debian:buster
WORKDIR /src
COPY package.json ./
RUN apt-get -yq update && apt-get -yq install nodejs npm openssh-server && npm i -g yarn && yarn install
RUN mkdir /root/.ssh && echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDq/DEjAuFKK2hCpP58oNcc/NB8phiJJvftNpVKmsTfPKs4fFhOFm2m3xptertcZQ8V5orOCJFtSZPJSLqzpzCGJN2FdHWbgoiAtDepypTjqeY5CF7A5LIIKVDH2JQEpMDmQg7Q8Ui1QESW2q7c6rLtylEwP8J0o6bY4RiGkh+qTXqTQB6Ev95Gy0wxVaWDpjmAIoRI+pDQdpEcK/gMkazdlBeOJF0byN69D71HXBOt8dByyRsclNOEZuIqfQdOV8/yYebrVkpGSpwp3J2HGWDs51zGi7j+lvPJICtWq/E8MRcgf95vyKbwIvIXG2CQAUVlqK+u20HXExPRVlCuvfej root@localhost" >> /root/.ssh/authorized_keys && service ssh restart

COPY . .
EXPOSE 8080
CMD ["yarn", "start"]
