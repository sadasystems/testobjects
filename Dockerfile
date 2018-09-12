FROM nginx

COPY . /etc/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
ADD pyutil/resources/testobjects.nginx.conf.example /etc/nginx/conf.d/testobjects.cedexis.com.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
