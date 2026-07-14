import * as motion from "motion/react-client"
import PageTitle from "../components/PageTitle"
import '../index.css'
import { DonutChart } from "../components/Tremor/ChartDashboard"
import { AreaChart } from "../components/Tremor/AreaChartDashboard"


const DashboardPage = () => {
    const testData = [
        {title: 'Доходы', data: 1},
        {title: 'Расходы', data: 1},
        {title: 'Прибыль', data: 1},
        {title: 'Разница', data: 1},
        {title: 'Записей', data: 1},
    ]

    // Тест данные ( диаграмма )
    const chartdata = [
        { name: "SolarCells", amount: 4890 },
        { name: "Glass", amount: 2103 },
        { name: "JunctionBox", amount: 2050 },
        { name: "Содержание артура", amount: 1300 },
        { name: "BackSheet", amount: 1100 },
        { name: "Frame", amount: 700 },
        { name: "Encapsulant", amount: 200 },
    ]

    // Тест данные график
    const yearlyRevenue = [
        { date: "1", "Доход": 2400, "Расход": 1400 },
        { date: "2", "Доход": 1398, "Расход": 2210 },
        { date: "3", "Доход": 3800, "Расход": 2290 },
        { date: "4", "Доход": 3908, "Расход": 2000 },
        { date: "5", "Доход": 4800, "Расход": 2181 },
        { date: "6", "Доход": 3800, "Расход": 2500 },
    ]

    return(
        <div className="p-5">
            <PageTitle title="Дашборд"/>
            <div className="w-full flex gap-5">
                {testData.map(stats => (
                    <motion.div 
                        className="grid w-1/5 md:col-auto gap-3 text-center shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] duration-1000 py-7 rounded-lg"
                        whileHover={{ scale: 1.03 }}
                    >
                        <h3 className="h-1/3">{stats.title}</h3>
                        <p className="h-2/3 text-lg text-primary">{stats.data}</p>
                    </motion.div>
                ))}
            </div>

            {/* Вторая линия с графиками */}
            <div className="flex mt-5 gap-5 w-full">

                {/* Показатели выручки */}
                <div className="h-100 w-2/12 p-4 text-lg font-medium rounded shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]"><p>Показатели</p></div>

                {/* Графики выручки */}
                <div className="h-100 w-7/12 p-4 text-lg font-medium rounded shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]">
                <p>Графики выручки</p>
                
                <AreaChart
                    data={yearlyRevenue}
                    index="date" 
                    categories={["Доход", "Расход"]} // Линии
                    variant="default" 
                    valueFormatter={(number) => `$${Intl.NumberFormat("us").format(number)}`}
                />
                
                </div>

                {/* Диаграмма с распределениями */}
                <div className="h-100 w-3/12 p-4 text-lg grid font-medium rounded shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]">
                <p>Диаграмма с распределениями</p>
                
                <DonutChart
                    data={chartdata}
                    className="mx-auto"
                    variant="pie" 
                    category="name"
                    value="amount"
                    valueFormatter={(number: number) =>
                      `$${Intl.NumberFormat("us").format(number)}`
                    }
                />
                
                </div>

            </div>


        
        </div>
    )
}

export default DashboardPage;

