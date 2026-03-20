/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      <motion.div 
        className="box bg-white w-full max-w-2xl overflow-hidden rounded-xl"
        style={{ 
          boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.15)' 
        }}
        whileHover={{ 
          x: [0, -4, 4, -4, 4, 0],
          transition: { duration: 0.4, ease: "easeInOut" }
        }}
      >
        <div 
          className="top relative h-[330px] bg-cover bg-center flex items-end"
          style={{ backgroundImage: `url('https://pic.pimg.tw/sidney6811/1529508979-1559019819_n.jpg')` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <h2 className="relative z-10 p-8 text-white text-4xl font-serif tracking-wide drop-shadow-md">
            浮光書店 <span className="text-lg font-sans font-light opacity-90 ml-2">IlluminationBooks</span>
          </h2>
        </div>
        
        <div className="bottom p-8 sm:p-12">
          <ul className="space-y-6 mb-10">
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <h3 className="font-bold text-stone-800 text-sm uppercase tracking-widest w-24 shrink-0">地址：</h3>
              <span className="text-stone-600 font-light">號 2 樓, No. 16赤峰街47巷大同區台北市103</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <h3 className="font-bold text-stone-800 text-sm uppercase tracking-widest w-24 shrink-0">電話：</h3>
              <span className="text-stone-600 font-light">02 2550 7288</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <h3 className="font-bold text-stone-800 text-sm uppercase tracking-widest w-24 shrink-0">開放時間：</h3>
              <span className="text-stone-600 font-light">今日正常營業 · 14:00–21:30</span>
            </li>
          </ul>
          
          <div className="bottons flex flex-wrap gap-4">
            <a 
              href="#" 
              className="btn1 px-8 py-3 bg-stone-800 text-stone-50 rounded-full text-sm font-medium hover:bg-stone-900 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              前往網站
            </a>
            <a 
              href="#" 
              className="btn2 px-8 py-3 border border-stone-300 text-stone-800 rounded-full text-sm font-medium hover:bg-stone-50 transition-all duration-300"
            >
              更多資訊
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
