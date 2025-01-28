// Select DOM Elements
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const transactionHistoryEl = document.getElementById("transactionHistory");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");
const addTransactionBtn = document.getElementById("addTransaction");
const saveAsPDFBtn = document.getElementById("saveAsPDF");
const chartCanvas = document.getElementById("chart");

// Transaction Data
let transactions = [];

// Update UI
function updateUI() {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const balance = income - expense;

  balanceEl.textContent = `₹${balance.toFixed(2)}`;
  incomeEl.textContent = `₹${income.toFixed(2)}`;
  expenseEl.textContent = `₹${expense.toFixed(2)}`;

  renderTransactions();
  updateChart();
}

// Render Transaction History
function renderTransactions() {
  transactionHistoryEl.innerHTML = "";
  transactions.forEach((transaction, index) => {
    const li = document.createElement("li");
    li.classList.add(transaction.amount > 0 ? "income" : "expense");
    li.innerHTML = `
      ${transaction.description} <span>₹${transaction.amount.toFixed(2)}</span>
      <button onclick="deleteTransaction(${index})">Delete</button>
    `;
    transactionHistoryEl.appendChild(li);
  });
}

// Add Transaction
addTransactionBtn.addEventListener("click", () => {
  const description = descriptionEl.value.trim();
  const amount = parseFloat(amountEl.value);

  if (description && !isNaN(amount)) {
    transactions.push({ description, amount });
    descriptionEl.value = "";
    amountEl.value = "";
    updateUI();
  }
});

// Delete Transaction
function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

// Save as PDF
saveAsPDFBtn.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Transaction History", 10, 10);

  let y = 20;
  transactions.forEach((transaction, index) => {
    const text = `${index + 1}. ${transaction.description} - ₹${transaction.amount.toFixed(2)}`;
    doc.text(text, 10, y);
    y += 10;
  });

  doc.save("TransactionHistory.pdf");
});

// Chart.js Initialization
let chart;
function updateChart() {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  if (chart) chart.destroy();

  chart = new Chart(chartCanvas, {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [
        {
          data: [income, expense],
          backgroundColor: ["#28a745", "#dc3545"],
        },
      ],
    },
  });
}
