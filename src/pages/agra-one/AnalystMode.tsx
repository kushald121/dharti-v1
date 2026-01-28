export default function AnalystMode() {
    return (
        <div className="min-h-screen bg-[#020817] p-8">
            <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                <h1 className="text-3xl font-display font-bold text-white">Regional <span className="text-sky">Analytics</span></h1>
                <nav className="flex gap-6 text-white/60">
                    <span className="hover:text-white cursor-pointer">Heatmaps</span>
                    <span className="hover:text-white cursor-pointer">Yield Models</span>
                    <span className="hover:text-white cursor-pointer">Pest Tracking</span>
                </nav>
            </header>

            <div className="flex gap-8 h-[calc(100vh-200px)]">
                <div className="w-1/3 glass-card p-6 overflow-y-auto">
                    <h2 className="text-xl font-bold text-white mb-6">Regional Alerts</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="text-sunrise text-sm font-bold mb-1">PEST RISK - SEVERE</div>
                                <div className="text-white/80">Locust movement detected in neighboring West-Gate region.</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 glass-card p-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)]" />
                    </div>
                    <p className="text-white/40 z-10">Advanced Geospatial Information System (GIS) View</p>
                </div>
            </div>
        </div>
    );
}
