import { useEffect, useState } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Notification {
  id: number;
  name: string;
  isPremium?: boolean;
  city?: string;
}

const names = [
  "Maria Silva",
  "João Santos",
  "Ana Costa",
  "Pedro Oliveira",
  "Carla Ferreira",
  "Lucas Almeida",
  "Juliana Rodrigues",
  "Roberto Lima",
  "Fernanda Souza",
  "Marcos Pereira",
];

const cities = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Brasília",
  "Curitiba",
  "Porto Alegre",
  "Salvador",
  "Fortaleza",
  "Recife",
  "Manaus",
];

const capitalizeWords = (text: string) => {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const FloatingNotification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const showBasicNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const newNotification: Notification = {
        id: nextId,
        name: randomName,
        isPremium: false,
      };

      setNotifications((prev) => [...prev, newNotification]);
      setNextId((prev) => prev + 1);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
      }, 5000);
    };

    const showPremiumNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const newNotification: Notification = {
        id: nextId,
        name: randomName,
        isPremium: true,
        city: randomCity,
      };

      setNotifications((prev) => [...prev, newNotification]);
      setNextId((prev) => prev + 1);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
      }, 6000);
    };

    const basicInterval = setInterval(
      showBasicNotification,
      Math.random() * 10000 + 5000
    );

    const premiumInterval = setInterval(
      showPremiumNotification,
      Math.random() * 15000 + 30000
    );

    return () => {
      clearInterval(basicInterval);
      clearInterval(premiumInterval);
    };
  }, [nextId]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm">
      {notifications.map((notification) => (
        <Card
          key={notification.id}
          className={`p-4 shadow-soft animate-slide-in ${
            notification.isPremium
              ? "bg-gradient-to-r from-coral/10 to-accent/10 border-coral/30"
              : "bg-card"
          }`}
        >
          <div className="flex items-start gap-3">
            {notification.isPremium ? (
              <div className="p-2 bg-coral/20 rounded-full">
                <Sparkles className="w-5 h-5 text-coral" />
              </div>
            ) : (
              <div className="p-2 bg-primary/20 rounded-full">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {capitalizeWords(notification.name)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {notification.isPremium ? (
                  <>
                    🚀 {notification.city && `De ${capitalizeWords(notification.city)} `}
                    Garantiu A Versão Premium E O Grupo VIP!
                  </>
                ) : (
                  "Acabou De Adquirir O Método!"
                )}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FloatingNotification;
