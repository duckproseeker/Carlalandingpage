import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { 
  ArrowRight, 
  Cpu, 
  Network, 
  Activity, 
  MonitorPlay, 
  Server, 
  Boxes,
  Crosshair,
  GitMerge,
  TerminalSquare,
  BarChart3,
  ChevronRight,
  Gauge,
  Menu,
  X
} from "lucide-react";
import logoImage from "../../imports/image.png";

// --- Navigation Bar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#050508]/60 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent py-6"
        } px-6 lg:px-12 flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="SimChip Nexus Logo" 
            className="h-8 md:h-10 w-auto object-contain invert mix-blend-screen opacity-90" 
          />
          <span className="font-bold text-white tracking-widest text-sm md:text-base">SimChip Nexus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300 tracking-wide">
          <a href="#goals" className="hover:text-cyan-300 transition-colors">项目愿景</a>
          <a href="#capabilities" className="hover:text-cyan-300 transition-colors">核心能力</a>
          <a href="#architecture" className="hover:text-cyan-300 transition-colors">技术架构</a>
          <a href="#workflow" className="hover:text-cyan-300 transition-colors">测试工作流</a>
        </div>

        <div className="hidden md:block">
          <Link 
            to="/ui" 
            className="px-6 py-2.5 text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            进入平台
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-6 md:hidden">
          <a href="#goals" onClick={() => setMobileMenuOpen(false)} className="text-xl text-zinc-300 hover:text-white border-b border-white/10 pb-4">项目愿景</a>
          <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-xl text-zinc-300 hover:text-white border-b border-white/10 pb-4">核心能力</a>
          <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="text-xl text-zinc-300 hover:text-white border-b border-white/10 pb-4">技术架构</a>
          <a href="#workflow" onClick={() => setMobileMenuOpen(false)} className="text-xl text-zinc-300 hover:text-white border-b border-white/10 pb-4">测试工作流</a>
          <Link 
            to="/ui" 
            className="mt-4 px-6 py-3 text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
          >
            进入平台
          </Link>
        </div>
      )}
    </>
  );
};

