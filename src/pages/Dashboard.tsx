import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MOCK_WEATHER, 
  MOCK_FARM, 
  MOCK_MARKET, 
  MOCK_CROPS, 
  MOCK_ACTIVITIES,
  MOCK_NOTIFICATIONS,
  MOCK_FARMS
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
  Calendar
} from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const userFarm = MOCK_FARMS.find(f => f.id === user?.farmId);

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
              <h1 className="text-xl font-bold">AGRA Dashboard</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
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

            {/* Farm Status */}
            <Card>
              <CardHeader>
                <CardTitle>Farm Status</CardTitle>
                <CardDescription>Current conditions and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Soil Moisture</span>
                    <span className="text-sm text-muted-foreground">{MOCK_FARM.soilMoisture}%</span>
                  </div>
                  <Progress value={MOCK_FARM.soilMoisture} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Crop Health</span>
                    <span className="text-sm text-muted-foreground">{MOCK_FARM.cropHealth}%</span>
                  </div>
                  <Progress value={MOCK_FARM.cropHealth} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Water Stress</span>
                    <span className="text-sm text-muted-foreground">{MOCK_FARM.waterStress}%</span>
                  </div>
                  <Progress value={MOCK_FARM.waterStress} className="h-2" />
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Next Suggestion:</p>
                  <p className="font-medium">{MOCK_FARM.nextSuggestion}</p>
                  <p className="text-sm text-muted-foreground mt-1">{MOCK_FARM.reason}</p>
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
            {/* Farm Info */}
            {userFarm && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Farm Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
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

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {MOCK_NOTIFICATIONS.slice(0, 3).map(notif => (
                  <div key={notif.id} className="pb-3 border-b last:border-0">
                    <div className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-2 ${notif.read ? 'bg-gray-300' : 'bg-leaf'}`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{notif.title}</p>
                        <p className="text-xs text-muted-foreground">{notif.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
