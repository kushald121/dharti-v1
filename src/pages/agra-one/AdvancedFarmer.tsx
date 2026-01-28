export default function AdvancedFarmer() {
    return (
        <div className="min-h-screen bg-background grain p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-display font-bold text-white">Agra <span className="text-accent">Data</span></h1>
                    <div className="flex gap-4">
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60">Expert Mode</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="glass-card p-6">
                        <h3 className="text-white/60 text-sm mb-2">Soil Moisture</h3>
                        <div className="text-4xl font-bold text-sky">35%</div>
                        <div className="h-2 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-sky w-[35%]" />
                        </div>
                    </div>
                    <div className="glass-card p-6">
                        <h3 className="text-white/60 text-sm mb-2">Crop Health</h3>
                        <div className="text-4xl font-bold text-leaf">82%</div>
                        <div className="h-2 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-leaf w-[82%]" />
                        </div>
                    </div>
                    <div className="glass-card p-6">
                        <h3 className="text-white/60 text-sm mb-2">Market Volatility</h3>
                        <div className="text-4xl font-bold text-sunrise">Low</div>
                        <div className="h-2 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-sunrise w-[20%]" />
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8 h-[400px] flex items-center justify-center">
                    <p className="text-white/40">Interactive charts will load here (NDVI, Rainfall, Market Trends)</p>
                </div>
            </div>
        </div>
    );
}