// --- Animated Dynamic Background ---
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050508]">
      {/* 预留动图/视频背景位置：后续您可以取消注释并替换为您准备好的动图/视频 */}
      {/* <img 
        src="YOUR_ANIMATED_BG_URL.gif" 
        alt="Animated Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
      /> */}
      
      {/* Floating abstract glowing orbs to enhance liquid glass effect */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/30 rounded-full blur-[150px]"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[150px]"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[30%] left-[60%] w-[30vw] h-[30vw] bg-indigo-500/20 rounded-full blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating data particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-[2px] h-[2px] bg-cyan-300 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: Math.random() * 0.5 + 0.1
          }}
          animate={{
            y: [null, `${Math.random() * 100}vh`],
            opacity: [null, Math.random() * 0.8 + 0.2, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// --- Section 1: Hero ---
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 z-10">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 bg-white/5 backdrop-blur-xl rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-50 tracking-widest uppercase">Research Project / Prototype</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          SimChip Nexus<br />
          <span className="text-4xl md:text-6xl lg:text-7xl mt-4 block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300">芯境智测平台</span>
        </motion.h1>

        <motion.p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          面向自动驾驶域控制器，提供结合 CARLA 闭环仿真与硬件在环 (HIL) 测试的端到端性能评估基准。
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Link 
            to="/ui"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:scale-105 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            进入平台
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <a 
            href="#architecture"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/10 hover:border-cyan-300/50 text-zinc-300 hover:text-white font-medium rounded-full transition-all duration-300 text-center"
          >
            查看技术架构
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">向下滚动</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- Section 2: Goals & Context ---
const ObjectivesSection = () => {
  return (
    <section id="goals" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8 p-10 md:p-14 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-cyan-400 font-mono text-sm tracking-widest uppercase border-b border-white/10 pb-4 mb-8 inline-block">
                01 // 突破物理限制
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
                突破纯软件仿真的<br/>局限性
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed font-light">
                传统的自动驾驶路测面临着成本高昂、危险性大、长尾场景难以覆盖等问题。而纯软件环境的仿真测试往往脱离了真实物理硬件，无法有效暴露域控制器芯片在算力、延迟、吞吐等方面的实际瓶颈。
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 p-10 md:p-14 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 to-transparent pointer-events-none" />
             <div className="relative z-10">
              <div className="text-blue-400 font-mono text-sm tracking-widest uppercase border-b border-white/10 pb-4 mb-8 inline-block">
                02 // 虚实结合
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
                构建高保真虚实结合<br/>评估体系
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed font-light mb-6">
                本项目致力于通过构建高保真的虚拟场景注入网络，将 CARLA 仿真环境与真实的车载算力待测端深度结合，提供一套标准化、可复现的硬件在环 (HIL) 评测基准与可视化平台。
              </p>
              <ul className="space-y-4 pt-4 border-t border-white/5">
                {[
                  "多传感器数据级同步注入",
                  "全链路延迟测量与性能剖析",
                  "异构芯片通用适配架构"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-200">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Core Capabilities ---
const capabilities = [
  {
    id: "01",
    title: "场景配置与任务管理",
    desc: "支持基于 OpenSCENARIO 的标准化场景解析，灵活配置天气、光照及动态障碍物行为，并实现评测任务的队列化管理。",
    icon: <MonitorPlay className="w-6 h-6 text-cyan-300" />
  },
  {
    id: "02",
    title: "测试执行与过程控制",
    desc: "统筹 CARLA 仿真引擎、传感器网关与待测端，实现测试用例的自动化启停、时钟同步控制与异常熔断处理。",
    icon: <TerminalSquare className="w-6 h-6 text-cyan-300" />
  },
  {
    id: "03",
    title: "芯片运行状态监测",
    desc: "实时采集车载算力节点的 CPU/GPU 利用率、内存消耗、温度及功耗指标，支持高频数据落盘。",
    icon: <Cpu className="w-6 h-6 text-cyan-300" />
  },
  {
    id: "04",
    title: "结果汇总与测评输出",
    desc: "对时延、帧率、吞吐量等核心指标进行统计分析，生成多维度的量化评估报告与性能分布雷达图。",
    icon: <BarChart3 className="w-6 h-6 text-cyan-300" />
  }
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">核心能力支持</h2>
          <p className="text-cyan-400 font-mono tracking-widest uppercase text-sm">PLATFORM CAPABILITIES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative p-10 md:p-12 rounded-[2rem] bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden group hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner">
                    {cap.icon}
                  </div>
                  <span className="text-4xl font-light text-white/20 group-hover:text-cyan-400/50 transition-colors font-mono">
                    {cap.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{cap.title}</h3>
                <p className="text-zinc-300 leading-relaxed text-lg font-light">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 4: Architecture ---
const architectureLayers = [
  {
    name: "场景仿真层",
    en: "SCENARIO SIMULATION",
    items: ["CARLA 仿真引擎", "物理级传感器建模", "OpenSCENARIO 驱动引擎"]
  },
  {
    name: "虚拟传感器中间件层",
    en: "SENSOR MIDDLEWARE",
    items: ["协议转换", "网关注入", "数据格式解包与时间戳对齐"]
  },
  {
    name: "芯片测试层",
    en: "DUT / CHIP TESTING",
    items: ["车载算力芯片", "感知算法推理", "状态回传代理"]
  },
  {
    name: "评估分析层",
    en: "EVALUATION & ANALYSIS",
    items: ["时延链路分析", "吞吐量计算", "系统资源监控", "结果报告生成"]
  }
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">平台技术架构</h2>
          <p className="text-blue-400 font-mono tracking-widest uppercase text-sm">ARCHITECTURE DESIGN</p>
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col gap-12">
          {/* Central Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 z-0" />

          {architectureLayers.map((layer, idx) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center gap-8 group"
            >
              {/* Desktop Node Marker */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-black/50 backdrop-blur-md border-[2px] border-cyan-500/50 rounded-full items-center justify-center group-hover:border-cyan-300 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <div className="w-2 h-2 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Mobile Node Line */}
              <div className="absolute left-8 top-16 bottom-0 w-[1px] bg-cyan-500/30 md:hidden" />

              {/* Left Side: Layer Title */}
              <div className="md:w-1/2 flex-shrink-0 flex justify-end">
                <div className="relative overflow-hidden p-8 w-full md:w-5/6 text-left md:text-right rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:border-cyan-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 pointer-events-none" />
                  <h3 className="relative z-10 text-2xl font-bold text-white mb-2">{layer.name}</h3>
                  <p className="relative z-10 text-sm font-mono text-cyan-200/60 tracking-widest">{layer.en}</p>
                </div>
              </div>

              {/* Right Side: Layer Items */}
              <div className="md:w-1/2 flex-grow pl-14 md:pl-0">
                <div className="grid grid-cols-1 gap-4 md:w-5/6">
                  {layer.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/[0.03] backdrop-blur-lg border border-white/10 text-base text-zinc-200 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all shadow-lg">
                      <Boxes className="w-5 h-5 text-cyan-500/70 group-hover:text-cyan-300 transition-colors" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 5: Workflow ---
const WorkflowSection = () => {
  const steps = [
    { title: "CARLA 仿真主机", desc: "渲染场景并生成传感器原始数据", icon: <MonitorPlay className="w-6 h-6" /> },
    { title: "虚拟传感器注入网关", desc: "打包、同步并物理转发数据包", icon: <Network className="w-6 h-6" /> },
    { title: "车载算力芯片待测端", desc: "运行规控感知算法，处理负载", icon: <Cpu className="w-6 h-6" /> },
    { title: "Web 测评平台", desc: "调度执行，汇总日志与评测数据", icon: <Server className="w-6 h-6" /> },
  ];

  return (
    <section id="workflow" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">测试工作流</h2>
          <p className="text-cyan-400 font-mono tracking-widest uppercase text-sm">END-TO-END DATA FLOW</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-4 justify-between">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="w-full lg:w-1/4 p-8 rounded-[2rem] bg-white/[0.04] backdrop-blur-2xl border border-white/10 relative flex flex-col group hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-all" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    {step.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-xl">{step.title}</h4>
                  <p className="text-zinc-300 text-base mt-auto font-light leading-relaxed">{step.desc}</p>
                </div>
                
                <div className="absolute bottom-4 right-6 text-white/5 font-mono text-5xl font-bold group-hover:text-white/10 transition-colors">
                  0{idx + 1}
                </div>
              </motion.div>

              {/* Arrow separator */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-white/20">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
              {idx < steps.length - 1 && (
                <div className="flex lg:hidden py-4 text-white/20 rotate-90">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 6: Final CTA ---
const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 flex flex-col items-center text-center relative z-10 overflow-hidden mt-12">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      <div className="relative z-10 p-12 md:p-20 rounded-[3rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-w-5xl mx-auto w-full">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">准备好开始测试了吗？</h2>
        <p className="text-zinc-300 mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">
          平台核心服务已就绪。进入系统，配置仿真场景并接入您的域控制器节点。
        </p>
        <Link 
          to="/ui"
          className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 hover:scale-105 text-white font-semibold rounded-full transition-all duration-300 w-full sm:w-auto text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          进入测评平台
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

// --- Main Layout ---
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-50 relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <ObjectivesSection />
      <CapabilitiesSection />
      <ArchitectureSection />
      <WorkflowSection />
      <FinalCTASection />
      
      <footer className="py-12 text-center text-zinc-500 text-sm font-mono relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl">
        <p>© 2026 SimChip Nexus. All rights reserved.</p>
        <p className="mt-2 text-zinc-600">Built for Hardware-in-the-Loop Simulation & Research.</p>
      </footer>
    </div>
  );
}
