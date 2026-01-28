import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  AlertTriangle, 
  Droplets, 
  Cloud,
  TrendingUp,
  MapPin,
  ArrowLeft,
  Activity
} from 'lucide-react';

export default function InstitutionView() {
  const navigate = useNavigate();

  const regionalStats = {
    totalFarms: 156,
    totalFarmers: 423,
    totalArea: 3420,
    activeMonitoring: 148
  };

  const riskDistribution = [
    { level: 'Low', count: 89, percentage: 57, color: 'bg-green-500' },
    { level: 'Medium', count: 52, percentage: 33, color: 'bg-yellow-500' },
    { level: 'High', count: 15, percentage: 10, color: 'bg-red-500' }
  ];

  const waterStressZones = [
    { zone: 'North Block', status: 'Adequate', farms: 45 },
    { zone: 'South Block', status: 'Moderate Stress', farms: 38 },
    { zone: 'East Block', status: 'High Stress', farms: 22 },
    { zone: 'West Block', status: 'Adequate', farms: 51 }
  ];

  const climateExposure = {
    heatwave: { risk: 'High', farms: 67 },
    drought: { risk: 'Medium', farms: 34 },
    flood: { risk: 'Low', farms: 12 },
    pest: { risk: 'Medium', farms: 43 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky/10 via-background to-leaf/10">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-sky rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Institution Dashboard</h1>
              <p className="text-muted-foreground">Regional agricultural monitoring and insights</p>
            </div>
          </div>
        </div>

        {/* Regional Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-leaf" />
                <h3 className="text-sm text-muted-foreground">Total Farms</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.totalFarms}</div>
              <p className="text-sm text-muted-foreground mt-1">Registered in system</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-sky" />
                <h3 className="text-sm text-muted-foreground">Total Farmers</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.totalFarmers}</div>
              <p className="text-sm text-muted-foreground mt-1">Active users</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-leaf" />
                <h3 className="text-sm text-muted-foreground">Total Area</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.totalArea}</div>
              <p className="text-sm text-muted-foreground mt-1">Acres monitored</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-5 h-5 text-sunrise" />
                <h3 className="text-sm text-muted-foreground">Active Monitoring</h3>
              </div>
              <div className="text-3xl font-bold">{regionalStats.activeMonitoring}</div>
              <p className="text-sm text-muted-foreground mt-1">Real-time tracking</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risk Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Risk Distribution
              </CardTitle>
              <CardDescription>Farm risk assessment across region</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {riskDistribution.map(risk => (
                <div key={risk.level} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${risk.color}`} />
                      <span className="font-medium">{risk.level} Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{risk.count} farms</span>
                      <Badge variant="outline">{risk.percentage}%</Badge>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${risk.color}`} 
                      style={{ width: `${risk.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Water Stress Zones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5" />
                Water Stress Zones
              </CardTitle>
              <CardDescription>Regional water availability assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {waterStressZones.map(zone => (
                <div key={zone.zone} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{zone.zone}</p>
                    <p className="text-sm text-muted-foreground">{zone.farms} farms</p>
                  </div>
                  <Badge variant={
                    zone.status === 'Adequate' ? 'default' :
                    zone.status === 'Moderate Stress' ? 'secondary' :
                    'destructive'
                  }>
                    {zone.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Climate Exposure Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-5 h-5" />
                Climate Exposure Summary
              </CardTitle>
              <CardDescription>Regional climate risk assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Heatwave Risk</p>
                  <p className="text-sm text-muted-foreground">{climateExposure.heatwave.farms} farms exposed</p>
                </div>
                <Badge variant="destructive">{climateExposure.heatwave.risk}</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Drought Risk</p>
                  <p className="text-sm text-muted-foreground">{climateExposure.drought.farms} farms exposed</p>
                </div>
                <Badge variant="secondary">{climateExposure.drought.risk}</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Flood Risk</p>
                  <p className="text-sm text-muted-foreground">{climateExposure.flood.farms} farms exposed</p>
                </div>
                <Badge variant="default">{climateExposure.flood.risk}</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Pest Outbreak Risk</p>
                  <p className="text-sm text-muted-foreground">{climateExposure.pest.farms} farms at risk</p>
                </div>
                <Badge variant="secondary">{climateExposure.pest.risk}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* System Capabilities */}
          <Card className="border-2 border-sky/20">
            <CardHeader>
              <CardTitle>System Capabilities</CardTitle>
              <CardDescription>Multi-stakeholder agricultural intelligence platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-leaf mt-2" />
                <div>
                  <p className="font-medium text-sm">Real-time Monitoring</p>
                  <p className="text-xs text-muted-foreground">Satellite, weather, and sensor integration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-leaf mt-2" />
                <div>
                  <p className="font-medium text-sm">Predictive Analytics</p>
                  <p className="text-xs text-muted-foreground">AI-powered risk assessment and forecasting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-leaf mt-2" />
                <div>
                  <p className="font-medium text-sm">Community Intelligence</p>
                  <p className="text-xs text-muted-foreground">Aggregated insights from farmer network</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-leaf mt-2" />
                <div>
                  <p className="font-medium text-sm">Crisis Response</p>
                  <p className="text-xs text-muted-foreground">Early warning and intervention systems</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-muted/30">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              This is a read-only institutional view. For detailed farm-level access, please contact your regional administrator.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
