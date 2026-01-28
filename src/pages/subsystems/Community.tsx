import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Tractor, Calendar, MessageSquare } from 'lucide-react';
import { COMMUNITY_DATA } from '@/data/mockData';

export default function Community() {
    const navigate = useNavigate();

    const communityMembers = [
        { id: '1', name: 'Rajesh Kumar', role: 'Lead Farmer', avatar: '👨‍🌾' },
        { id: '2', name: 'Priya Sharma', role: 'Coordinator', avatar: '👩‍💼' },
        { id: '3', name: 'Amit Singh', role: 'Equipment Manager', avatar: '👨‍🔧' },
        { id: '4', name: 'Sunita Devi', role: 'Member', avatar: '👩‍🌾' },
    ];

    const upcomingEvents = [
        { id: '1', title: 'Collective Tractor Hiring', date: '2026-01-30', time: '10:00 AM' },
        { id: '2', title: 'Seed Exchange Program', date: '2026-02-05', time: '2:00 PM' },
        { id: '3', title: 'Training: Organic Farming', date: '2026-02-10', time: '9:00 AM' },
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
                        AGRA <span className="text-leaf">Community</span>
                    </h1>
                    <p className="text-muted-foreground">Collaborative farming and resource sharing</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Active Projects */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Collective Active Projects
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {COMMUNITY_DATA.activeProjects.map(project => (
                                <div key={project.id} className="p-4 bg-muted/50 rounded-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{project.name}</span>
                                        <Badge variant="secondary">{project.progress}%</Badge>
                                    </div>
                                    <Progress value={project.progress} className="h-2 mb-2" />
                                    <p className="text-sm text-muted-foreground">Goal: {project.goal}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Shared Equipment */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Tractor className="w-5 h-5" />
                                Shared Equipment
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {COMMUNITY_DATA.sharedEquipment.map(equipment => (
                                <div key={equipment.id} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                                    <span className="font-medium">{equipment.type}</span>
                                    <Badge variant={equipment.status === 'Available' ? 'default' : 'secondary'}>
                                        {equipment.status}
                                        {equipment.user && ` (${equipment.user})`}
                                    </Badge>
                                </div>
                            ))}
                            <Button className="w-full mt-4">Request Equipment</Button>
                        </CardContent>
                    </Card>

                    {/* Community Members */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Community Members</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {communityMembers.map(member => (
                                <div key={member.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                    <span className="text-3xl">{member.avatar}</span>
                                    <div className="flex-1">
                                        <p className="font-medium">{member.name}</p>
                                        <p className="text-sm text-muted-foreground">{member.role}</p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <MessageSquare className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Upcoming Events */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Upcoming Events
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {upcomingEvents.map(event => (
                                <div key={event.id} className="p-4 bg-muted/50 rounded-lg">
                                    <p className="font-medium mb-1">{event.title}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(event.date).toLocaleDateString()} at {event.time}
                                    </p>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full mt-4">View All Events</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
