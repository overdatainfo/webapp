import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'Categorias',
    icon: 'book-open-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/admin/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/admin/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Configurações',
    icon: 'settings-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  }
];
