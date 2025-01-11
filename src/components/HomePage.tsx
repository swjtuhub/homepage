"use client";

import { MdEmail } from "react-icons/md";
import { FaGithub, FaUsers } from "react-icons/fa";

interface Product {
  name: string;
  description: string;
  link: string;
}

const products: Product[] = [
  {
    name: "资料库",
    description: "往年试卷、课程资料等",
    link: "https://swjtuhub.cn",
  },
  {
    name: "SWJTU Wiki",
    description: "西南交通大学 Wiki",
    link: "https://wiki.swjtu.top",
  },
  {
    name: "MikaBot",
    description: "多功能校园服务机器人（暂未开放）",
    link: "#",
  },
  {
    name: "Thesis Template",
    description: "本科生毕业论文 LaTeX 模板",
    link: "https://github.com/swjtuhub/SWJTU_Thesis_Template",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-8 py-8 min-h-screen flex flex-col justify-center max-w-7xl">
      <header className="text-center mb-12">
        <h1 className="text-5xl text-gray-800 mb-4">SWJTU Hub</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
        {products.map((product, index) => (
          <a
            key={index}
            href={product.link}
            className="bg-white rounded-3xl p-8 no-underline transition-all duration-200 
                     hover:transform hover:-translate-y-1 hover:shadow-lg shadow-md"
            target="_blank"
            rel="noopener noreferrer">
            <h2 className="text-2xl text-gray-800 mb-4">{product.name}</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </a>
        ))}
      </main>

      <div className="text-center mt-12">
        <div className="space-x-8">
          <a
            href="mailto:swjtuhub@foxmail.com"
            className="text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer">
            <MdEmail className="inline" />
          </a>
          <a
            href="https://github.com/swjtuhub"
            className="text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub className="inline" />
          </a>
          <a
            href="https://pd.qq.com/s/2huynuxrx"
            className="text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer">
            <FaUsers className="inline" />
          </a>
        </div>
      </div>
    </div>
  );
}
