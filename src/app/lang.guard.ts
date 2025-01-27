import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const langGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const router = inject(Router);
  const translateService = inject(TranslateService);
  const url = state.url;
  const segments = url.split('/').filter(segment => segment.length > 0);
  const validLanguages = ['en', 'es'];
  const newLang = translateService.currentLang || 'es';

  // If no segments or first segment is not a valid language
  if (segments.length === 0 || !validLanguages.includes(segments[0])) {
    // Prepend default language 'es' and redirect
    const newUrl = segments.length === 0 ? [] : segments;
    return router.createUrlTree([newLang, ...newUrl.slice(0, -1) ]);
  }

  return true;
};
