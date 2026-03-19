FROM php:8.4.18-apache

# Atualizar pacotes e instalar dependências do sistema
RUN apt-get update && apt-get install -y \
  libpng-dev \
  libjpeg-dev \
  libfreetype6-dev \
  libonig-dev \
  libzip-dev \
  libxslt1-dev \
  libicu-dev \
  zlib1g-dev \
  libxml2-dev \
  unzip \
  git \
  curl \
  && docker-php-ext-configure gd --with-freetype --with-jpeg \
  && docker-php-ext-install -j$(nproc) \
    gd \
    mbstring \
    zip \
    mysqli \
    pdo \
    pdo_mysql \
    intl \
    bcmath \
    soap \
    xsl \
    opcache \
    pcntl \
  && docker-php-ext-enable \
    gd \
    mbstring \
    zip \
    mysqli \
    pdo_mysql \
    intl \
    bcmath \
    soap \
    xsl \
    opcache \
    pcntl \
  && rm -rf /var/lib/apt/lists/*

# Instalar Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Adiciona diretorio do composer ao PATH
RUN composer global require laravel/installer
ENV PATH="${PATH}:/root/.composer/vendor/bin"

# Instalar Node.js e NPM
RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
  && apt-get install -y nodejs \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Ativar o mod_rewrite do Apache
RUN a2enmod rewrite

# Copiar arquivo de configuração customizado
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Define workdir
WORKDIR /var/www/html

# Configurar o diretório público como DocumentRoot
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Expor a porta padrão do Apache
EXPOSE 80
EXPOSE 5173

# Comando padrão para iniciar o Apache
CMD ["apache2-foreground"] 