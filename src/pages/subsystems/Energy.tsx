import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Sun, Battery, Zap, TrendingUp, Power } from 'lucide-react';

export default function Energy() {
    const navigate = useNavigate();

    const energySources = [
        { id: '1', name: 'Solar Panel Array', capacity: 5, current: 4.2, status: 'Active' },
        { id: '2', name: 'Wind Turbine', capacity: 2, current: 1.8, status: 'Active' },
        { id: '3', name: 'Grid Connection', capacity: 10, current: 0, status: 'Backup' },
    ];

    const energyConsumption = [
        { device: 'Irrigation Pump', usage: 3.5, percentage: 58 },
        { device: 'Storage Facility', usage: 1.2, percentage: 20 },
        { device: 'Processing Unit', usage: 0.8, percentage: 13 },
        { device: 'Lighting', usage: 0.5, percentage: 9 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-sunrise/10 via-background to-leaf/10">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Button>
                </div>

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        AGRA <span className="text-sunrise">Energy</span>
                    </h1>
                    <p className="text-muted-foreground">Renewable energy management and monitoring</p>
                </div>

                {/* Main Energy Control */}
                <Card className="mb-6">
                    <CardContent className="pt-6">
                        <div className="text-center mb-6">
                            <Sun className="w-16 h-16 mx-auto text-sunrise mb-4" />
                            <h2 className="text-2xl font-bold mb-2">Solar Pump Control</h2>
                            <p className="text-muted-foreground">Real-time energy monitoring</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <Battery className="w-8 h-8 mx-auto text-leaf mb-2" />
                                <div className="text-sm text-muted-foreground mb-1">Battery</div>
                                <div className="text-3xl font-bold text-leaf">94%</div>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <Zap className="w-8 h-8 mx-auto text-sky mb-2" />
                                <div className="text-sm text-muted-foreground mb-1">Output</div>
                                <div className="text-3xl font-bold text-sky">4.2 kW</div>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <TrendingUp className="w-8 h-8 mx-auto text-sunrise mb-2" />
                                <div className="text-sm text-muted-foreground mb-1">Today</div>
                                <div className="text-3xl font-bold">28 kWh</div>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <Sun className="w-8 h-8 mx-auto text-sunrise mb-2" />
                                <div className="text-sm text-muted-foreground mb-1">Savings</div>
                                <div className="text-3xl font-bold">₹420</div>
                            </div>
                        </div>

                        <Button className="w-full" size="lg">
                            <Power className="w-4 h-4 mr-2" />
                            Start Pump Schedule
                        </Button>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Energy Sources */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Energy Sources</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {energySources.map(source => (
                                <div key={source.id} className="p-4 bg-muted/50 rounded-lg">
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <h3 className="font-bold">{source.name}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {source.current} kW / {source.capacity} kW capacity
                                            </p>
                                        </div>
                                        <Badge variant={source.status === 'Active' ? 'default' : 'secondary'}>
                                            {source.status}
                                        </Badge>
                                    </div>
                                    <Progress value={(source.current / source.capacity) * 100} className="h-2" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Energy Consumption */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Energy Consumption</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {energyConsumption.map(item => (
                                <div key={item.device} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{item.device}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">{item.usage} kW</span>
                                            <Badge variant="outline">{item.percentage}%</Badge>
                                        </div>
                                    </div>
                                    <Progress value={item.percentage} className="h-2" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
