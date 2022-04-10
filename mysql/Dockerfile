FROM mysql:8.0
ENV MYSQL_DATABASE=file_manager_system \
    MYSQL_USER=tagsystem \
    MYSQL_ROOT_PASSWORD=tagsystem\
    MYSQL_PASSWORD=tagsystem

ADD ./initial.sql /docker-entrypoint-initdb.d

EXPOSE 3306