
---

# **Expense Tracker**

A simple and responsive Expense Tracker web application built using **HTML**, **CSS**, and **JavaScript**. This application allows users to manage their income and expenses efficiently with features such as transaction history, visual graph representation, and the ability to export transaction data as a PDF.

---

## **Features**

1. **Track Income and Expenses**  
   Add income and expense transactions to calculate your balance dynamically.

2. **Transaction History**  
   View a detailed history of all transactions, categorized as income or expense.

3. **Visual Graph**  
   A **doughnut chart** using Chart.js to visually represent the ratio of income to expenses.

4. **PDF Export**  
   Export your transaction history and financial summary as a **PDF** using jsPDF.

5. **Responsive Design**  
   - Graph appears on the right in larger screens (laptop/desktop).  
   - On mobile, the layout stacks vertically for better usability.

---

## **Technologies Used**

- **HTML**: Markup for the application structure.
- **CSS**: Styling for responsive and visually appealing design.
- **JavaScript**: Logic for handling transactions, updating the UI, and generating the graph.
- **Chart.js**: For creating dynamic doughnut charts.
- **jsPDF**: For exporting data to PDF format.

---

## **Setup Instructions**

### Prerequisites
Ensure you have a modern web browser (e.g., Chrome, Firefox, Edge) to run the application.

### Steps
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. **Open the Project**  
   Open the `index.html` file in your browser to start the Expense Tracker.

---

## **Usage**

1. **Add a Transaction**  
   - Enter a description and amount.  
   - Use positive values for income and negative values for expenses.  
   - Click **"Add Transaction"** to update the balance, history, and graph.

2. **Delete a Transaction**  
   - Click the **Delete** button next to a transaction to remove it.

3. **View Graph**  
   - The graph dynamically updates with your transactions.  
   - The **green section** represents income, and the **red section** represents expenses.

4. **Export to PDF**  
   - Click the **"Save as PDF"** button to download a PDF containing your transaction history and financial summary.

---

## **Responsive Design**

- **Desktop/Laptop**:  
  The graph is displayed on the **right side** of the screen.  
- **Mobile**:  
  The graph and transaction sections stack **vertically** for better usability.

---
