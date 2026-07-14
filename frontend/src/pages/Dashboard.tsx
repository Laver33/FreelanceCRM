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
        { name: "Содержание артура", amount: 1300 },
        { name: "Encapsulant", amount: 1200 },
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

    // Тест данные показатели
    const seenData = [
        {title: 'Макс доход', amount: 1},
        {title: 'Макс расход', amount: 1},
        {title: 'Общий расход', amount: 1},
    ]

    return(
        <div className="p-5">

            <PageTitle title="Дашборд"/>

            <div className="w-full flex gap-5">
                {testData.map(stats => (
                    <motion.div 
                        className="grid w-1/5 md:col-auto gap-3 text-center shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] duration-1000 py-7 rounded-xl"
                        whileHover={{ scale: 1.03 }}
                    >
                        <h3 className="h-1/3">{stats.title}</h3>
                        <p className="h-2/3 text-lg text-text-primary">{stats.data}</p>
                    </motion.div>
                ))}
            </div>

            {/* Вторая линия с графиками */}
            <div className="flex mt-5 gap-5 w-full">

                {/* Показатели выручки */}
                <div className="w-2/12 p-5 bg-white rounded-xl shadow-[0_0_15px_5px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-4">

                    <p className="text-base font-semibold text-gray-900">
                        Показатели
                    </p>
    
                    <div className="flex flex-col gap-3 mt-7">
                        {seenData.map((indicators) => (
                            <motion.div
                                key={indicators.title}
                                className="border shadow-[0_0_15px_5px_rgba(0,0,0,0.05)] p-3 rounded-lg flex flex-col gap-1 text-left" 
                            >
                                <p className="text-xs font-medium text-text-primary truncate">
                                    {indicators.title}
                                </p>

                                <p className="text-lg font-bold text-amber-950 tabular-nums">
                                    {indicators.amount}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>


                {/* Графики выручки */}
                <div className="h-100 w-7/12 p-4 text-lg font-medium rounded-xl shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]">
                <p className="mb-4">Финансовые графики</p>
                
                <AreaChart
                    data={yearlyRevenue}
                    index="date" 
                    categories={["Доход", "Расход"]} // Линии
                    variant="default" 
                    valueFormatter={(number) => `$${Intl.NumberFormat("us").format(number)}`}
                />
                
                </div>

                {/* Диаграмма с распределениями */}
                <div className="h-100 w-3/12 p-4 text-lg grid font-medium rounded-xl shadow-[0_0_15px_5px_rgba(0,0,0,0.1)]">
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

