import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/#')
    },
    {
      text: 'About Us',
      href: getPermalink('/#aboutus'),
    },
    {
      text: 'Products',
      href: getPermalink('/#products'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ]
};

export const footerData = {
  
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/TraxBee/' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(~/assets/images/SayajiInfotechlogo.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://sayajiinfotech.com/"> Sayaji Infotech</a> · All rights reserved.
  `,
};
