import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InstitutionView from "./pages/InstitutionView";
import NotFound from "./pages/NotFound";
import FeaturePhone from "./pages/agra-one/FeaturePhone";
import BasicSmartphone from "./pages/agra-one/BasicSmartphone";
import AdvancedFarmer from "./pages/agra-one/AdvancedFarmer";
import AnalystMode from "./pages/agra-one/AnalystMode";
import Community from "./pages/subsystems/Community";
import Land from "./pages/subsystems/Land";
import Energy from "./pages/subsystems/Energy";
import Seed from "./pages/subsystems/Seed";
import AgraKnowledge from "./pages/agra-one/Knowledge";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/institution-demo" element={<InstitutionView />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/agra-one/feature-phone" element={
              <ProtectedRoute>
                <FeaturePhone />
              </ProtectedRoute>
            } />
            <Route path="/agra-one/basic" element={
              <ProtectedRoute>
                <BasicSmartphone />
              </ProtectedRoute>
            } />
            <Route path="/agra-one/advanced" element={
              <ProtectedRoute>
                <AdvancedFarmer />
              </ProtectedRoute>
            } />
            <Route path="/agra-one/analyst" element={
              <ProtectedRoute>
                <AnalystMode />
              </ProtectedRoute>
            } />
            <Route path="/subsystems/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />
            <Route path="/subsystems/land" element={
              <ProtectedRoute>
                <Land />
              </ProtectedRoute>
            } />
            <Route path="/subsystems/energy" element={
              <ProtectedRoute>
                <Energy />
              </ProtectedRoute>
            } />
            <Route path="/subsystems/seed" element={
              <ProtectedRoute>
                <Seed />
              </ProtectedRoute>
            } />
            <Route path="/agra-one/knowledge" element={
              <ProtectedRoute>
                <AgraKnowledge />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
