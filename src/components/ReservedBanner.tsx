import { useLanguage } from "@/contexts/LanguageContext";

interface ReservedBannerProps {
  size?: 'small' | 'large';
}

const ReservedBanner = ({ size = 'small' }: ReservedBannerProps) => {
  const { t } = useLanguage();

  const isSmall = size === 'small';

  return (
    <div
      className={`absolute ${isSmall ? 'top-0 right-0 w-32 h-32' : 'top-0 right-0 w-40 h-40'} overflow-hidden pointer-events-none`}
      style={{ zIndex: 10 }}
    >
      <div
        className={`absolute ${isSmall ? 'top-8 -right-8' : 'top-10 -right-10'} bg-primary text-primary-foreground ${isSmall ? 'text-xs py-1 px-10' : 'text-sm py-2 px-12'} font-bold uppercase shadow-lg transform rotate-45 origin-center`}
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
        }}
      >
        {t('vehicle_status.reserved')}
      </div>
    </div>
  );
};

export default ReservedBanner;
