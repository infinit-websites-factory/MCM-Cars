import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import googleLogo from "@/assets/google-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { useMemo } from "react";

const OVERALL_RATING = 4.3;
const TOTAL_REVIEWS = 477;

const AVATAR_COLORS = [
  "bg-blue-600",
  "bg-emerald-600",
  "bg-violet-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-cyan-600",
];

const RatingStars = ({ rating, size = 16 }: { rating: number; size?: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <Star key={i} size={size} className="fill-[#FBBC04] text-[#FBBC04]" />
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <div key={i} className="relative" style={{ width: size, height: size }}>
          <Star size={size} className="fill-white/20 text-white/20 absolute" />
          <div className="absolute overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
            <Star size={size} className="fill-[#FBBC04] text-[#FBBC04]" />
          </div>
        </div>
      );
    } else {
      stars.push(
        <Star key={i} size={size} className="fill-white/20 text-white/20" />
      );
    }
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
};

const GoogleReviews = () => {
  const { t, language } = useLanguage();

  const reviews = useMemo(() => {
    return translations[language].reviews.testimonials;
  }, [language]);

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('reviews.title')}
          </h2>

          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-full px-7 py-3.5">
            <img
              src={googleLogo}
              alt="Google"
              className="w-7 h-7"
            />
            <div className="w-px h-8 bg-white/15" />
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white">{OVERALL_RATING}</span>
              <div className="flex flex-col items-start">
                <RatingStars rating={OVERALL_RATING} size={16} />
                <span className="text-xs text-white/40 mt-0.5">
                  {TOTAL_REVIEWS} {t('reviews.reviews_label')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 flex flex-col transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                    {/* Stars at top */}
                    <div className="mb-4">
                      <RatingStars rating={review.rating} size={16} />
                    </div>

                    {/* Review text */}
                    <div className="flex-1 mb-5">
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-5">
                        "{review.review}"
                      </p>
                    </div>

                    {/* Reviewer info + Google badge */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${AVATAR_COLORS[index % AVATAR_COLORS.length]} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-semibold text-xs">
                            {review.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium text-white text-sm">{review.name}</span>
                      </div>
                      <img src={googleLogo} alt="Google" className="w-5 h-5 opacity-50" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/10 text-white shadow-md hover:bg-white/20 w-10 h-10" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/10 text-white shadow-md hover:bg-white/20 w-10 h-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
