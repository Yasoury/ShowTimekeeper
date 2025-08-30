import { useLanguage } from '@/hooks/use-language';

// Import actual app screenshots
import moviesScreenshot from '@/assets/movies-screenshot.png';
import tvShowsScreenshot from '@/assets/tvshows-screenshot.png';
import statsScreenshot from '@/assets/stats-screenshot.png';
import profileScreenshot from '@/assets/profile-screenshot.png';

export function ScreenshotsSection() {
  const { t } = useLanguage();

  const screenshots = [
    {
      src: moviesScreenshot,
      alt: 'Movies Library Screenshot',
      testId: 'screenshot-movies'
    },
    {
      src: tvShowsScreenshot,
      alt: 'TV Shows Library Screenshot',
      testId: 'screenshot-tvshows'
    },
    {
      src: statsScreenshot,
      alt: 'Stats Dashboard Screenshot',
      testId: 'screenshot-stats'
    },
    {
      src: profileScreenshot,
      alt: 'Profile Screen Screenshot',
      testId: 'screenshot-profile'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('experienceTitle').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{t('experienceTitle').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('experienceSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="gradient-border rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300" 
              data-testid={screenshot.testId}
            >
              <div className="bg-card p-4">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
