
// import React, { useState, useEffect } from 'react'
// import { Bar, Line } from 'react-chartjs-2'
// import { PieChart } from 'react-minimal-pie-chart';




// const DashBoard = () => {
//     const [chartData, setChartData] = useState({});
//     const [employeeSalary, setEmployeeSalary] = useState([]);
//     const [employeeAge, setEmployeeAge] = useState([]);
//     const Chart = () => {
//         setChartData({
//             labels: ['22/03', '23/03', '24/03', '25/03', '26/03', '27/03'],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         });
//     }
//     useEffect(() => {
//         Chart();
//     }, []);


//     const data = {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//             {
//                 label: "First dataset",
//                 data: [33, 53, 85, 41, 44, 65],
//                 fill: true,
//                 backgroundColor: "rgba(75,192,192,0.2)",
//                 borderColor: "rgba(75,192,192,1)"
//             },
//             {
//                 label: "Second dataset",
//                 data: [33, 25, 35, 51, 54, 76],
//                 fill: false,
//                 borderColor: "#742774"
//             }
//         ]
//     };
//     return (
//         <div>
//             {/* <PieChart
//                 data={[
//                     { title: 'One', value: 10, color: '#E38627' },
//                     { title: 'Two', value: 15, color: '#C13C37' },
//                     { title: 'Three', value: 20, color: '#6A2135' },
//                 ]}
//             />; */}

//             <div className="App">
//                 <h1>Overview</h1>
//                 <div>
//                     <Bar
//                         data={chartData}
//                         options={{
//                             responsive: true,
//                             title: { text: "THICCNESS SCALE", display: true },
//                             scales: {
//                                 yAxes: [{
//                                     ticks: {
//                                         beginAtZero: true
//                                     }
//                                 }
//                                 ]
//                             }
//                         }}
//                     />
//                 </div>
//             </div>

//             <div className="App">
//                 <Line data={data} />
//             </div>
//         </div>
//     );
// }
// export default DashBoard;