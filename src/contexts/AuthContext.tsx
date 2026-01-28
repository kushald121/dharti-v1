import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'analyst' | 'admin';
  farmId?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  'farmer@agra.com': {
    password: 'farmer123',
    user: {
      id: '1',
      name: 'Rajesh Kumar',
      email: 'farmer@agra.com',
      role: 'farmer',
      farmId: 'farm-001',
      avatar: '👨‍🌾'
    }
  },
  'analyst@agra.com': {
    password: 'analyst123',
    user: {
      id: '2',
      name: 'Priya Sharma',
      email: 'analyst@agra.com',
      role: 'analyst',
      avatar: '👩‍💼'
    }
  },
  'admin@agra.com': {
    password: 'admin123',
    user: {
      id: '3',
      name: 'Admin User',
      email: 'admin@agra.com',
      role: 'admin',
      avatar: '👤'
    }
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('agra_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const userRecord = MOCK_USERS[email];
    if (userRecord && userRecord.password === password) {
      setUser(userRecord.user);
      localStorage.setItem('agra_user', JSON.stringify(userRecord.user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('agra_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
