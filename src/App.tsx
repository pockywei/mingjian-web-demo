import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import comicImg from './assets/comic.png';
import { 
  ChevronRight, ChevronLeft, 
  Sparkles, TrendingUp, Cpu, 
  Briefcase, MessageSquare, LineChart, 
  Globe, Zap, Target, Users,
  MessageCircle, ArrowDown, ArrowUp, UserCheck, Star, Database, Wrench, Brain, Server
} from 'lucide-react';

const slides = [
  {
    id: 'intro',
    component: () => (
      <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-indigo-50/80 border border-indigo-100/50 px-4 py-2 rounded-full text-indigo-600 text-sm tracking-wider font-medium shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-indigo-500" />
          <span>民建会员内部交流分享</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 leading-tight relative"
        >
          拥抱 AI 时代 <br />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
            企业主的新质生产力
          </span>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-16 text-purple-200/40 pointer-events-none z-[-1]"
          >
            <Sparkles className="w-32 h-32" />
          </motion.div>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed"
        >
          探索人工智能的最新进展，解析行业热点，<br/>为民建企业主在数字化浪潮中提供实战指南。
        </motion.p>
      </div>
    )
  },
  {
    id: 'current-state',
    title: "AI 到底发展到了什么地步？",
    component: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-12">
        {[
          {
            icon: <Cpu className="w-8 h-8 text-gray-700" />,
            title: "从“计算”到“生成”",
            desc: "过去的AI只能做判断题（如人脸识别），现在的AI（Generative AI）能做解答题，自动生成文本、图像、代码甚至视频。"
          },
          {
            icon: <Zap className="w-8 h-8 text-gray-700" />,
            title: "多模态与逻辑推理",
            desc: "不仅“看图说话”，更能理解复杂业务逻辑。GPT-4 等模型已具备超越普通人的专业考试水平（如律考、医考）。"
          },
          {
            icon: <TrendingUp className="w-8 h-8 text-gray-700" />,
            title: "AI 的“iPhone 时刻”",
            desc: "门槛大幅降低。你不再需要懂编程，只需用自然语言（中文）下达指令，AI 就能成为你的 24 小时超级外脑。"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-200/20 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-indigo-50 group-hover:to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'hot-companies',
    title: "目前热点的 AI 公司与产品",
    component: () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto mt-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col h-full space-y-6"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Globe className="w-6 h-6 text-gray-400" />
            <h3 className="text-2xl font-medium text-gray-800">国际巨头：技术风向标</h3>
          </div>
          {[
            { name: "OpenAI", product: "o3 / Operator", desc: "跨越 AGI 门槛！o3 系列彻底跑通了“慢思考”推理，新推出的 Operator (Agent) 正在重构所有白领与开发者的自动化工作流。" },
            { name: "Anthropic", product: "Claude / MCP", desc: "企业级霸主！其发明的 MCP 协议已成为 AI 连接外部工具的全球事实标准，企业市场份额与营收正呈现几何级爆发。" },
            { name: "NVIDIA (英伟达)", product: "AI 芯片 / 算力集群", desc: "AI 时代的“电力网”！不仅卖芯片，更通过组建超大规模数据中心构建算力基础设施，支撑全球 Agent 规模化落地。" }
          ].map((item, i) => (
            <div key={i} className="group flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:shadow-blue-500/5 transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</span>
                <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 rounded-full text-xs font-medium transition-colors">{item.product}</span>
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col h-full space-y-6"
        >
          <div className="flex items-center space-x-3 mb-2">
            <Target className="w-6 h-6 text-gray-400" />
            <h3 className="text-2xl font-medium text-gray-800">国内力量：场景落地王</h3>
          </div>
          {[
            { name: "字节跳动", product: "豆包 / Trae", desc: "拥有国内破亿的超大月活，应用生态最成熟，Trae 更是颠覆了开发者的工作流。" },
            { name: "深度求索 (DeepSeek)", product: "DeepSeek-R1", desc: "打破算力霸权！算法优化极大降低了国产芯片的推理成本，确立了开源生态统治地位。" },
            { name: "月之暗面", product: "Kimi Agent", desc: "商业化核爆！全面押注 Agent 生态，API 调用收入单月破千万美金，B 端自动化成核心。" }
          ].map((item, i) => (
            <div key={i} className="group flex-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 hover:shadow-purple-500/5 transition-all duration-300 flex flex-col hover:-translate-y-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{item.name}</span>
                <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:border-purple-100 rounded-full text-xs font-medium transition-colors">{item.product}</span>
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    )
  },
  {
    id: 'architecture',
    title: "AI 企业落地技术架构图",
    component: () => (
      <div className="w-full max-w-4xl mx-auto mt-16 flex flex-col items-center">
        <p className="text-gray-500 mb-10 font-light tracking-wide">从基础设施到业务应用的全栈协同，建立全局观</p>
        
        <div className="w-full relative flex flex-col items-center gap-3">
          
          {/* 入口层 */}
          <div className="flex w-full justify-center gap-8 z-10">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="w-1/3 bg-pink-50/80 border border-pink-100 text-pink-700 py-3 rounded-xl flex items-center justify-center shadow-sm backdrop-blur-sm font-medium">
              <MessageCircle className="w-5 h-5 mr-2" /> 飞书
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="w-1/3 bg-green-50/80 border border-green-100 text-green-700 py-3 rounded-xl flex items-center justify-center shadow-sm backdrop-blur-sm font-medium">
              <MessageCircle className="w-5 h-5 mr-2" /> 微信
            </motion.div>
          </div>

          {/* 箭头 */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex justify-center w-full space-x-32 -my-1 text-gray-300">
             <ArrowDown className="w-5 h-5" />
             <ArrowDown className="w-5 h-5" />
          </motion.div>

          {/* 系统层 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="w-full bg-red-50/80 border border-red-100 text-red-700 p-4 rounded-2xl shadow-sm flex flex-col items-center backdrop-blur-sm z-10">
            <h4 className="font-semibold text-lg mb-1">小龙虾 (OpenClaw) 系统</h4>
            <p className="text-xs text-red-500/80 font-light">豪华办公室 | 统一工位 | 权限管理 | 产出追踪</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-gray-300 -my-1"><ArrowUp className="w-5 h-5" /></motion.div>

          {/* 核心应用层 */}
          <div className="w-full relative flex justify-center z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="w-3/4 bg-purple-50/80 border border-purple-100 text-purple-700 p-5 rounded-2xl shadow-md flex flex-col items-center backdrop-blur-sm relative">
              <h4 className="font-semibold text-xl mb-1 flex items-center"><UserCheck className="w-5 h-5 mr-2"/> Agent 智能体（超级员工）</h4>
              <p className="text-sm text-purple-500/80 font-light">融合大脑 + 知识 + 工具的全能数字员工</p>
              
              {/* 业务价值侧边栏 */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 translate-x-full w-40 bg-amber-50/90 border border-amber-100 rounded-xl p-4 shadow-lg hidden lg:block backdrop-blur-md">
                 <h5 className="font-semibold text-amber-700 text-sm mb-2 flex items-center"><Star className="w-4 h-4 mr-1"/> 业务价值</h5>
                 <ul className="text-xs text-amber-600/80 space-y-1.5 font-light">
                   <li>• 24小时待命</li>
                   <li>• 无需社保</li>
                   <li>• 永不抱怨</li>
                   <li>• 成本极低</li>
                 </ul>
              </div>
            </motion.div>
          </div>

          <div className="flex w-2/3 justify-between px-12 -my-1 z-0">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-gray-300 transform rotate-45 translate-x-4"><ArrowUp className="w-5 h-5" /></motion.div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-gray-300 transform -rotate-45 -translate-x-4"><ArrowUp className="w-5 h-5" /></motion.div>
          </div>

          {/* 中间层 */}
          <div className="flex w-full justify-center gap-6 z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="w-1/2 bg-teal-50/80 border border-teal-100 text-teal-700 p-5 rounded-2xl shadow-sm flex flex-col items-center backdrop-blur-sm">
              <h4 className="font-semibold text-lg mb-1 flex items-center"><Database className="w-5 h-5 mr-2"/>知识库 RAG</h4>
              <p className="text-xs text-teal-600/80 font-light">(公司规章、报价单) + 外挂硬盘</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="w-1/2 bg-orange-50/80 border border-orange-100 text-orange-700 p-5 rounded-2xl shadow-sm flex flex-col items-center backdrop-blur-sm">
              <h4 className="font-semibold text-lg mb-1 flex items-center"><Wrench className="w-5 h-5 mr-2"/>Skills / 工具</h4>
              <p className="text-xs text-orange-600/80 font-light">ERP系统 | 邮件收发 | 上网检索</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-gray-300 -my-1"><ArrowUp className="w-5 h-5" /></motion.div>

          {/* 大脑层 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full bg-blue-50/80 border border-blue-100 text-blue-700 p-5 rounded-2xl shadow-sm flex flex-col items-center backdrop-blur-sm z-10">
            <h4 className="font-semibold text-lg flex items-center"><Brain className="w-5 h-5 mr-2"/> 大脑层 | 大模型 (最聪明的脑子)</h4>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-300 -my-1"><ArrowUp className="w-5 h-5" /></motion.div>

          {/* 基础设施层 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="w-full bg-indigo-900/90 border border-indigo-800 text-white p-5 rounded-2xl shadow-md flex flex-col items-center backdrop-blur-sm z-10">
            <h4 className="font-semibold text-lg flex items-center"><Server className="w-5 h-5 mr-2"/> 基础设施层 | GPU算力 + Token成本 (每日仅需几块钱)</h4>
          </motion.div>
          
        </div>
      </div>
    )
  },
  {
    id: 'comic-explanation',
    title: "一图看懂：招聘数字员工的全流程",
    component: () => (
      <div className="w-full max-w-5xl mx-auto mt-12 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/30 border border-gray-200/60 bg-white group hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-500"
        >
          {/* 装饰边框 */}
          <div className="absolute inset-0 border-4 border-white/40 pointer-events-none rounded-2xl z-10"></div>
          
          <img 
            src={comicImg} 
            alt="招聘数字员工全流程漫画" 
            className="w-full max-h-[65vh] object-contain block bg-[#fdfdfd]"
          />
          
          {/* 底部渐变说明区 */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent p-6 pt-12 text-white">
             <p className="text-sm font-light text-gray-200 text-center tracking-wide">
               将技术架构转化为通俗易懂的“招聘逻辑”：找脑子 → 教规矩 → 配工具 → 安排工位
             </p>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'business-cases',
    title: "民建企业主实战案例",
    component: () => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-12">
        {[
          {
            icon: <Briefcase className="w-6 h-6 text-gray-700" />,
            tag: "降本增效",
            title: "营销内容工业化",
            scenario: "一家传统制造业企业，过去每年花费几十万请外包做品牌宣传。",
            aiAction: "现在使用 AI 生成公众号推文、产品海报和短视频脚本。1个实习生 + AI工具 = 过去一个营销团队的产出。"
          },
          {
            icon: <MessageSquare className="w-6 h-6 text-gray-700" />,
            tag: "体验升级",
            title: "7x24 智能销售客服",
            scenario: "外贸企业时差问题导致线索流失，传统客服只会机械回复。",
            aiAction: "接入大模型打造“数字员工”。它能理解客户情绪，用多国语言进行多轮专业产品推介，转化率提升 30%。"
          },
          {
            icon: <LineChart className="w-6 h-6 text-gray-700" />,
            tag: "决策辅助",
            title: "高管数据与文档分析",
            scenario: "面临海量行业研报和复杂的财务报表，老板没时间细看。",
            aiAction: "把几十页PDF丢给 Kimi 或豆包，10秒内提取核心竞争优劣势、财务健康度，并直接生成一页纸的高管摘要。"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="bg-gray-50 p-3 rounded-xl">{item.icon}</div>
              <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">{item.tag}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">痛点场景</p>
                <p className="text-sm text-gray-600 font-light">{item.scenario}</p>
              </div>
              <div className="h-px w-full bg-gray-100"></div>
              <div>
                <p className="text-xs text-gray-800 uppercase tracking-wider font-semibold mb-1">AI 破局</p>
                <p className="text-sm text-gray-800 font-medium leading-relaxed">{item.aiAction}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'conclusion',
    component: () => (
      <div className="flex flex-col items-center justify-center text-center space-y-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
            AI 不会淘汰企业，<br/>
            <span className="font-semibold">但会淘汰不会用 AI 的企业。</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            建议各位企业主：先给团队开通几个 AI 会员，从简单的写周报、写文案开始，培养组织的 AI 意识。小步快跑，拥抱变化。
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center space-x-2 text-gray-400"
        >
          <span className="text-sm tracking-widest uppercase">Q & A / 交流环节</span>
        </motion.div>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen w-full bg-[#fafafa] flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-gray-200">
      
      {/* 顶部进度条 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
        <motion.div 
          className="h-full bg-gray-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* 科技感点阵背景 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNCkiLz48L3N2Zz4=')] pointer-events-none z-0"></div>

      {/* AI 风格全息呼吸光晕 */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-blue-400/20 via-cyan-400/20 to-transparent rounded-full blur-3xl pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ y: [0, -40, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-gradient-to-tr from-fuchsia-400/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" 
      />

      {/* 头部标题 (除首页和尾页) */}
      <AnimatePresence mode="wait">
        {slides[currentSlide].title && (
          <motion.div 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-12 md:top-20 w-full text-center px-6"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
              {slides[currentSlide].title}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 主内容区 */}
      <main className="w-full px-6 py-24 flex-1 flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 底部导航控件 */}
      <div className="absolute bottom-8 w-full px-12 flex justify-between items-center z-20">
        <div className="text-sm font-medium text-gray-400 tracking-widest">
          {String(currentSlide + 1).padStart(2, '0')} <span className="text-gray-300 mx-1">/</span> {String(slides.length).padStart(2, '0')}
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
              currentSlide === 0 
                ? 'bg-gray-100/50 text-gray-300 cursor-not-allowed' 
                : 'bg-white text-gray-600 shadow-sm hover:shadow-md border border-gray-100 hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
              currentSlide === slides.length - 1 
                ? 'bg-gray-100/50 text-gray-300 cursor-not-allowed' 
                : 'bg-gray-900 text-white shadow-md hover:shadow-lg hover:scale-105'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
