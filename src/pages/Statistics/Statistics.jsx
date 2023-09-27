
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Legend,  Cell, ResponsiveContainer } from 'recharts';



const Statistics = () => {


    const donationPage = JSON.parse(localStorage.getItem('donation'))
    let yourDonation = donationPage?.length + 0;
  
    const totalDonations = useLoaderData();
    const totalDonation = totalDonations?.map(Donation => Donation)
  

    const data = [
        
        { name: 'Your Donation', value: yourDonation },
        { name: 'Total Donation', value: totalDonation.length },
    ];


    const COLORS = ['#00C49F', '#FF444A'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <>
            <div className="flex text-center justify-center text-xl font-semibold ">

                <div className=" ml-24 md:ml-0">

                    <div className="col-md-8">
                        <ResponsiveContainer width={400} height={400} className="text-center">
                            
                            <PieChart width={600} height={600}>
                                <Legend layout="" verticalAlign="" align="" />
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer> 
                    </div>
                </div>
            </div>
        </>


    );
};

export default Statistics;



