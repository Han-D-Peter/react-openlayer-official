import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '59b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '756'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3e7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fd2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '992'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '150'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '01a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '464'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3e6'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '64c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '61f'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '7c5'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b85'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'aea'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '36e'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '619'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'f7a'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '6e2'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '79d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dd9'),
    routes: [
      {
        path: '/docs/category/controls',
        component: ComponentCreator('/docs/category/controls', 'e06'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '4b1'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/category/guide',
        component: ComponentCreator('/docs/category/guide', '8b8'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/category/hooks',
        component: ComponentCreator('/docs/category/hooks', '589'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'e34'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Getting started/Installation',
        component: ComponentCreator('/docs/Getting started/Installation', 'b6e'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Getting started/intro',
        component: ComponentCreator('/docs/Getting started/intro', '02a'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Getting started/Setup',
        component: ComponentCreator('/docs/Getting started/Setup', 'fb3'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Controls/CompassWheel',
        component: ComponentCreator('/docs/Guide/Controls/CompassWheel', 'b44'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Controls/CustomTool',
        component: ComponentCreator('/docs/Guide/Controls/CustomTool', '415'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Controls/DrawingTools',
        component: ComponentCreator('/docs/Guide/Controls/DrawingTools', '8a8'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Controls/FullScreen',
        component: ComponentCreator('/docs/Guide/Controls/FullScreen', '800'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Controls/Zoom',
        component: ComponentCreator('/docs/Guide/Controls/Zoom', 'a0c'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/GeoJson Layer',
        component: ComponentCreator('/docs/Guide/GeoJson Layer', '65a'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Hooks/useMap',
        component: ComponentCreator('/docs/Guide/Hooks/useMap', '5e9'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Hooks/useMapEventHandler',
        component: ComponentCreator('/docs/Guide/Hooks/useMapEventHandler', 'a7b'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Hooks/useMapRotation',
        component: ComponentCreator('/docs/Guide/Hooks/useMapRotation', '7c0'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Hooks/useSelectAnnotation',
        component: ComponentCreator('/docs/Guide/Hooks/useSelectAnnotation', '0c0'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Image Overay',
        component: ComponentCreator('/docs/Guide/Image Overay', 'df0'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Layer Group',
        component: ComponentCreator('/docs/Guide/Layer Group', 'c17'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Layer zIndex',
        component: ComponentCreator('/docs/Guide/Layer zIndex', 'a90'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Popup Text',
        component: ComponentCreator('/docs/Guide/Popup Text', '8c7'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Text with Marker',
        component: ComponentCreator('/docs/Guide/Text with Marker', '64d'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Tile Layer',
        component: ComponentCreator('/docs/Guide/Tile Layer', '2c6'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/Guide/Vector Layers',
        component: ComponentCreator('/docs/Guide/Vector Layers', 'afa'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '8e4'),
        exact: true,
        sidebar: "gettingStarted"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '46f'),
        exact: true,
        sidebar: "gettingStarted"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9cd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
