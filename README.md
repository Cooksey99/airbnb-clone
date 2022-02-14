# airbnb-clone
1. Clone this repo: git clone https://github.com/Cooksey99/airbnb-clone

2. Install dependencies in root directory: npm install

3. Create user with PASSWORD and CREATEDB in postgres
    - CREATE USER <username> WITH PASSWORD <password>

4. Create .env file in directory. Copy the contents of env.example into the newly created .env file. Change the information to match that of which you created

5. Verify that your proxy matches the one in your .env file.
    - navigate to /frontend/package.json and add to the bottom:
     "proxy": "http://localhost:5000"
    - make sure the number at the end (5000, in this case) matches the PORT from your .env file.

6. Run the following commands in your terminal to generate, migrate and seed the database
    - npx dotenv sequelize db:create
    - npx dotenv sequelize db:migrate
    - npx dotenv sequelize db:seed:all

7. In your terminal, nagivate to /backend. 
    - Run: npm start

8. In your terminal, navigate to /frontend
    - Run: npm start
