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
  // {
  //   path: 'en/first',
  //   renderMode: RenderMode.Prerender,
  // },
  // {
  //   path: 'en/second',
  //   renderMode: RenderMode.Prerender,
  // },
  // {
  //   path: 'es/first',
  //   renderMode: RenderMode.Prerender,
  // },
  // {
  //   path: 'es/second',
  //   renderMode: RenderMode.Prerender,
  // }
];
