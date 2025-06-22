# Use an official Nginx image as a base image
FROM nginx:1.25-alpine

# Copy your website's files (the 'public' directory) to the Nginx document root
COPY my_website/hola /usr/share/nginx/html/

# Copy your custom Nginx configuration file
COPY my_website/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# No need for CMD instruction, Nginx starts by default in this image