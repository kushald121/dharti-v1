import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sprout, Thermometer, Droplets, Shield, Star } from 'lucide-react';

export default function Seed() {
    const navigate = useNavigate();

    const seedVarieties = [
        {
            id: '1',
            name: 'Dharti Wheat v3.2',
            type: 'Wheat',
            features: ['Heat resistant up to 45°C', 'Lower water requirement', 'High yield'],
            rating: 4.8,
            availability: 'In Stock',
            price: 850
        },
        {
            id: '2',
            name: 'Dharti Rice v4.1',
            type: 'Rice',
            features: ['Short duration variety', 'Pest resistant', 'Flood tolerant'],
            rating: 4.6,
            availability: 'In Stock',
            price: 920
        },
        {
            id: '3',
            name: 'Dharti Cotton v2.5',
            type: 'Cotton',
            features: ['Drought resistant', 'High fiber quality', 'Disease resistant'],
            rating: 4.7,
            availability: 'Limited',
            price: 1200
        },
        {
            id: '4',
            name: 'Dharti Soybean v3.0',
            type: 'Soybean',
            features: ['Early maturity', 'High protein content', 'Nitrogen fixing'],
            rating: 4.5,
            availability: 'In Stock',
            price: 780
        }
    ];

    const seedBank = [
        { crop: 'Wheat', quantity: 150, unit: 'kg', lastUpdated: '2026-01-20' },
        { crop: 'Rice', quantity: 80, unit: 'kg', lastUpdated: '2026-01-15' },
        { crop: 'Cotton', quantity: 45, unit: 'kg', lastUpdated: '2026-01-10' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-leaf/10 via-background to-sky/10">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Button>
                </div>

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        AGRA <span className="text-leaf">Seed</span>
                    </h1>
                    <p className="text-muted-foreground">Climate-resilient seed varieties and seed bank</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Seed Bank Summary */}
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Community Seed Bank</CardTitle>
                            <CardDescription>Available inventory</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {seedBank.map(item => (
                                <div key={item.crop} className="p-3 bg-muted/50 rounded-lg">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-medium">{item.crop}</span>
                                        <Badge variant="outline">{item.quantity} {item.unit}</Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                                    </p>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full mt-4">Request Seeds</Button>
                        </CardContent>
                    </Card>

                    {/* Climate-Resilient Varieties */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold">Climate-Resilient Varieties</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {seedVarieties.map(seed => (
                                <Card key={seed.id}>
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-2">
                                                <Sprout className="w-5 h-5 text-leaf" />
                                                <div>
                                                    <CardTitle className="text-lg">{seed.name}</CardTitle>
                                                    <CardDescription>{seed.type}</CardDescription>
                                                </div>
                                            </div>
                                            <Badge variant={seed.availability === 'In Stock' ? 'default' : 'secondary'}>
                                                {seed.availability}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-1 text-sm">
                                                <Star className="w-4 h-4 fill-sunrise text-sunrise" />
                                                <span className="font-medium">{seed.rating}</span>
                                                <span className="text-muted-foreground">rating</span>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                {seed.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 text-sm">
                                                        {idx === 0 && <Thermometer className="w-4 h-4 text-sunrise mt-0.5" />}
                                                        {idx === 1 && <Droplets className="w-4 h-4 text-sky mt-0.5" />}
                                                        {idx === 2 && <Shield className="w-4 h-4 text-leaf mt-0.5" />}
                                                        <span className="text-muted-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-3 border-t flex items-center justify-between">
                                                <span className="text-lg font-bold">₹{seed.price}/kg</span>
                                                <Button size="sm">Order Now</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
