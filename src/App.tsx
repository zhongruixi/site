/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  Car, 
  Award, 
  ShieldCheck, 
  Languages,
  ChevronRight,
  Star,
  Clock,
  Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    title: "Class 7 License",
    titleCn: "7级驾照 (GLP)",
    description: "Comprehensive training for new drivers to pass their initial road test.",
    descriptionCn: "针对新手司机的全面培训，助力顺利通过路考。",
    icon: <Car className="w-6 h-6" />
  },
  {
    title: "Class 5 License",
    titleCn: "5级驾照",
    description: "Advanced techniques for experienced drivers to obtain full privileges.",
    descriptionCn: "针对有经验司机的进阶技巧培训，获取全牌照。",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Mock Road Test",
    titleCn: "模拟路考",
    description: "English mock tests to familiarize you with examiner standards.",
    descriptionCn: "全英文模拟路考，熟悉考官评分标准和指令。",
    icon: <Navigation className="w-6 h-6" />
  }
];

const FEATURES = [
  {
    title: "Bilingual Teaching",
    titleCn: "中英文双语教学",
    desc: "Clear explanations in Mandarin/Cantonese with English terminology.",
    descCn: "中文讲解核心要领，英文模拟路考指令。"
  },
  {
    title: "Route Analysis",
    titleCn: "考区线路剖析",
    desc: "In-depth analysis of test routes and common traps in various areas.",
    descCn: "精通各考区路线，剖析考场陷阱，掌握评分标准。"
  },
  {
    title: "Safety First",
    titleCn: "安全驾驶理念",
    desc: "Focus on North American rules and defensive driving habits.",
    descCn: "着重培养北美安全驾驶习惯，理论与实际相结合。"
  },
  {
    title: "Dual-Control Car",
    titleCn: "双控教练车",
    desc: "New Toyota Corolla equipped with dual controls for your safety.",
    descCn: "全新丰田Corolla双控教练车，安全可靠。"
  }
];

const AREAS = ["Vancouver", "Richmond", "Burnaby", "Coquitlam", "Surrey", "Langley"];
const AREAS_CN = ["温哥华", "列治文", "本拿比", "高贵林", "素里", "兰里"];

const TESTIMONIALS = [
  {
    name: "Ms. N",
    nameCn: "N 小姐",
    location: "Richmond",
    locationCn: "列治文",
    text: "Coach Zhong is truly a 'divine coach'—upright, professional, and not at all arrogant. He never forced me to buy more lessons and was always on time. He's incredibly gentle, never yelled, and corrected my driving habits step-by-step. Before the test, he patiently comforted my nerves and accompanied me into the testing center like a father figure. Passed on the first try!",
    textCn: "钟教练人真的很好，很正派，完全不高傲！从不强迫我买课，练几节都准时来接我。讲话很温和，没有一次吼过我，一点一点帮我纠正驾驶习惯。考前他不厌其烦地安慰我，陪着我进考场，像老父亲一样陪着我！Richmond 一次过！"
  },
  {
    name: "Ms. L",
    nameCn: "L 小姐",
    location: "Xiaohongshu",
    locationCn: "小红书评论",
    text: "Passed BC road test on the first try! Huge thanks to Coach Zhong. He's a veteran with 20+ years of experience, kind, and an amazing teacher. My friend and I both took just two lessons and passed first time. His students rarely fail. If you need a coach, contact this master—you won't be disappointed!",
    textCn: "BC驾考一次通过啦！感谢我的师傅钟教练，一位身经百战、和蔼可亲、超级会教的教练。据说从业20几年，我和我的战友各上了两次课，全都一把过！他的学员基本很少有被FAIL的。有需要请联系这位大师，绝对不会失望。"
  },
  {
    name: "Ms. H",
    nameCn: "H 小姐",
    location: "Xiaohongshu",
    locationCn: "小红书评论",
    text: "Got my Class 5 license in 18 days with 4 lessons! After failing my first attempt with another coach, I found Coach Zhong. He never rushed me and kept my confidence high. He taught me how to handle complex road situations smoothly. Finding the right coach is so important in Canada—highly recommend Coach Zhong!",
    textCn: "18天4次课，拿到5级驾照！之前路考挂科过，钟教练带教过程完全没有着急催促，情绪值拉满！他教我如何处理各种路况，让驾驶变得丝滑。在加拿大考驾照找对教练真的很重要，诚意推荐钟教！"
  }
];

