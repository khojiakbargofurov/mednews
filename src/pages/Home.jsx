import React from 'react'
import { useCollection } from '../hooks/useCollection'
import TransactionsList from '../components/TransactionsList'
function Home() {
  const { data: transactions, loading, error } = useCollection('transactions');
  if (error) {
    return <div>Error: {error.message}</div>
  }
  
  return (
    <div>
      Home Page
      <p>Welcome to the home page!</p>
      {transactions && <TransactionsList transactions= {transactions} />}
      {loading && <p>Loading transactions...</p>}
    </div>
  )
}

export default Home
