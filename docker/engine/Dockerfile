FROM node:6.2-wheezy
MAINTAINER Guillaume MOREL <gmorel@gmx.com>

WORKDIR /var/www

EXPOSE 3000 3001

ENV HOME /tmp

RUN set -ex;                    \
#    npm install -g bower; \
    npm cache clean;

RUN usermod -u 1000 www-data

CMD ["npm", "install"]
CMD ["npm", "start"]