export default function App() {
  const [isChinese, setIsChinese] = useState(true);

  const t = (en: string, cn: string) => isChinese ? cn : en;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="/assets/725 驾校logo.jpeg" 
                  alt="725 Driving School Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to icon if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('bg-emerald-600', 'p-1.5');
                    const icon = document.createElement('div');
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car text-white"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>';
                    e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
                  }}
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">
                725 <span className="text-emerald-600">Driving School</span>
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsChinese(!isChinese)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium"
              >
                <Languages className="w-4 h-4 text-slate-600" />
                {isChinese ? "English" : "中文"}
              </button>
              <a 
                href="tel:7788596116"
                className="hidden sm:flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md font-medium"
              >
                <Phone className="w-4 h-4" />
                778-859-6116
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/725 驾校logo.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFB]/80 via-[#FDFCFB]/40 to-[#FDFCFB]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-100">
              <Award className="w-4 h-4" />
              {t("ICBC Road Star Award Winner", "获得ICBC道路之星称号")}
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              {t("Master the Road with", "跟")} <span className="text-emerald-600">{t("725 Driving School", "725 驾校")}</span> {t("", "学开车")}
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              {t(
                "Professional ICBC registered instructor with years of North American experience. Bilingual teaching tailored for the Chinese community in Greater Vancouver.",
                "ICBC注册驾驶教练，多年北美安全驾驶及教车经验。中英文教学讲解，助力您轻松掌握驾驶技术，一次通过路考。"
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:7788596116"
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {t("Call Now", "立即拨打")}
              </a>
              <div className="bg-white border border-slate-200 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 text-slate-700">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-normal text-slate-500 mr-1">{t("WeChat:", "微信号:")}</span>
                richard651zhong
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="/assets/725 驾校logo.jpeg" 
                alt="725 Driving School Banner" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-sm font-bold text-slate-800 mb-1">{t("High Pass Rate", "一次通过率高")}</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t("Specializing in route analysis and examiner scoring standards.", "精通考规及考区路线，剖析线路陷阱。")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: t("Years Experience", "教车经验"), value: "10+" },
            { label: t("Success Rate", "通过率"), value: "95%" },
            { label: t("Cities Served", "服务城市"), value: "6" },
            { label: t("Happy Students", "学员好评"), value: "1000+" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t("Our Professional Services", "专业教学服务")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {t("Tailored driving lessons for every stage of your journey.", "针对不同阶段的学员提供定制化教学方案。")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(service.title, service.titleCn)}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t(service.description, service.descriptionCn)}
                </p>
                <ul className="space-y-3">
                  {[1, 2, 3].map(j => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {t("Professional Guidance", "专业指导")}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                {t("Why Choose 725 Driving School?", "为什么选择 725 驾校？")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {FEATURES.map((feature, i) => (
                  <div key={i}>
                    <h4 className="text-emerald-400 font-bold mb-2">{t(feature.title, feature.titleCn)}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t(feature.desc, feature.descCn)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2.5rem]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-emerald-400" />
                {t("Service Areas", "服务区域")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {AREAS.map((area, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium">{t(area, AREAS_CN[i])}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-400 text-sm italic">
                {t("* Serving Vancouver, Richmond, Burnaby, Coquitlam, Surrey, and Langley.", "* 服务于温哥华，列治文，本拿比，高贵林，素里及兰里地区。")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 px-4 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-8">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-left">
                {t("Teaching Philosophy", "教学特色")}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed italic text-left">
                "{t(
                  "Focusing on the combination of theory and practice, standard demonstrations and diagrams. Easy to understand, helping students correct bad habits and become safe, excellent drivers.",
                  "着重理论与实际相结合，标准示范及图解。听着轻松，学着易懂。帮助学者改正不良习惯，熟悉和遵守北美开车规则，成为安全的优秀驾驶者。"
                )}"
              </p>
              <div className="mt-8 font-bold text-slate-900 text-left">
                Richard 钟教练
                <span className="block text-sm font-normal text-slate-500 uppercase tracking-widest mt-1">
                  {t("ICBC Registered Instructor", "ICBC注册驾驶教练")}
                </span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/assets/IMG_3451.jpeg" 
                  alt="Richard 钟教练 - Driving Instructor" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("Connect on WeChat", "微信扫码咨询")}</h3>
              <p className="text-slate-500 mb-8">{t("Scan to add Richard 钟教练 and book your first lesson", "扫码添加 Richard 钟教练，预约您的第一堂课")}</p>
              
              <div className="w-64 h-64 mx-auto bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 relative group">
                <img 
                  src="/assets/IMG_3463.jpeg" 
                  alt="WeChat QR Code" 
                  className="w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold">
                <span className="text-xs font-normal text-slate-400 uppercase tracking-wider">{t("ID:", "微信号:")}</span>
                richard651zhong
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t("Student Success Stories", "学员好评")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {t("Real feedback from our students who passed their road tests with confidence.", "来自成功通过路考学员的真实反馈。")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-slate-600 leading-relaxed italic mb-8">
                    "{t(testimonial.text, testimonial.textCn)}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                    {testimonial.name.charAt(testimonial.name.indexOf('.') + 2)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t(testimonial.name, testimonial.nameCn)}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{t(testimonial.location, testimonial.locationCn)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:items-center gap-12">
              <div className="lg:text-center max-w-3xl">
                <h2 className="text-4xl font-bold mb-6">{t("Ready to Start?", "准备好开始了吗？")}</h2>
                <p className="text-slate-400 text-lg mb-8">
                  {t("Contact Richard 钟教练 today to book your first lesson and take the first step towards your license.", "今天就联系 Richard 钟教练，预约您的第一堂课，迈向驾照的第一步。")}
                </p>
                <div className="space-y-6 inline-flex flex-col items-start lg:items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-slate-400">{t("Call or Text", "电话咨询")}</p>
                      <p className="text-xl font-bold">778-859-6116</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-slate-400">{t("WeChat ID", "微信咨询")}</p>
                      <p className="text-xl font-bold">richard651zhong</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:hidden bg-white rounded-[2rem] p-8 text-slate-900 w-full max-w-lg mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">{t("Quick Inquiry", "快速咨询")}</h3>
                <form 
                  className="space-y-4" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const phone = formData.get('phone');
                    const message = formData.get('message');
                    const body = encodeURIComponent(`Hi Richard, I'm ${name} (${phone}). ${message}`);
                    window.location.href = `sms:7788596116?body=${body}`;
                  }}
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t("Name", "姓名")}</label>
                    <input name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder={t("Your Name", "您的姓名")} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t("Phone", "电话")}</label>
                    <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="778-000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">{t("Message", "留言")}</label>
                    <textarea name="message" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all h-32" placeholder={t("How can we help?", "您想咨询什么？")}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg">
                    {t("Send SMS", "发送短信")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md overflow-hidden border border-slate-700">
              <img 
                src="/assets/725 驾校logo.jpeg" 
                alt="725 Driving School Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">
              725 <span className="text-emerald-600">Driving School</span>
            </span>
          </div>
          
          <div className="text-slate-400 text-sm">
            © 2026 725 Driving School. {t("All rights reserved.", "版权所有。")}
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-emerald-600 transition-colors"><MessageSquare className="w-5 h-5" /></a>
            <a href="tel:7788596116" className="hover:text-emerald-600 transition-colors"><Phone className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
