import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function UIPlaceholder() {
  return (
    <div className="min-h-screen bg-[#050508] text-zinc-300 flex flex-col items-center justify-center p-8 font-mono">
      <div className="max-w-md w-full border border-cyan-900/30 bg-[#0a0a0e] p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50"></div>
        <h1 className="text-xl text-cyan-400 mb-4">/ui - Web 测评平台控制台</h1>
        <p className="text-sm text-zinc-500 mb-8">
          此处为内部控制台视图，根据要求着陆页无需展示此部分的真实界面。
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回着陆页
        </Link>
      </div>
    </div>
  );
}
