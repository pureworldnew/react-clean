import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'ui',
    icon: 'iconsminds-pantone',
    label: 'menu.ui',
    to: `${adminRoot}/ui`,
    subs: [
      {
        id: 'ui-forms',
        label: 'menu.forms',
        to: `${adminRoot}/ui/forms`,
        subs: [
          {
            icon: 'simple-icon-notebook',
            label: 'menu.layouts',
            to: `${adminRoot}/ui/forms/layouts`,
          },
          {
            icon: 'simple-icon-puzzle',
            label: 'menu.components',
            to: `${adminRoot}/ui/forms/components`,
          },
          {
            icon: 'simple-icon-check',
            label: 'menu.validations',
            to: `${adminRoot}/ui/forms/validations`,
          },
          {
            icon: 'simple-icon-magic-wand',
            label: 'menu.wizard',
            to: `${adminRoot}/ui/forms/wizard`,
          },
        ],
      },
      {
        id: 'ui-components',
        label: 'menu.components',
        to: `${adminRoot}/ui/components`,
        subs: [
          {
            icon: 'simple-icon-bell',
            label: 'menu.alerts',
            to: `${adminRoot}/ui/components/alerts`,
          },
          {
            icon: 'simple-icon-badge',
            label: 'menu.badges',
            to: `${adminRoot}/ui/components/badges`,
          },
          {
            icon: 'simple-icon-control-play',
            label: 'menu.buttons',
            to: `${adminRoot}/ui/components/buttons`,
          },
          {
            icon: 'simple-icon-layers',
            label: 'menu.cards',
            to: `${adminRoot}/ui/components/cards`,
          },
          {
            icon: 'simple-icon-picture',
            label: 'menu.carousel',
            to: `${adminRoot}/ui/components/carousel`,
          },
          {
            icon: 'simple-icon-chart',
            label: 'menu.charts',
            to: `${adminRoot}/ui/components/charts`,
          },
          {
            icon: 'simple-icon-arrow-up',
            label: 'menu.collapse',
            to: `${adminRoot}/ui/components/collapse`,
          },
          {
            icon: 'simple-icon-arrow-down',
            label: 'menu.dropdowns',
            to: `${adminRoot}/ui/components/dropdowns`,
          },
          {
            icon: 'simple-icon-book-open',
            label: 'menu.editors',
            to: `${adminRoot}/ui/components/editors`,
          },

          {
            icon: 'simple-icon-star',
            label: 'menu.icons',
            to: `${adminRoot}/ui/components/icons`,
          },
          {
            icon: 'simple-icon-note',
            label: 'menu.input-groups',
            to: `${adminRoot}/ui/components/input-groups`,
          },
          {
            icon: 'simple-icon-screen-desktop',
            label: 'menu.jumbotron',
            to: `${adminRoot}/ui/components/jumbotron`,
          },
          {
            icon: 'simple-icon-map',
            label: 'menu.maps',
            to: `${adminRoot}/ui/components/maps`,
          },
          {
            icon: 'simple-icon-docs',
            label: 'menu.modal',
            to: `${adminRoot}/ui/components/modal`,
          },
          {
            icon: 'simple-icon-cursor',
            label: 'menu.navigation',
            to: `${adminRoot}/ui/components/navigation`,
          },
          {
            icon: 'simple-icon-pin',
            label: 'menu.popover-tooltip',
            to: `${adminRoot}/ui/components/popover-tooltip`,
          },
          {
            icon: 'simple-icon-shuffle',
            label: 'menu.sortable',
            to: `${adminRoot}/ui/components/sortable`,
          },
          {
            icon: 'simple-icon-grid',
            label: 'menu.tables',
            to: `${adminRoot}/ui/components/tables`,
          },
        ],
      },
    ],
  },
  {
    id: 'listings',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.listings',
    to: `${adminRoot}/listings`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.need',
        to: `${adminRoot}/listings/need`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.have',
        to: `${adminRoot}/listings/have`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.contactor',
        to: `${adminRoot}/listings/contactor`,
      },
    ],
  },
  {
    id: 'myprofile',
    icon: 'iconsminds-bucket',
    label: 'menu.my-profile',
    to: `${adminRoot}/my-profile`,
  },
  {
    id: 'editprofile',
    icon: 'iconsminds-bucket',
    label: 'menu.edit-profile',
    to: `${adminRoot}/edit-profile`,
  },
  {
    id: 'mylistings',
    icon: 'iconsminds-bucket',
    label: 'menu.my-listings',
    to: `${adminRoot}/my-listings`,
  },
  {
    id: 'emailnotification',
    icon: 'iconsminds-bucket',
    label: 'menu.settings',
    to: `${adminRoot}/settings`,
  },
];
export default data;
