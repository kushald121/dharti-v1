import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  MOCK_WEATHER, 
  MOCK_FARM, 
  MOCK_MARKET, 
  MOCK_CROPS, 
  MOCK_ACTIVITIES,
  MOCK_NOTIFICATIONS,
  MOCK_FARMS,
  MOCK_DECISIONS,
  MOCK_HEALTH_SNAPSHOT,
  MOCK_COMMUNITY_SIGNALS,
  MOCK_SYSTEM_ALERTS,
  MOCK_SYSTEM_STATUS,
  MOCK_KNOWLEDGE_NUGGETS
} from '@/data/mockData';
import { 
  Cloud, 
  Droplets, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Bell,
  LogOut,
  Sprout,
  Activity,
  MapPin,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Clock,
  XCircle,
  Info,
  Volume2,
  Users,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function FarmerDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showOverrideDialog, setShowOverrideDialog] = useState(false);
  const [overrideReason, setOverrideReason] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const userFarm = MOCK_FARMS.find(f => f.id === user?.farmId);

  const getHealthColor = (status: string) => {
    if (status === 'Good' || status === 'Adequate' || status === 'Low' || status === 'Strong') return 'text-green-600 bg-green-50';
    if (status === 'Watch' || status === 'Stress' || status === 'Medium' || status === 'Neutral') return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-leaf rounded-full flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">My Farm Dashboard</h1>
              <p className="text-sm text-muted-foreground">{userFarm?.name || 'Farm Management'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-muted-foreground capitalize">{user?.role}</p>
            </div>
            <span className="text-3xl">{user?.avatar}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* 1. FARM HEALTH SNAPSHOT */}
        <Card className="mb-6 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Farm Health Snapshot
            </CardTitle>
            <CardDescription>Real-time system assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`p-4 rounded-lg text-center ${getHealthColor(MOCK_HEALTH_SNAPSHOT.cropHealth)}`}>
                <div className="text-2xl mb-1">🌱</div>
                <div className="text-xs font-medium mb-1">Crop Health</div>
                <div className="text-lg font-bold">{MOCK_HEALTH_SNAPSHOT.cropHealth}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${getHealthColor(MOCK_HEALTH_SNAPSHOT.waterStatus)}`}>
                <div className="text-2xl mb-1">🚰</div>
                <div className="text-xs font-medium mb-1">Water Status</div>
                <div className="text-lg font-bold">{MOCK_HEALTH_SNAPSHOT.waterStatus}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${getHealthColor(MOCK_HEALTH_SNAPSHOT.climateRisk)}`}>
                <div className="text-2xl mb-1">🌦</div>
                <div className="text-xs font-medium mb-1">Climate Risk</div>
                <div className="text-lg font-bold">{MOCK_HEALTH_SNAPSHOT.climateRisk}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${getHealthColor(MOCK_HEALTH_SNAPSHOT.marketReadiness)}`}>
                <div className="text-2xl mb-1">💰</div>
                <div className="text-xs font-medium mb-1">Market Readiness</div>
                <div className="text-lg font-bold">{MOCK_HEALTH_SNAPSHOT.marketReadiness}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2. DAILY DECISION CENTER + ACTION LOG */}
        <Card className="mb-6 border-l-4 border-l-sunrise bg-sunrise/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-6 h-6 text-sunrise mt-1" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">Today's Priority Action</h3>
                <p className="text-muted-foreground mb-3">{MOCK_FARM.nextSuggestion}</p>
                
                {/* Knowledge Nugget */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mb-3">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Why AGRA suggested this
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Volume2 className="w-5 h-5" />
                        {MOCK_KNOWLEDGE_NUGGETS[1].title}
                      </DialogTitle>
                      <DialogDescription>
                        <div className="space-y-2 mt-4">
                          {MOCK_KNOWLEDGE_NUGGETS[1].explanation.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded-full bg-leaf text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {idx + 1}
                              </div>
                              <p className="text-sm pt-1">{step}</p>
                            </div>
                          ))}
                          <div className="mt-4 p-3 bg-muted rounded-lg flex items-center gap-2">
                            <Volume2 className="w-4 h-4" />
                            <span className="text-sm">Audio explanation: {MOCK_KNOWLEDGE_NUGGETS[1].audioLength}</span>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <div className="flex gap-2">
                  <Button>Mark as Done</Button>
                  <Dialog open={showOverrideDialog} onOpenChange={setShowOverrideDialog}>
                    <DialogTrigger asChild>
                      <Button variant="outline">Choose Differently</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Why did you choose differently?</DialogTitle>
                        <DialogDescription>
                          Your feedback helps AGRA learn and improve recommendations
                        </DialogDescription>
                      </DialogHeader>
                      <RadioGroup value={overrideReason} onValueChange={setOverrideReason}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="local" id="local" />
                          <Label htmlFor="local">Local knowledge</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="labor" id="labor" />
                          <Label htmlFor="labor">Labor issues</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cash" id="cash" />
                          <Label htmlFor="cash">Cash issues</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                      <Button onClick={() => setShowOverrideDialog(false)} disabled={!overrideReason}>
                        Submit Feedback
                      </Button>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Decision Timeline */}
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Decision Timeline (Last 7 Days)
              </h4>
              <div className="space-y-2">
                {MOCK_DECISIONS.map(decision => (
                  <div key={decision.id} className="flex items-center gap-3 p-2 bg-white rounded-lg">
                    <div className="text-xs text-muted-foreground w-16">
                      {new Date(decision.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <span className="font-medium text-sm">{decision.action}</span>
                      {decision.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                      {decision.status === 'pending' && <Clock className="w-4 h-4 text-yellow-600" />}
                      {decision.status === 'delayed' && <XCircle className="w-4 h-4 text-red-600" />}
                    </div>
                    {decision.outcome && (
                      <span className="text-xs text-muted-foreground">{decision.outcome}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* 3. ALERT & RESPONSE PANEL */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-sunrise" />
                  Recent Alerts
                </CardTitle>
                <CardDescription>Real-time monitoring and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {MOCK_SYSTEM_ALERTS.map(alert => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                    alert.severity === 'high' ? 'border-l-red-500 bg-red-50' :
                    alert.severity === 'medium' ? 'border-l-yellow-500 bg-yellow-50' :
                    'border-l-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold">{alert.what}</h4>
                      <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                        {alert.when}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Suggested Action:</span> {alert.suggestedAction}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 4. COMMUNITY SIGNALS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Insights
                </CardTitle>
                <CardDescription>Collective intelligence from your region</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {MOCK_COMMUNITY_SIGNALS.map(signal => (
                  <div key={signal.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <Info className="w-5 h-5 text-sky mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{signal.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(signal.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weather Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Weather Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-sunrise">{MOCK_WEATHER.temp}°C</p>
                    <p className="text-sm text-muted-foreground">{MOCK_WEATHER.condition}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-sky">{MOCK_WEATHER.humidity}%</p>
                    <p className="text-sm text-muted-foreground">Humidity</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-leaf">{MOCK_WEATHER.rainfall}mm</p>
                    <p className="text-sm text-muted-foreground">Rainfall</p>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-8 h-8 mx-auto text-sky" />
                    <p className="text-sm text-muted-foreground">Good for crops</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Crops & Activities Tabs */}
            <Tabs defaultValue="crops" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="crops">My Crops</TabsTrigger>
                <TabsTrigger value="activities">Recent Activities</TabsTrigger>
              </TabsList>
              <TabsContent value="crops" className="space-y-4">
                {MOCK_CROPS.map(crop => (
                  <Card key={crop.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg">{crop.name}</h3>
                          <p className="text-sm text-muted-foreground">{crop.area} acres • {crop.stage}</p>
                        </div>
                        <Badge variant={crop.health > 80 ? 'default' : 'secondary'}>
                          {crop.health}% Health
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Planted: {new Date(crop.plantedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Harvest: {new Date(crop.expectedHarvest).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="activities" className="space-y-4">
                {MOCK_ACTIVITIES.map(activity => (
                  <Card key={activity.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Activity className="w-5 h-5 text-leaf mt-1" />
                        <div className="flex-1">
                          <p className="font-medium">{activity.description}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(activity.date).toLocaleDateString()} • {activity.type}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Farm Info with Map Hint */}
            {userFarm && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Farm Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{userFarm.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Area</p>
                    <p className="font-medium">{userFarm.area} acres</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Crops</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {userFarm.crops.map(crop => (
                        <Badge key={crop} variant="outline">{crop}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    <Layers className="w-4 h-4 mr-2" />
                    View Map Layers
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Market Prices */}
            <Card>
              <CardHeader>
                <CardTitle>Market Prices</CardTitle>
                <CardDescription>Today's rates (₹/quintal)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {MOCK_MARKET.map(item => (
                  <div key={item.crop} className="flex items-center justify-between">
                    <span className="font-medium">{item.crop}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">₹{item.price}</span>
                      {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                      {item.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-600" />}
                      {item.trend === 'stable' && <Minus className="w-4 h-4 text-gray-600" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="border-2 border-sky/20">
              <CardHeader>
                <CardTitle className="text-sm">System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data Freshness</span>
                  <span className="font-medium">{MOCK_SYSTEM_STATUS.dataFreshness}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Confidence</span>
                  <Badge variant="outline">{MOCK_SYSTEM_STATUS.confidenceLevel}</Badge>
                </div>
                <div>
                  <span className="text-muted-foreground">Sources</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {MOCK_SYSTEM_STATUS.sources.map(source => (
                      <Badge key={source} variant="secondary" className="text-xs">{source}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
