export default function BasicSmartphone() {
    return (
        <div className="min-h-screen bg-[#f0f9f0] p-6">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-leaf">DHARTI</h1>
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                    <span className="text-2xl">🎤</span>
                </div>
            </header>

            <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-accent">
                    <h2 className="text-xl font-bold mb-4">Today's Action</h2>
                    <div className="flex gap-4 items-center">
                        <div className="text-4xl">💧</div>
                        <p className="text-lg font-medium">Water the North Block Today</p>
                    </div>
                    <button className="w-full mt-6 py-4 bg-accent text-white rounded-2xl font-bold text-xl">
                        Done
                    </button>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Status</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-sky/10 rounded-2xl">
                            <div className="text-2xl mb-1">🌱</div>
                            <div className="font-bold text-sky">Good</div>
                        </div>
                        <div className="text-center p-4 bg-sunrise/10 rounded-2xl">
                            <div className="text-2xl mb-1">⚠️</div>
                            <div className="font-bold text-sunrise">Check Pests</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
