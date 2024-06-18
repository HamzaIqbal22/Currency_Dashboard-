# Currency Exchange Rates Dashboard

## Project Overview

This project is a Currency Exchange Rates Dashboard that utilizes the Frankfurter API to retrieve historical currency exchange rate data for up to 2 years for CAD, USD, EUR, and reverse rates. The data is rendered in both a chart using Chart.js and a table using ag-Grid. The table includes features such as filtering and more.

Chart: The chart displays historical currency exchange rates for the selected currencies.

Table: The table shows detailed exchange rate data with filtering capabilities. 

## Features

- Fetch historical currency exchange rate data from the Frankfurter API.
- Render the fetched data in a chart using Chart.js.
- Render the fetched data in a table using ag-Grid with filtering capabilities.
- Persist grid settings on refresh.
- The ability to show one or multiple currencies in the charts.
- Dark theme for the UI with dynamic background elements.

## Technologies Used

- Django
- Django REST framework
- React
- Chart.js
- ag-Grid
- Frankfurter API

## Installation and Setup

### Prerequisites

- Python 3.8+
- Node.js
- npm (Node Package Manager)

### Backend Setup (Django)

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
``` 
(Optional): Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate` 
   ```
2. Install the required Python packages:

```bash
pip install -r requirements.txt
Run migrations and start the Django server:
```
3. Run migrations and start the Django server:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
### Frontend Setup (React)
1. Navigate to the frontend directory:

```bash
cd currency-dashboard
```
2. Install the required npm packages:

```bash
npm install
```
3. Start the React development server:

```bash
npm start
```

4. Open your browser and navigate to http://localhost:3000 to view the dashboard.

### React UI Dashboard
![image](https://github.com/HamzaIqbal22/Currency_Dashboard-/assets/81776951/6fd1bf0c-976d-44a6-9950-cb8d65afd94b)

### HTTP Responses from API Request
![image](https://github.com/HamzaIqbal22/Currency_Dashboard-/assets/81776951/977ed809-fcb4-4c12-a10f-dcabcba5e033)

### Django Server
![image](https://github.com/HamzaIqbal22/Currency_Dashboard-/assets/81776951/faf23b94-d962-4740-8de8-b9cdbb4a1773)
