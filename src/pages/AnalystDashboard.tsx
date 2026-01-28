import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MOCK_WEATHER, 
  MOCK_MARKET, 
  MOCK_FARMS
} from '@/data/mockData';
import { 
  LogOut,
  Sprout,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  Users,
  MapPin,
  Leaf,
  DollarSign,
  Activity
} from 'lucide-react';

export default function AnalystDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const regionalStats = {
    totalFarms: 156,
    totalArea: 3420,
    avgYield: 4.2,
    activeAlerts: 12
  };

  const cropDistribution = [
    { crop: 'Wheat', farms: 68, area: 1240, percentage: 36 },
    { crop: 'Rice', farms: 45, area: 890, percentage: 26 },
    { crop: 'Cotton', farms: 32, area: 780, percentage: 23 },
    { crop: 'Soybean', farms: 28, area: 510, percentage: 15 }
  ];

  const performanceMetrics = [
    { metric: 'Water Efficiency', value: 87, trend: 'up', change: '+5%' },
    { metric: 'Crop Health Index', value: 82, trend: 'stable', change: '0%' },
    { metric: 'Yield Prediction', value: 94, trend: 'up', change: '+8%' },
    { metric: 'Resource Utilization', value: 76, trend: 'down', change: '-3%' }
  ];

  const recentInsights = [
    {
      id: '1',
      title: 'Irrigation Optimization Opportunity',
      description: 'North region farms can reduce water usage by 15% with adjusted schedules',
      impact: 'High',
      farms: 23
    },
    {
      id: '2',
      title: 'Pest Alert - Early Detection',
      description: 'Aphid activity detected in 8 farms, preventive measures recommended',
      impact: 'Medium',
      farms: 8
    },
    {
      id: '3',
      title: 'Market Price Surge',
      description: 'Wheat prices expected to rise 12% in next 2 weeks',
      impact: 'High',
      farms: 68
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky rounded-full flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Regional Analytics Dashboard</h1>
              <p className="text-sm text-muted-foreground">Punjab Region Overview</p>
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
        {/* Regional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-leaf" />
                <h3 className="text-sm text-muted-foreground">Total Farms</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.totalFarms}</div>
              <p className="text-sm text-muted-foreground mt-1">Active in region</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-sky" />
                <h3 className="text-sm text-muted-foreground">Total Area</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.totalArea}</div>
              <p className="text-sm text-muted-foreground mt-1">Acres under cultivation</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="w-5 h-5 text-leaf" />
                <h3 className="text-sm text-muted-foreground">Avg Yield</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.avgYield}</div>
              <p className="text-sm text-muted-foreground mt-1">Tons per acre</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-5 h-5 text-sunrise" />
                <h3 className="text-sm text-muted-foreground">Active Alerts</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.activeAlerts}</div>
              <p className="text-sm text-muted-foreground mt-1">Require attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Insights */}
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>Actionable recommendations for the region</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInsights.map(insight => (
                  <div key={insight.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold">{insight.title}</h3>
                      <Badge variant={insight.impact === 'High' ? 'default' : 'secondary'}>
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{insight.farms} farms affected</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Regional performance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {performanceMetrics.map(metric => (
                  <div key={metric.metric} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{metric.metric}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-leaf" 
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold">{metric.value}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                      {metric.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-600" />}
                      {metric.trend === 'stable' && <Minus className="w-4 h-4 text-gray-600" />}
                      <span className="text-sm font-medium">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Crop Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Crop Distribution Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cropDistribution.map(item => (
                  <div key={item.crop} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Sprout className="w-4 h-4 text-leaf" />
                        <span className="font-medium">{item.crop}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.farms} farms • {item.area} acres
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-leaf transition-all" 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Market Trends
                </CardTitle>
                <CardDescription>Regional price analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {MOCK_MARKET.map(item => (
                  <div key={item.crop} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{item.crop}</span>
                      <div className="flex items-center gap-2">
                        {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                        {item.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-600" />}
                        {item.trend === 'stable' && <Minus className="w-4 h-4 text-gray-600" />}
                        <span className="text-sm font-bold">{item.change}%</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">₹{item.price}/quintal</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Performing Farms */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Farms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {MOCK_FARMS.map((farm, idx) => (
                  <div key={farm.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-leaf text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{farm.name}</p>
                      <p className="text-xs text-muted-foreground">{farm.location}</p>
                    </div>
                    <Badge variant="outline">A+</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weather Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Regional Weather</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="text-4xl font-bold text-sunrise">{MOCK_WEATHER.temp}°C</p>
                  <p className="text-sm text-muted-foreground">{MOCK_WEATHER.condition}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center p-2 bg-muted/50 rounded">
                    <p className="text-muted-foreground">Humidity</p>
                    <p className="font-bold">{MOCK_WEATHER.humidity}%</p>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded">
                    <p className="text-muted-foreground">Rainfall</p>
                    <p className="font-bold">{MOCK_WEATHER.rainfall}mm</p>
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
