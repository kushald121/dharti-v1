import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, TrendingUp, Leaf, Droplets, ThermometerSun } from 'lucide-react';

export default function Land() {
    const navigate = useNavigate();

    const landParcels = [
        { id: '1', name: 'North Block', area: 10, soilType: 'Loamy', ph: 6.8, fertility: 'High' },
        { id: '2', name: 'South Block', area: 8, soilType: 'Clay', ph: 7.2, fertility: 'Medium' },
        { id: '3', name: 'East Block', area: 7, soilType: 'Sandy Loam', ph: 6.5, fertility: 'High' },
    ];

    const suitableCrops = [
        { name: 'Wheat', suitability: 95, season: 'Rabi' },
        { name: 'Cotton', suitability: 88, season: 'Kharif' },
        { name: 'Rice', suitability: 82, season: 'Kharif' },
        { name: 'Soybean', suitability: 78, season: 'Kharif' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky/10 via-background to-leaf/10">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Button>
                </div>

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        AGRA <span className="text-sky">Land</span>
                    </h1>
                    <p className="text-muted-foreground">Land management and soil health monitoring</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <TrendingUp className="w-5 h-5 text-leaf" />
                                <h3 className="text-sm text-muted-foreground">Productivity Score</h3>
                            </div>
                            <div className="text-4xl font-bold">A-</div>
                            <p className="text-sm text-muted-foreground mt-2">Superior to 85% of region</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <MapPin className="w-5 h-5 text-sky" />
                                <h3 className="text-sm text-muted-foreground">Lease Estimate</h3>
                            </div>
                            <div className="text-4xl font-bold">₹24,500</div>
                            <p className="text-sm text-muted-foreground mt-2">Per year, inflation adjusted</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 mb-2">
                                <Leaf className="w-5 h-5 text-leaf" />
                                <h3 className="text-sm text-muted-foreground">Total Area</h3>
                            </div>
                            <div className="text-4xl font-bold">25</div>
                            <p className="text-sm text-muted-foreground mt-2">Acres under cultivation</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Land Parcels */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Land Parcels</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {landParcels.map(parcel => (
                                <div key={parcel.id} className="p-4 bg-muted/50 rounded-lg">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="font-bold">{parcel.name}</h3>
                                            <p className="text-sm text-muted-foreground">{parcel.area} acres</p>
                                        </div>
                                        <Badge variant={parcel.fertility === 'High' ? 'default' : 'secondary'}>
                                            {parcel.fertility} Fertility
                                        </Badge>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Droplets className="w-4 h-4 text-sky" />
                                            <span>Soil: {parcel.soilType}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ThermometerSun className="w-4 h-4 text-sunrise" />
                                            <span>pH: {parcel.ph}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Crop Suitability */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Crop Suitability Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {suitableCrops.map(crop => (
                                <div key={crop.name} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <Leaf className="w-4 h-4 text-leaf" />
                                            <span className="font-medium">{crop.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline">{crop.season}</Badge>
                                            <span className="text-sm font-bold">{crop.suitability}%</span>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-leaf transition-all" 
                                            style={{ width: `${crop.suitability}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
