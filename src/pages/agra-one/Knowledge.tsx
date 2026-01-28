export default function AgraKnowledge() {
    return (
        <div className="min-h-screen bg-background grain p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-display font-bold text-white mb-12">Agra <span className="text-accent">Knowledge</span></h1>

                <div className="grid gap-8">
                    <div className="glass-card p-8">
                        <div className="flex gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-3xl">🧩</div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2">Why did AGRA suggest this?</h2>
                                <p className="text-white/60 mb-4">Click below to see the data triangulation process for your latest irrigation alert.</p>
                                <button className="px-6 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold border border-accent/30">
                                    View Logic Tree
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-card p-6">
                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">New Lesson</span>
                            <h3 className="text-lg font-bold text-white mt-2">Drip Irrigation Basics</h3>
                            <p className="text-white/60 text-sm mt-2">A 2-minute visual guide on optimizing water flow for cotton crops.</p>
                        </div>
                        <div className="glass-card p-6">
                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Case Study</span>
                            <h3 className="text-lg font-bold text-white mt-2">Pest Control Success</h3>
                            <p className="text-white/60 text-sm mt-2">How 40 farmers in your village saved 20% on pesticide costs last month.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
