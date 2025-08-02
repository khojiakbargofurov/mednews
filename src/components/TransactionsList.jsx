import React from "react";

function TransactionsList({ transactions }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <div className="card bg-base-100 max-w-96 shadow-sm">
            <figure>
              <img
                src={transaction.imgUrl}
                alt={transaction.title || "Transaction Image"}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {transaction.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                {transaction.description ||
                  "This is a default description for the transaction."}
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {transaction.author || "Author"}
                </div>
                <div className="badge badge-outline">
                  {transaction.createdAt?.toDate().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionsList;
