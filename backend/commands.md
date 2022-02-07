Generate models:

npx sequelize model:generate --name Spot --attributes guestCount:integer,staySize:string,roomCount:integer,bathCount:integer,description:string

npx sequelize model:generate --name SpotsImage --attributes spotsId:integer,url:string

npx sequelize model:generate --name Amentity --attributes spotsId:integer,amentityName:string

npx sequelize model:generate --name Booking --attributes userId:integer,spotsId:integer,startDate:date,endDate:date

npx sequelize model:generate --name Review --attributes userId:integer,spotsId:integer,title:string,description:string



 Create seeder files:

npx sequelize seed:generate --name spotSeeds
npx sequelize seed:generate --name spotsImageSeeds
npx sequelize seed:generate --name amentitySeeds
npx sequelize seed:generate --name bookingSeeds
npx sequelize seed:generate --name reviewSeeds
npx sequelize seed:generate --name userSeeds
