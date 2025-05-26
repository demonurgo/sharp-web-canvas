import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Users, 
  Cpu,
  Box,
  Grid3X3,
  GitBranch,
  Activity,
  BarChart,
  RefreshCw,
  MessageSquare,
  Mail,
  TrendingUp,
  Sliders,
  Palette,
  WifiOff
} from 'lucide-react';

interface IconRendererProps {
  iconName?: string;
  className?: string;
  size?: number;
}

const IconRenderer: React.FC<IconRendererProps> = ({ 
  iconName, 
  className = "w-6 h-6", 
  size 
}) => {
  const iconProps = {
    className,
    ...(size && { size })
  };

  switch (iconName) {
    case 'smartphone':
      return <Smartphone {...iconProps} />;
    case 'server':
      return <Server {...iconProps} />;
    case 'database':
      return <Database {...iconProps} />;
    case 'code':
      return <Code {...iconProps} />;
    case 'cpu':
      return <Cpu {...iconProps} />;
    case 'users':
      return <Users {...iconProps} />;
    case 'box':
      return <Box {...iconProps} />;
    case 'grid':
      return <Grid3X3 {...iconProps} />;
    case 'git-branch':
      return <GitBranch {...iconProps} />;
    case 'activity':
      return <Activity {...iconProps} />;
    case 'bar-chart':
    case 'bar-chart-2':
      return <BarChart {...iconProps} />;
    case 'refresh-cw':
      return <RefreshCw {...iconProps} />;
    case 'message-square':
      return <MessageSquare {...iconProps} />;
    case 'mail':
      return <Mail {...iconProps} />;
    case 'trending-up':
      return <TrendingUp {...iconProps} />;
    case 'sliders':
      return <Sliders {...iconProps} />;
    case 'palette':
      return <Palette {...iconProps} />;
    case 'wifi-off':
      return <WifiOff {...iconProps} />;
    case 'repeat':
      return <RefreshCw {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

export default IconRenderer;