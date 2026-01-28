export default function FeaturePhone() {
    return (
        <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
            <div className="w-[300px] h-[600px] border-8 border-gray-800 rounded-[40px] bg-gray-900 p-4 relative shadow-2xl">
                <div className="bg-[#a2c3a2] w-full h-[200px] p-4 text-black font-mono text-sm uppercase">
                    <div className="flex justify-between mb-2">
                        <span>AGRA ONE</span>
                        <span>12:00</span>
                    </div>
                    <div className="space-y-1">
                        <p>1 Alert</p>
                        <p>Press 1 for Decision</p>
                        <p>Press 2 for Money</p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 px-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((n) => (
                        <div key={n} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold active:bg-gray-700 transition-colors cursor-pointer">
                            {n}
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-8 text-gray-400">Simulation: Feature Phone Interface</p>
        </div>
    );
}
