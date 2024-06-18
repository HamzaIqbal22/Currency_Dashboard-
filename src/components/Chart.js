import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedCurrencies, setSelectedCurrencies] = useState(['USD', 'EUR', 'CAD']);
    const [allCurrencies, setAllCurrencies] = useState([]);

    const colors = {
        'USD': 'rgba(75, 192, 192, 0.6)',
        'EUR': 'rgba(54, 162, 235, 0.6)',
        'CAD': 'rgba(255, 206, 86, 0.6)',
        'JPY': 'rgba(153, 102, 255, 0.6)',
        'INR': 'rgba(255, 159, 64, 0.6)',
        // Add more colors if needed for different currencies
    };

    useEffect(() => {
        const savedCurrencies = localStorage.getItem('selectedCurrencies');
        if (savedCurrencies) {
            setSelectedCurrencies(JSON.parse(savedCurrencies));
        }
    }, []);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/exchange_rates/')
            .then(response => response.json())
            .then(data => {
                const currencies = [...new Set(data.flatMap(item => [item.base_currency, item.target_currency]))];
                setAllCurrencies(currencies);

                let filteredData = data;
                if (!selectedCurrencies.includes('ALL')) {
                    filteredData = data.filter(item =>
                        selectedCurrencies.includes(item.base_currency) ||
                        selectedCurrencies.includes(item.target_currency)
                    );
                }

                const labels = filteredData.map(item => `${item.date} (ID: ${item.id})`);
                const datasets = selectedCurrencies.includes('ALL') ?
                    currencies.map(currency => {
                        const rates = filteredData
                            .filter(item => item.base_currency === currency || item.target_currency === currency)
                            .map(item => item.rate);

                        return {
                            label: `${currency} Exchange Rate`,
                            data: rates,
                            fill: false,
                            backgroundColor: colors[currency],
                            borderColor: colors[currency],
                        };
                    }) :
                    selectedCurrencies.map(currency => {
                        const rates = filteredData
                            .filter(item => item.base_currency === currency || item.target_currency === currency)
                            .map(item => item.rate);

                        return {
                            label: `${currency} Exchange Rate`,
                            data: rates,
                            fill: false,
                            backgroundColor: colors[currency],
                            borderColor: colors[currency],
                        };
                    });

                setChartData({ labels, datasets });
                setLoading(false);
            });
    }, [selectedCurrencies]);

    const handleCurrencyChange = event => {
        const { options } = event.target;
        const selected = Array.from(options).filter(option => option.selected).map(option => option.value);
        setSelectedCurrencies(selected);
        localStorage.setItem('selectedCurrencies', JSON.stringify(selected));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date (ID)',
                    color: '#e0e0e0',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Exchange Rate',
                    color: '#e0e0e0',
                }
            }
        }
    };

    return (
        <div className="chart-container">
            <select multiple={true} onChange={handleCurrencyChange} value={selectedCurrencies}>
                <option value="ALL">ALL</option>
                {allCurrencies.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default Chart;
