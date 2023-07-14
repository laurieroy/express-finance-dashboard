# Finananseer backend
Express server for Finanseer, built following a code along

## Challenges
Mongoose changed their API, so still figuring that out.

Database: NoSQL Mongoose
(simplified)
### Tables: 
<!-- put into a table itself -->
 Key Performance Indicators
- totalProfit: currency
- totalRevenue: currency
- totalExpenses: currency
- expensesByCategory:Map<string: currency> 
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

npm run dev runs on port 9000

Mongoose setup has changed since tutorial
