# Finananseer backend
Express server for Finanseer, built following a [code along](https://www.youtube.com/watch?v=uoJ0Tv-BFcQ&t=8383s)

See [frontend](https://github.com/laurieroy/ts-finance-dashboard)

## Challenges
Mongoose changed their API, took a minute to figure out issues.

Database: NoSQL Mongoose
(simplified)

Money is handled using mongoose-currency which requires an older mongoose version, requiring the --legacy-peer-deps flag.

I tried various cors and helmet configurations due to a typo, but eventually figured it out.

### Tables: 
<!-- put into a table itself -->
 Key Performance Indicators
- totalProfit: currency
- totalRevenue: currency
- totalExpenses: currency
- expensesByCategory: Map<string: currency> 
- dailyData: Array
- monthlyData: Array

Transaction
- id: mongoDb id
- buyer: string
- amount: currency
- productIds: Array (for key)

 Product
- id: mongoDb id
- price: currency
- expense: currency
- transactions:  Array<mongoDb id> (for key)


### To Run Locally:
#### Clone Project
In terminal:
```git clone https://github.com/laurieroy/express-finance-dashboard```

cd into directory, install dependencies
```npm i --legacy-peer-deps```

#### Create database

Create [Mongo db](https://www.mongodb.com/) and add MONGO_DB_SRV_URL and PORT (1337) to .env file

#### Seed database

uncomment lines 45-53 in index.js and run once to seed data

#### Run server
Run server using nodemon:
```npm run dev``` 


