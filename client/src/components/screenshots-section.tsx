import { useLanguage } from '@/hooks/use-language';
import { Star, Calendar } from 'lucide-react';

export function ScreenshotsSection() {
  const { t } = useLanguage();

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
          {/* Screenshot 1: Movie Library */}
          <div className="gradient-border rounded-2xl overflow-hidden" data-testid="screenshot-movies">
            <div className="bg-card p-4">
              <div className="aspect-[9/16] bg-background rounded-xl flex flex-col">
                <div className="p-4 border-b border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{t('movies')}</span>
                    <span className="text-accent font-medium text-sm">{t('tvShows')}</span>
                  </div>
                </div>
                <div className="flex-1 p-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded"></div>
                    <div>
                      <h4 className="text-sm font-medium">The Godfather</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" />
                        <span>8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-gradient-to-br from-red-600 to-pink-600 rounded"></div>
                    <div>
                      <h4 className="text-sm font-medium">Grave of Fireflies</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" />
                        <span>8.4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 2: TV Shows */}
          <div className="gradient-border rounded-2xl overflow-hidden" data-testid="screenshot-tvshows">
            <div className="bg-card p-4">
              <div className="aspect-[9/16] bg-background rounded-xl flex flex-col">
                <div className="p-4 border-b border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{t('movies')}</span>
                    <span className="text-accent font-medium text-sm">{t('tvShows')}</span>
                  </div>
                </div>
                <div className="flex-1 p-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded"></div>
                    <div>
                      <h4 className="text-sm font-medium">Breaking Bad</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{t('seasons')}: 6</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-gradient-to-br from-orange-600 to-yellow-600 rounded"></div>
                    <div>
                      <h4 className="text-sm font-medium">Naruto</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{t('seasons')}: 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 3: Stats */}
          <div className="gradient-border rounded-2xl overflow-hidden" data-testid="screenshot-stats">
            <div className="bg-card p-4">
              <div className="aspect-[9/16] bg-background rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-6">Your Watching Stats</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/30 rounded-xl p-3">
                    <div className="text-2xl font-bold">4</div>
                    <div className="text-xs text-muted-foreground">{t('movies')}</div>
                    <div className="text-xs">19 hours</div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3">
                    <div className="text-2xl font-bold text-accent">5</div>
                    <div className="text-xs text-muted-foreground">{t('tvShows')}</div>
                    <div className="text-xs">411 hours</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span>{t('animation')}</span>
                    <span>207h 19m</span>
                  </div>
                  <div className="stats-bar">
                    <div className="h-full bg-purple-500 w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot 4: Profile */}
          <div className="gradient-border rounded-2xl overflow-hidden" data-testid="screenshot-profile">
            <div className="bg-card p-4">
              <div className="aspect-[9/16] bg-background rounded-xl p-4 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                <h3 className="font-semibold mb-2">Mohammed Abdallah</h3>
                <p className="text-xs text-muted-foreground mb-6">user@example.com</p>
                
                <div className="bg-muted/30 rounded-xl p-3 mb-4">
                  <h4 className="text-sm font-medium mb-2">Personal Information</h4>
                  <div className="text-xs text-left space-y-1">
                    <div>Email: user@example.com</div>
                    <div>Display Name: User</div>
                  </div>
                </div>
                
                <button className="w-full bg-secondary text-secondary-foreground py-2 rounded-lg text-sm">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
