npx sequelize model:generate --name Spot --attributes guestCount:integer,staySize:string,roomCount:integer,bathCount:integer,description:string

npx sequelize model:generate --name SpotsImage --attributes spotsId:integer,url:string

npx sequelize model:generate --name Amentity --attributes spotsId:integer,amentityName:string

npx sequelize model:generate --name Booking --attributes userId:integer,spotsId:integer,startDate:date,endDate:date

npx sequelize model:generate --name Review --attributes userId:integer,spotsId:integer,title:string,description:string
