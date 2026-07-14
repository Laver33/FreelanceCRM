import { Link } from "react-router";
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import * as motion from "motion/react-client"
import '../index.css'

import { AiFillSetting } from "react-icons/ai";



interface iNavBtn {
  title: string,
  nav: string,
  icon: React.ReactNode,
}




const SideBar = () => {

  const navBtnContent: iNavBtn[] = [
    {title: 'Дашборд', nav: '/', icon: <AiFillAppstore /> },
    {title: 'Клиенты', nav: '/clients', icon: <AiOutlineTeam />},
    {title: 'Проекты', nav: '/projects', icon: <AiOutlineFile />},
    {title: 'Финансы', nav: '/finans', icon: <AiOutlineCreditCard />},
  ]
  

  return(

    <div className="fixed inset-y-0 left-0 w-64 z-50 shadow-xl">

      {/* Нейминг проекта */}
      <div className="grid h-10 p-10 items-center">
        <Link
          className="text-3xl font-medium"
          to={'/'}
        >
        
        LAVcrm
        </Link>
      </div>

      {/* Основные кнопки */}
      <div className="navBtns grid gap-2 mt-5 border-b pb-5">
        {navBtnContent.map((btn, index) => (
          <motion.div
            className="group"
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1, scaleX: 1.07, scaleY: 0.97 }}
          >
            <Link 
              className="py-3 px-7  items-center text-center rounded-2xl flex gap-5 mx-3 justify-start hover:bg-bg-primary group-hover:text-white font-medium duration-1000"
              to={btn.nav}
            >
              <span className="text-3xl text-text-primary group-hover:text-white duration-1000">{btn.icon}</span>
              {btn.title}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Нижняя часть */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1, scaleX: 1.07, scaleY: 0.97 }}
        className="mt-5 grid group"
      >
        <Link
          className="hover:bg-bg-primary py-3 px-7 items-center flex text-center mx-3 gap-5 justify-start rounded-2xl group-hover:text-white font-medium duration-1000"
          to={'/settings'}
        >
          <span className="text-3xl text-text-primary group-hover:text-white duration-1000"><AiFillSetting /></span>
            Настройки
        </Link>
      </motion.div>

      {/* Кнопка помощи */}
      <div
        className="flex flex-col items-center justify-end h-[30vh]"
      >
        <motion.div
          className="flex flex-col items-center" 
          whileHover={{ scale: 1.03 }}
        >
          <FaHandsHelping className="text-7xl text-primary mb-4"/>
          <motion.button
            className="border px-6 py-3 rounded-lg hover:bg-black hover:text-white duration-1000 font-medium"
            whileHover={{ scaleX: 1.07, scaleY: 0.95 }}
            whileTap={{ scale: 1.05 }}
          >
            Нужна помощь
          </motion.button>
        </motion.div>
      </div>

    </div>
  )
}

export default SideBar;