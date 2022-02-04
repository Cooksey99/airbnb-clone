Initialize:
    npm init -y
    npm install
    npm install bcryptjs cookieparser cors csurf dotenv express express-async-handler express-validator helmet jsonwebtoken morgan per-env pg@">=8.4.1" sequelize-cli@5
    npm install -D dotenv-cli nodemon

Creating database:
    psql postgres
    CREATE USER auth_app WITH PASSWORD 'password' CREATEDB;

    npx dotenv sequelize db:create

Database tables and seeds:
    npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
    npx dotenv sequelize db:migrate
    npx sequelize seed:generate --name demo-user

    npx dotenv sequelize db:seed:all

