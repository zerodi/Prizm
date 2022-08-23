export interface ZuiVersionMeta {
  label: string;
  link?: string;
  baseHref?: string;
}

export const ZUI_VERSIONS_META: readonly ZuiVersionMeta[] = [
  // TODO later add next version
  // {
  //     label: 'next',
  //     baseHref: 'next',
  // },
  {
    label: 'NEXT (v1.0.0)',
    baseHref: '',
  },
  {
    label: 'LTS (v0.13.0)',
    link: 'https://ziiot-dev-07.kube01.yc.ziiot.ru/zui-sdk/storybook/',
  },
];