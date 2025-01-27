import { RenderMode, ServerRoute } from '@angular/ssr';


const getPrerenderParams = async () =>{
    const langs = ['es', 'en'];
    return langs.map(lang => ({ lang }));
  };

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
