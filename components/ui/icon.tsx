import {
  Video,
  Clock,
  Scissors,
  Film,
  Eye,
  Ban,
  Mic,
  Smartphone,
  RefreshCw,
  Play,
  Download,
  Check,
  X,
  Flame,
  Zap,
  Shield,
  Lock,
  Star,
  Users,
  Calendar,
  ChartLine,
  Sparkles,
  Crown,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  BadgeCheck,
  Layers,
  Wallet,
  Gauge,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Video,
  Clock,
  Scissors,
  Film,
  Eye,
  Ban,
  Mic,
  Smartphone,
  RefreshCw,
  Play,
  Download,
  Check,
  X,
  Flame,
  Zap,
  Shield,
  Lock,
  Star,
  Users,
  Calendar,
  ChartLine,
  Sparkles,
  Crown,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  BadgeCheck,
  Layers,
  Wallet,
  Gauge,
};

export function Icon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
