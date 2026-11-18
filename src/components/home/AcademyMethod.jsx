import { academyMethod } from '../../data/generalData';
import { Users, UserCheck, Flame, GitFork, Cpu, Award } from 'lucide-react';

export default function AcademyMethod() {
  const icons = [Users, UserCheck, Flame, GitFork, Cpu, Award];

  return (
    <section className="py-24 bg-[#171A18] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C9F04A] font-semibold bg-[#242A25] px-3.5 py-1.5 rounded-full border border-[#323D35] inline-block mb-3">
            PEDAGOGICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Learn. Apply. Build. Deploy.
          </h2>
          <p className="mt-4 text-base text-[#A0A5A2] leading-relaxed">
            We rejected passive video playlists and toy clone apps. FDE Academy operates like a high-velocity engineering laboratory where code meets production constraints from day one.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academyMethod.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.number}
                className="group relative bg-[#1E2320] hover:bg-[#252C28] p-7 rounded-3xl border border-[#2D3630] hover:border-[#C9F04A] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#A0A5A2] group-hover:text-[#C9F04A] transition-colors">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9F04A] bg-[#2A362D] px-2.5 py-0.5 rounded-full border border-[#3C4E41]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#28312B] flex items-center justify-center text-[#C9F04A] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#C9F04A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A0A5A2] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D3630] flex items-center justify-between text-[11px] font-mono text-[#858A87]">
                  <span>FDE Standard // Verified</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9F04A]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
